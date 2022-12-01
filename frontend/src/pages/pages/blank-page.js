import React from 'react';
import { Link } from 'react-router-dom'

class BlankPage extends React.Component {
    render() {
        return(
            <div>
                {/* Breadcrumb */}
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Blank Page</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Blank Page</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {/* Page Content */}
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h5>Blank Page</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Content */}
            </div>
        )
    }
}
export { BlankPage };