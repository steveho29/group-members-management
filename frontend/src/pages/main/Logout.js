import React from 'react';

import { useState } from 'react';
import { useHistory } from "react-router-dom";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { logout } from '../../store/authSlice';
import { useDispatch } from 'react-redux';

const Logout = () => {
    const [open, setOpen] = useState(true);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
        history.goBack();
    };

    const handleLogout = () => {
        const func = async() => {
            await dispatch(logout());
            window.location.reload();
        }
        func();
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Logout</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Do you want to log out ?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleLogout}>Logout</Button>
            </DialogActions>
        </Dialog>
    )
}

export { Logout };