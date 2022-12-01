import React from 'react';
import { Link } from 'react-router-dom'

class Count extends React.Component {
    render() {
        return(
            <div>
                {/* Count Section */}
                <section className="section style-count">
                    <div className="counter">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-3">
                                    <div className="count-box">
                                        <div className="d-flex justify-content-center">
                                            <h3 className="counter-count mr-2">2500</h3>
                                            <h3>+</h3>
                                        </div>
                                        <p>Happy Customers</p>
                                    </div>
                                </div>

                                <div className="col-12 col-md-3">
                                    <div className="count-box">
                                        <div className="d-flex justify-content-center">
                                            <h3 className="counter-count mr-2">954</h3>
                                            <h3>+</h3>
                                        </div>
                                        <p>Trained Stylists</p>
                                    </div>
                                </div>

                                <div className="col-12 col-md-3">
                                    <div className="count-box">
                                        <div className="d-flex justify-content-center">
                                            <h3 className="counter-count mr-2">1050</h3>
                                            <h3>+</h3>
                                        </div>
                                        <p>Courses</p>
                                    </div>
                                </div>

                                <div className="col-12 col-md-3">
                                    <div className="count-box">
                                        <div className="d-flex justify-content-center">
                                            <h3 className="counter-count mr-2">652</h3>
                                            <h3>+</h3>
                                        </div>
                                        <p>Service Done</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Count Section */}
            </div>
        )
    }
}
export { Count };