import React from 'react';

import { appDispatch } from "../../store/appDispatch";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useState, useEffect } from 'react';
import { GroupForm } from './Request';
import { createGroup, updateGroup, inviteMember, kickMember, getAllGroups } from '../../store/groupSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimes, faCalendar } from '@fortawesome/fontawesome-free-solid';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ITSupportRequest = () => {
    const { user } = useSelector(state => state.user);
    const {} = useSelector(state => state.group)
    const [ITSupportRequest, setITSupportRequest] = useState([]);
    const [onShow, setShow] = useState(false);
    const [onUpdate, setUpdate] = useState([]);
    const [logView, setLogView] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const getGroup = async () => {
            await appDispatch(dispatch, getAllGroups({user_id: user.id}));
        }
        user.id && getGroup();
    }, [user]);


    const onOpen = () => {
        setShow(true);
    }

    const createGroupCallback = (data) => {
        console.log(data)
        const func = async () => {
            data.owner = user.id
            await appDispatch(dispatch, createGroup(data));
            await appDispatch(dispatch, getAllGroups({user_id: user.id}));
            setShow(false);
        }
        func();
    }

   
    const onUpdateClick = (index) => {
        setUpdate([...onUpdate.slice(0, index), true, ...onUpdate.slice(index + 1, onUpdate.length)]);
    }

    const handleCloseUpdate = (index) => {
        setUpdate([...onUpdate.slice(0, index), false, ...onUpdate.slice(index + 1, onUpdate.length)]);
    }

    const onLogClick = (index) => {
        setLogView([...logView.slice(0, index), true, ...logView.slice(index + 1, logView.length)]);
    }

    const handleLogDecision = (index) => {
        setLogView([...logView.slice(0, index), false, ...logView.slice(index + 1, logView.length)]);
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'APPROVED': return 'text-success';
            case 'DECLINED': return 'text-danger';
            case 'VERIFIED': return 'text-muted';
            case 'PAIDOUT': return 'text-primary';
            case 'DONE': return 'text-secondary';
            default: return '';
        }
    }

    return (
        <div className="appointments">

            <div className="p-2 pl-3 pr-3 d-flex mb-2 justify-content-end">

                <button className='btn btn-secondary' onClick={onOpen}>Create New Group</button>

            </div>

            {
                onShow ? <GroupForm onClick={createGroupCallback} /> : ITSupportRequest.map((request, key) => <div className="appointment-list" key={key}>
                    <div className="profile-info-widget">
                        <div className="profile-det-info">
                            <h3>Detail</h3>
                            <div className="customer-details">
                                <div className='d-flex'>
                                    <h5 style={{ width: '70px' }}>Create:</h5>
                                    <h5 style={{ width: '120px' }}>{new Date(request.created_at).toDateString()}</h5>
                                </div>
                                <div className='d-flex'>
                                    <h5 style={{ width: '70px' }}>Status:</h5>
                                    <h5 style={{ width: '120px' }} className={`${getStatusColor(request.status)} font-weight-bold`}>{request.status}</h5>
                                </div>
                                <div className='d-flex'>
                                    <h5 style={{ width: '70px' }}>Cost:</h5>
                                    <h5 style={{ width: '120px' }}>{request.cost}</h5>
                                </div>
                                {
                                    request.receivers ? <div className='d-flex'>
                                        <h5 style={{ width: '70px' }}>Receiver:</h5>
                                        <h5 style={{ width: '120px' }}>{`${request.receivers[0].first_name} ${request.receivers[0].last_name}`}</h5>
                                    </div> : ""
                                }
                            </div>
                        </div>
                        <div className="profile-det-info ml-5">
                            <h3>Message</h3>
                            <div className="customer-details">
                                <h5 style={{ width: '500px' }}> {request.message}</h5>
                                {
                                    request.feedback ? <div className='mt-3'>Feedback
                                        <h5 style={{ width: '500px', marginTop: '5px' }}> {request.feedback}</h5>
                                    </div> : ""
                                }
                                {
                                    request.status !== 'PENDING' ? <div className='mt-3'>Lastest log
                                        <h5 style={{ width: '500px', marginTop: '5px' }}> {
                                            `${request.logs.data[request.logs.data.length - 1].message} at ${new Date(request.logs.data[request.logs.data.length - 1].created_at).toLocaleString()}`
                                        }
                                        </h5>
                                    </div> : ""
                                }
                            </div>
                        </div>
                    </div>
                    {
                        request.status === 'PENDING' ?
                            <div className="appointment-action">
                                <div>
                                    <button to="#" className="btn btn-sm bg-success-light mr-2" onClick={() => onUpdateClick(key)}>
                                        <FontAwesomeIcon icon={faPencilAlt} /> Update
                                    </button>
                                    <Dialog open={onUpdate[key]} onClose={() => handleCloseUpdate(key)}>
                                        <DialogTitle>Update request</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText className='mb-2'>
                                                <strong>Request id:</strong> {request._id}
                                            </DialogContentText>
                                            <DialogContentText>

                                                {/* <GroupForm onClick={updateITSupportRequest} onCloseForm={() => handleCloseUpdate(key)} data={request} /> */}

                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={() => handleCloseUpdate(key)}>Cancel</Button>
                                        </DialogActions>
                                    </Dialog>

                                    {/* <button to="#" className="btn btn-sm bg-danger-light" onClick={() => handleDeleteRequest(request)}>
                                        <FontAwesomeIcon icon={faTimes} /> Remove
                                    </button> */}

                                </div>
                            </div> :
                            <div className="appointment-action">
                                <div>
                                    <button to="#" className="btn btn-sm bg-danger-light" onClick={() => onLogClick(key)}>
                                        <FontAwesomeIcon icon={faCalendar} /> Log
                                    </button>
                                    <Dialog open={logView[key]} onClose={() => handleLogDecision(key)}>
                                        <DialogTitle>Request log</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText className='mb-4'>
                                                <strong>Request id:</strong> {request._id}
                                            </DialogContentText>
                                            <DialogContentText>
                                                {request.logs.data.map((ele, key) => <p key={key}>{`${ele.message} at ${new Date(ele.created_at).toLocaleString()}`}</p>)}
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={() => handleLogDecision(key)}>Cancel</Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                            </div>
                    }
                </div>
                )
            }

        </div>
    )
}

export { ITSupportRequest };