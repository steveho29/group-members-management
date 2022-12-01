import React from 'react';
import { Link } from 'react-router-dom'

// Import Image
import LoginImg from '../../assets/img/login-banner.png';

class ForgotPassword extends React.Component {
	
    render() {
        return (
			<div>
				{/* Breadcrumb */}
				<div className="breadcrumb-bar">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-md-12 col-12">
								<nav aria-label="breadcrumb" className="page-breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Forgot Password</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Forgot Password</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="account-page">
					<div className="content">
						<div className="container">
							
							<div className="row">
								<div className="col-md-8 offset-md-2">
									
									{/* Account Content */}
									<div className="account-content">
										<div className="row align-items-center justify-content-center">
											<div className="col-md-7 col-lg-6 login-left">
												<img src={LoginImg} className="img-fluid" alt="Login Banner" />	
											</div>
											<div className="col-md-12 col-lg-6 login-right">
												<div className="login-header">
													<h3>Forgot Password?</h3>
													<p className="small text-muted">Enter your email to get a password reset link</p>
												</div>
												
												{/* Forgot Password Form */}
												<form action="/login">
													<div className="form-group form-focus">
														<input type="email" className="form-control floating" />
														<label className="focus-label">Email</label>
													</div>
													<div className="text-right">
														<Link to="/login" className="forgot-link">Remember your password?</Link>
													</div>
													<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Reset Password</button>
												</form>
												{/* Forgot Password Form */}
												
											</div>
										</div>
									</div>
									{/* Account Content */}
									
								</div>
							</div>

						</div>

					</div>
				</div>					
				{/* Page Content */}
			</div>
        )
    }
}
export { ForgotPassword };