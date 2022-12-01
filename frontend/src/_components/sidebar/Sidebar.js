import React from 'react';

import { appDispatch } from "../../store/appDispatch";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from 'react';
import { setUserRole, getUserInfo } from "../../store/userSlice";

import { UserProfile } from './UserProfile';
import { StaffFilter } from './StaffFilter';
import { refresh } from '../../store/authSlice';


const Sidebar = () => {
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const load = async () => {
            await appDispatch(dispatch, getUserInfo({}));
            await appDispatch(dispatch, refresh({}));
        }
        load();
    }, []);

    return (
        <div>
            {/* Profile Sidebar */}
            <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                    <UserProfile name={user.first_name ?? '' + ' ' + user.last_name ?? ''} email={user.email} />
                </div>
                <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                        <StaffFilter position={user.position} level={user.level} />
                    </nav>
                </div>
            </div>
            {/* Profile Sidebar */}
        </div>
    )
}

export { Sidebar };