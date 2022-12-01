import { Link } from 'react-router-dom';

const UserProfile = ({ name, email }) => {
    return (
        <div className="profile-info-widget">
            <div className="profile-det-info">
                <h3>{name}</h3>

                <div className="customer-details">
                    <h5 className="mb-0">{email}</h5>
                </div>
            </div>
        </div>
    )
}

export { UserProfile }