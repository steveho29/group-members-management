import React from 'react';
import jwt_decode from "jwt-decode";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { useState, useEffect } from 'react';
import { Tabs, Tab } from "react-bootstrap";
import { Formik } from 'formik';

import { ReactTable } from '../../_components/_helpers/MemberTable';

import { appDispatch } from "../../store/appDispatch";
// import { getgroupList, getProjectTasks, getTaskContributors, removeTaskContributor, addTaskContributor, addProjectTask, updateProjectTask } from '../../store/groupSlice';
import { getUserInfo, updateUser } from "../../store/userSlice";
import { axiosAPI } from "../../api/api";
import axios from 'axios';
import { useParams } from "react-router-dom";

import { toastifyAction } from "../../store/toastifySlice";
import { toast } from "react-toastify";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { inviteMember, kickMember, updateGroup, getAllGroups } from '../../store/groupSlice';

const GroupDetail = () => {
    let { groups } = useSelector(state => state.group);
    let { user } = useSelector(state => state.user);
    const [key, setKey] = useState("members");
    const accessToken = localStorage.getItem("accessToken");
    const toastify = useSelector((state) => state.toastify);
    const decoded = jwt_decode(accessToken);
    const dispatch = useDispatch();
    const { id } = useParams()
    const [group, setGroup] = useState(null)
    const [onShow, setShow] = useState(false);
    useEffect(() => {
        const func = async () => {
            setGroup(groups?.filter(group => group.id == id)[0])
        }
        func();
    }, [groups]);

    const onChangeTab = (key) => {
    }

    const columns = [
        {
            Header: 'First Name',
            accessor: 'user.first_name'
        },
        {
            Header: 'Last Name',
            accessor: 'user.last_name'
        },
        {
            Header: 'Email',
            accessor: 'user.email'
        },
        {
            Header: 'Joined At',
            accessor: 'joined_at'
        },
    ];


    const onClick = () => {
        setShow(!onShow);
    }
    useEffect(() => {
        const { message, type } = toastify;
        if (!message) return;
        toast(message, { type: type });
        dispatch(toastifyAction.clearMessage());
    }, [toastify]);

    const onKick = async ({userId}) => {
        await appDispatch(dispatch, kickMember({groupId: id, id: userId}))
        await appDispatch(dispatch, getAllGroups())
    }

    const onAssign = async ({userId}) => {
        await appDispatch(dispatch, updateGroup({groupId: id, data: {co_owner: userId}}))
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h4 className="mb-4"> {"Group > " + group?.name}</h4>
                    <div className="appointment-tab">
                        <Tabs activeKey={key}
                            onSelect={(k) => {
                                setKey(k);
                                onChangeTab(k);
                            }}
                            id="uncontrolled-tab-example">

                            <Tab eventKey="members" title="Members">
                                <div className="card card-table mb-0">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            {group ? (<ReactTable
                                                group={group}
                                                data={group?.members}
                                                columns={columns}
                                                onRowClick={() => { }}
                                                onKick={({userId}) => onKick({userId})}
                                                onAssign={({userId}) => onAssign({userId})}
                                            />) : null}
                                        </div>
                                    </div>
                                </div>
                            </Tab>

                            <Tab eventKey="invite" title="Invite">
                                <div className="card card-table mb-0">
                                    <div className="card-body">
                                        <Formik
                                            initialValues={{
                                                email: "",
                                            }}
                                            validate={values => {
                                                const errors = {};
                                                if (!values.email) {
                                                    errors.email = 'Required';
                                                } else if (
                                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                                ) {
                                                    errors.email = 'Invalid email address';
                                                }

                                                return errors;
                                            }}
                                            onSubmit={(values, { setSubmitting }) => {
                                                const func = async () => {
                                                    setSubmitting(false);
                                                    await appDispatch(dispatch, inviteMember({ email: values.email, groupId: id }))
                                                }
                                                func();
                                            }}
                                        >
                                            {({
                                                values,
                                                errors,
                                                touched,
                                                handleChange,
                                                handleBlur,
                                                handleSubmit,
                                                isSubmitting,
                                            }) => (
                                                <form onSubmit={handleSubmit} className="row form-row pl-5 pr-5 pt-4">
                                                    <div className="col-12 col-md-12">
                                                        <div className="form-group">
                                                            <label>Email* {errors.email && touched.email ? <strong className='text-danger'>({errors.email})</strong> : ""}</label>
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.email}
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="submit-section text-center mb-3">
                                                        <button type="submit" disabled={isSubmitting} className="btn btn-primary submit-btn">
                                                            Invite
                                                        </button>
                                                    </div>
                                                </form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </Tab>

                        </Tabs>
                    </div>
                </div>

            </div>
        </div>
    )
}

export { GroupDetail };