import React from 'react';
import { Link } from 'react-router-dom'

import { faQuoteLeft, faStar } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Images
import Client1 from '../../assets/img/profile/client1.png';

class Testimonials extends React.Component {
    render() {
        return (
            <div>
                {/* Testimonials */}
                <section className="section testimonials">
                    <div className="container">					
                        <div className="row justify-content-center">	
                            <div className="section-header text-center">						
                                <h2>Reviews From Customers</h2>
                                <p className="sub-title">What our Customers say about Customers</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-6 col-lg-4 cust-says">
                                <div className="testi-user">
                                    <img src={Client1} alt="Testimonial" />
                                </div>
                                <div className="card">	
                                    <div className="cust-header">
                                        <div className="rating text-center">
                                            <FontAwesomeIcon icon={faStar} className='filled' />
                                            <FontAwesomeIcon icon={faStar} className='filled' />
                                            <FontAwesomeIcon icon={faStar} className='filled' />
                                            <FontAwesomeIcon icon={faStar} className='filled' />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>		
                                        <h3 className="text-center">Amenda Cathrine</h3>			
                                        <p>Pedicure</p>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat sed fermentum, eget tincidunt aliquet. Et, amet, scelerisque ultrices.</p>
                                    <div className="row row-sm cust-footer">
                                        <div className="col-8 align-items-center d-flex">
                                            <Link to="#" className="cust-name">Morris johnoson<span> - stylist </span></Link>
                                        </div>
                                        <div className="col-4 text-right">
                                            <FontAwesomeIcon icon={faQuoteLeft} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 cust-says">
                                <div className="testi-user">
                                    <img src={Client1} alt="Testimonial" />
                                </div>
                                <div className="card">	
                                    <div className="cust-header">
                                        <div className="rating text-center">
                                            <FontAwesomeIcon icon={faStar} className='filled' />
                                            <FontAwesomeIcon icon={faStar} className='filled' />
                                            <FontAwesomeIcon icon={faStar} className='filled' />
                                            <FontAwesomeIcon icon={faStar} className='filled' />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>		
                                        <h3 className="text-center">Julieana</h3>			
                                        <p>Pedicure</p>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat sed fermentum, eget tincidunt aliquet. Et, amet, scelerisque ultrices.</p>
                                    <div className="row row-sm cust-footer">
                                        <div className="col-8 align-items-center d-flex">
                                            <Link to="#" className="cust-name">Morris johnoson<span> - stylist </span></Link>
                                        </div>
                                        <div className="col-4 text-right">
                                            <FontAwesomeIcon icon={faQuoteLeft} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 cust-says">
                                <div className="testi-user">
                                    <img src={Client1} alt="Testimonial" />
                                </div>
                                <div className="card">	
                                    <div className="cust-header">
                                        <div className="rating text-center">
                                            <FontAwesomeIcon icon={faStar} className='filled' />
                                            <FontAwesomeIcon icon={faStar} className='filled' />
                                            <FontAwesomeIcon icon={faStar} className='filled' />
                                            <FontAwesomeIcon icon={faStar} className='filled' />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>		
                                        <h3 className="text-center">Mary Roseline</h3>			
                                        <p>Pedicure</p>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat sed fermentum, eget tincidunt aliquet. Et, amet, scelerisque ultrices.</p>
                                    <div className="row row-sm cust-footer">
                                        <div className="col-8 align-items-center d-flex">
                                            <Link to="#" className="cust-name">Morris johnoson<span> - stylist </span></Link>
                                        </div>
                                        <div className="col-4 text-right">
                                            <FontAwesomeIcon icon={faQuoteLeft} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Testimonials */}
            </div>
        )
    }
}
export { Testimonials };