import React from 'react';

import { Link } from 'react-router-dom';

function titleCase(str) {
    var splitStr = str.toLowerCase().split('-');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

const PathBar = (props) => {
    const pathname = titleCase(props.location.pathname.substring(1));

    return (
        <div className="breadcrumb-bar" style={{ backgroundColor: 'gray' }}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-12 col-12">
                        <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                {(pathname !== "Dashboard") ? <li className="breadcrumb-item active" aria-current="page">{pathname}</li> : ""}

                            </ol>
                        </nav>
                        <h2 className="breadcrumb-title">{pathname}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { PathBar };