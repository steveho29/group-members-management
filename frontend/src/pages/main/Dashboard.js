import React from 'react';
import jwt_decode from "jwt-decode";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { useState, useEffect } from 'react';
import { Tabs, Tab } from "react-bootstrap";
import { Formik } from 'formik';

import { ReactTable } from '../../_components/_helpers/ReactTable-2';

import { appDispatch } from "../../store/appDispatch";
// import { getgroupList, getProjectTasks, getTaskContributors, removeTaskContributor, addTaskContributor, addProjectTask, updateProjectTask } from '../../store/groupSlice';
import { getAllGroups, getJoinedGroups, createGroup } from "../../store/groupSlice";
import { axiosAPI } from "../../api/api";
import axios from 'axios';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import GroupItem from './GroupItem';
import { Grid } from '@mui/material';
import {useHistory} from 'react-router-dom'

import { GroupForm } from './Request';
const Dashboard = () => {
    let { groups, joinedGroups } = useSelector(state => state.group);
    let { otherGroups } = useState([])
    let { user } = useSelector(state => state.user);

    const [key, setKey] = useState("owned");
    const [open, setOpen] = useState(false);
    const [openCreateTask, setOpenCreateTask] = useState(false);
    const [project, setProject] = useState({});
    const [task, setTask] = useState({});
    const [userInTask, setUserInTask] = useState(false);
    const [taskContributor, setTaskContributor] = useState([]);
    const accessToken = localStorage.getItem("accessToken");
    const decoded = jwt_decode(accessToken);
    const dispatch = useDispatch();
    const history = useHistory()

    const [onShow, setShow] = useState(false);
    useEffect(() => {
        const func = async () => {
            await appDispatch(dispatch, getAllGroups());
            await appDispatch(dispatch, getJoinedGroups())
        }
        func();
    }, []);

    useEffect(() => {
        otherGroups = groups?.filter(group => group.owner.id != user?.id && !joinedGroups?.some(g => g.id == group.id))
    }, [groups, joinedGroups])

    const onChangeTab = (key) => {
        if (key !== "task")
            setProject({});
    }

    const createGroupCallback = (data) => {
        console.log(data)
        const func = async () => {
            data.owner = user.id
            await appDispatch(dispatch, createGroup(data));
            await appDispatch(dispatch, getAllGroups({ user_id: user.id }));
            setShow(false);
        }
        func();
    }

    const onGroupClick = (group) => {
        const func = async () => {
            // await appDispatch(dispatch, getProjectTasks({ project_id: value.project.id }));
            console.log(group)
            // setProject(value.project);
            history.push(`/group/${group.id}`)
        }
        func();
    }

    const handleClose = () => {
        setOpen(false);
    }


    const onClick = () => {
        setShow(!onShow);
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h4 className="mb-4">Groups</h4>
                    <div className="p-2 pl-3 pr-3 d-flex mb-2 justify-content-end">
                        <button className='btn btn-secondary' onClick={onClick}>{onShow ? "Back" :  "Create New Group"}</button>
                    </div>
                    {onShow ? <GroupForm onClick={createGroupCallback} /> :
                        <div className="appointment-tab">
                            <Tabs activeKey={key}
                                onSelect={(k) => {
                                    setKey(k);
                                    onChangeTab(k);
                                }}
                                id="uncontrolled-tab-example">
                                <Tab eventKey="owned" title="Owned Groups">
                                    <Grid container spacing={2}>
                                        {groups?.filter(group => group.owner.id == user?.id).map(group => <Grid item><GroupItem key={group.id} ownerAvatar={group.owner.avatar} groupAvatar={group.avatar} title={group.name} onClick={() => onGroupClick(group)}></GroupItem></Grid>)}
                                    </Grid>


                                </Tab>

                                <Tab eventKey="joined" title="Joined Groups">
                                    <Grid container spacing={2}>
                                        {joinedGroups?.map(group => <Grid item><GroupItem key={group.id} ownerAvatar={group.owner.avatar} groupAvatar={group.avatar} title={group.name} onClick={() => { }}></GroupItem></Grid>)}
                                    </Grid>
                                </Tab>
                                <Tab eventKey="all" title="Other Groups">
                                    <Grid container spacing={2}>
                                        {otherGroups?.map(group => <Grid item><GroupItem key={group.id} ownerAvatar={group.owner.avatar} groupAvatar={group.avatar} title={group.name} onClick={() => { }}></GroupItem></Grid>)}
                                    </Grid>


                                </Tab>

                            </Tabs>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}

export { Dashboard };