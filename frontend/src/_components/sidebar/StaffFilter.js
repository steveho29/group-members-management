import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserClock, faColumns, faComments, faEnvelope, faLock, faCalendarMinus, faSignOutAlt, faStar, faBed, faIdCard } from '@fortawesome/fontawesome-free-solid';

const StaffFilter = ({ position: Position = "", level: Level = 0 }) => {
    return (
        <ul>
            <li>
                <Link to="/dashboard">
                    <FontAwesomeIcon icon={faColumns} />
                    <span>Dashboard</span>
                </Link>
            </li>
            {
                ["Admin"].includes(Position) || (Level === 2 && Position === "Manager") ?
                    <li>
                        <Link to="/profile-management">
                            <FontAwesomeIcon icon={faIdCard} />
                            <span>Quản lý profile</span>
                        </Link>
                    </li> : ""
            }
            {
                ["Admin", "Manager", "IT"].includes(Position) ?
                    <li>
                        <Link to="/request-management">
                            <FontAwesomeIcon icon={faIdCard} />
                            <span>Quản lý request</span>
                        </Link>
                    </li> : ""
            }
            {
                ["Admin"].includes(Position) ?
                    <li>
                        <Link to="/project-management">
                            <FontAwesomeIcon icon={faIdCard} />
                            <span>Quản lý project</span>
                        </Link>
                    </li> : ""
            }
            {
                ["Admin"].includes(Position) ?
                    <li>
                        <Link to="/department-management">
                            <FontAwesomeIcon icon={faIdCard} />
                            <span>Quản lý department</span>
                        </Link>
                    </li> : ""
            }
            <li>
                <Link to="/user-profile">
                    <FontAwesomeIcon icon={faIdCard} />
                    <span>Thông tin cá nhân</span>
                </Link>
            </li>
            <li>
                <Link to="/ot-request">
                    <FontAwesomeIcon icon={faUserClock} />
                    <span>Request OT</span>
                </Link>
            </li>
            <li>
                <Link to="/nghi-phep-request">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Request nghỉ phép</span>
                </Link>
            </li>
            <li>
                <Link to="/wfh-request">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>Request WFH</span>
                </Link>
            </li>
            <li>
                <Link to="/it-support-request">
                    <FontAwesomeIcon icon={faStar} />
                    <span>Yêu cầu thiết bị hỗ trợ</span>
                </Link>
            </li>
            <li>
                <Link to="/nghi-phep-history">
                    <FontAwesomeIcon icon={faCalendarMinus} />
                    <span>Lịch sử nghỉ phép</span>
                </Link>
            </li>
            <li>
                <Link to="/logout">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Logout</span>
                </Link>
            </li>
        </ul>
    )
}

export { StaffFilter }