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
               
            <li>
                <Link to="/user-profile">
                    <FontAwesomeIcon icon={faIdCard} />
                    <span>Personal Information</span>
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