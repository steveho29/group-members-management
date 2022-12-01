import React from 'react';
import { Link } from 'react-router-dom'

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {

	render() {
		const pathname = this.props.location.pathname;

		return (
			<footer className={`footer ${(pathname === ('/') ? 'footer-padding' : '')}`} style={{ backgroundColor: 'gray' }}>

				{/* Footer Top */}
				<div className="footer-top">
					<div className="container-fluid">
						<div className="row">
							<div className="col d-flex justify-content-center">

								{/* Footer Widget */}
								<div className="footer-widget footer-about">
									<h2 className="footer-title">About Me</h2>
									<div className="footer-about-content">
										<p>19127368 - Hồ Ngọc Minh Đức</p>
									</div>
								</div>

							</div>

							<div className="col d-flex justify-content-center">

								<div className="footer-widget footer-contact">
									<h2 className="footer-title">Connect with me</h2>
									<div className="footer-contact-info">
										<div className="social-icon">
											<ul>
												<li>
													<Link to="#" target="_blank"><FontAwesomeIcon icon={faFacebookF} /> </Link>
												</li>
												<li>
													<Link to="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /> </Link>
												</li>
												<li>
													<Link to="#" target="_blank"><FontAwesomeIcon icon={faYoutube} /> </Link>
												</li>
												<li>
													<Link to="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
												</li>
											</ul>
										</div>
									</div>
								</div>

							</div>

						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<div className="container-fluid">

						<div className="copyright">
							<div className="row">
								<div className="col-md-12 col-lg-12">
									<div className="copyright-text text-center">
										<p className="mb-0">&copy;Minh Duc 2022.</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

			</footer>
		)
	}
}

export { Footer };