import React from 'react';
import jwt_decode from "jwt-decode";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { useState, useEffect } from 'react';
import { Tabs, Tab } from "react-bootstrap";
import { Formik } from 'formik';

import { ReactTable } from '../../_components/_helpers/ReactTable-2';

import { appDispatch } from "../../store/appDispatch";
// import { getgroupList, getProjectTasks, getTaskContributors, removeTaskContributor, addTaskContributor, addProjectTask, updateProjectTask } from '../../store/groupSlice';
import { getUserInfo, updateUser } from "../../store/userSlice";
import { axiosAPI } from "../../api/api";
import axios from 'axios';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const GroupDetail = () => {
    let { groups } = useSelector(state => state.group);
    let { user } = useSelector(state => state.user);
    const [key, setKey] = useState("profile");
    const [open, setOpen] = useState(false);
    const [openCreateTask, setOpenCreateTask] = useState(false);
    const [project, setProject] = useState({});
    const [task, setTask] = useState({});
    const [userInTask, setUserInTask] = useState(false);
    const [taskContributor, setTaskContributor] = useState([]);
    const accessToken = localStorage.getItem("accessToken");
    const decoded = jwt_decode(accessToken);
    const dispatch = useDispatch();

    useEffect(() => {
        const func = async () => {
            // await appDispatch(dispatch, getgroupList({ id_emp: decoded.id }));

        }
        func();
    }, []);

    const onChangeTab = (key) => {
        if (key !== "task")
            setProject({});
    }

    const columns = [
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Description',
            accessor: 'description'
        },
        {
            Header: 'Owner',
            accessor: 'owner.email'
        },
        {
            Header: 'Co Owner',
            accessor: 'co_owner.email'
        }
    ];

    const taskColumns = [
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Started Date',
            accessor: 'start_date'
        },
        {
            Header: 'Ended Date',
            accessor: 'end_date'
        },
        {
            Header: 'Completed Date',
            accessor: 'completed_day'
        }
    ];

    const userColumns = [
        {
            Header: 'Name',
            accessor: a => a.first_name + ' ' + a.last_name
        },
        {
            Header: 'Position',
            accessor: 'position'
        },
        {
            Header: 'Level',
            accessor: 'level'
        }
    ];

    const onProjectClick = (value) => {
        const func = async () => {
            // await appDispatch(dispatch, getProjectTasks({ project_id: value.project.id }));
            console.log(value)
            setProject(value.project);
            setKey("task");
        }
        func();
    }

    const handleClose = () => {
        setOpen(false);
    }


  

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h4 className="mb-4">Personal Information</h4>
                    <div className="appointment-tab">
                        <Tabs activeKey={key}
                            onSelect={(k) => {
                                setKey(k);
                                onChangeTab(k);
                            }}
                            id="uncontrolled-tab-example">
                            <Tab eventKey="profile" title="Profile">
                                <div className="card card-table mb-0">
                                    <div className="card-body">
                                        <Formik
                                            initialValues={{
                                                email: user.email ? user.email : "",
                                                first_name: user.first_name ? user.first_name : "",
                                                last_name: user.last_name ? user.last_name : "",
                                                date_of_birth: user.date_of_birth ? user.date_of_birth : "",
                                                id: user.id ? user.id : ""
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
                                                if (!values.first_name)
                                                    errors.first_name = 'Required';
                                                if (!values.last_name)
                                                    errors.last_name = 'Required';
                                                if (!values.date_of_birth)
                                                    errors.date_of_birth = 'Required';
                                                return errors;
                                            }}
                                            onSubmit={(values, { setSubmitting }) => {
                                                const func = async () => {
                                                    setSubmitting(false);
                                                    await appDispatch(dispatch, updateUser(values));
                                                    await appDispatch(dispatch, getUserInfo({}));
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
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-group">
                                                            <label>Email* {errors.email && touched.email ? <strong className='text-danger'>({errors.email})</strong> : ""}</label>
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                // onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.email}
                                                                className="form-control"
                                                                readOnly={true}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-group">
                                                            <label>Last login</label>
                                                            <input
                                                                type="text"
                                                                value={new Date(user.last_login).toLocaleDateString()}
                                                                className="form-control"
                                                                readOnly={true}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-group">
                                                            <label>First name* {errors.first_name && touched.first_name ? <strong className='text-danger'>({errors.first_name})</strong> : ""}</label>
                                                            <input
                                                                type="text"
                                                                name="first_name"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.first_name}
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-group">
                                                            <label>Last name* {errors.last_name && touched.last_name ? <strong className='text-danger'>({errors.last_name})</strong> : ""}</label>
                                                            <input
                                                                type="text"
                                                                name="last_name"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.last_name}
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-group">
                                                            <label>Date of birth* {errors.date_of_birth && touched.date_of_birth ? <strong className='text-danger'>({errors.date_of_birth})</strong> : ""}</label>
                                                            <input
                                                                type="date"
                                                                name="date_of_birth"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.date_of_birth}
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-12 col-md-6">
                                                        <div className="form-group">
                                                            <label>Level</label>
                                                            <input
                                                                type='text'
                                                                value={user.level}
                                                                className="form-control"
                                                                readOnly={true}
                                                            />
                                                        </div>
                                                    </div> */}
                                                    {/* <div className="col-12 col-md-6">
                                                        <div className="form-group">
                                                            <label>Position</label>
                                                            <input
                                                                type='text'
                                                                value={user.position}
                                                                className="form-control"
                                                                readOnly={true}
                                                            />
                                                        </div>
                                                    </div> */}
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-group">
                                                            <label>Email Verified</label>
                                                            <input
                                                                type='text'
                                                                value={user.email_verified}
                                                                className="form-control"
                                                                readOnly={true}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="submit-section text-center mb-3">
                                                        <button type="submit" disabled={isSubmitting} className="btn btn-primary submit-btn">
                                                            Update
                                                        </button>
                                                    </div>
                                                </form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="project" title="Project">
                                <div className="card card-table mb-0">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <ReactTable
                                                data={groups}
                                                columns={columns}
                                                onRowClick={onProjectClick}
                                            />
                                        </div>
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