import React from 'react';
import { Link } from 'react-router-dom'

// Import Images
import BannerImg1 from '../../assets/img/banner-1.jpg';
import BannerImg2 from '../../assets/img/banner-2.jpg';

class Banner extends React.Component {
    render() {
        return (
            <div>
                {/* Home Banner */}
                <section className="section-search">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="banner-wrapper">
                                    <div className="banner-header">
                                        <p>Search Stylist, Make an Appointment</p>
                                        <h1>In Our Hand Your Body Look Beautifully And Clean</h1>
                                        <Link to="/login" className="btn-pink">GET STARTED</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="banimg-sec">
                                    <div className="circle"></div>
                                    <div className="circle1"></div>
                                    <img src={BannerImg2} className="banner-bottom" alt="circle2" />
                                    <img src={BannerImg1} className="banner-top" alt="circle1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Home Banner */}
            </div>
        )
    }
}
export { Banner };