import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import LoginImg from '../../assets/img/login-banner.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { appDispatch } from "../../store/appDispatch";

import { toastifyAction } from "../../store/toastifySlice";
import { signup } from "../../store/authSlice";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("")

	const toastify = useSelector((state) => state.toastify);
	const dispatch = useDispatch();
	const history = useHistory()

	useEffect(() => {
		const { message, type } = toastify;
		if (!message) return;
		toast(message, { type: type });
		if (type != 'error')
			history.push({ pathname: '/login' })
		dispatch(toastifyAction.clearMessage());
	}, [toastify]);

	const handleRegister = async (e) => {
		e.preventDefault();
		await appDispatch(dispatch, signup({ email, password, first_name, last_name }));
	}
	return (
		<div>

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
												<h3>Register</h3>
											</div>

											{/* Register Form */}
											<form>
												<div className="form-group form-focus">
													<input type="email" name='email' className="form-control floating" onChange={(e) => setEmail(e.target.value)} />
													<label className="focus-label">Email</label>
												</div>
												<div className="form-group form-focus">
													<input type="text" name='first_name' className="form-control floating" onChange={(e) => setFirstName(e.target.value)} />
													<label className="focus-label">First Name</label>
												</div>
												<div className="form-group form-focus">
													<input type="text" name='last_name' className="form-control floating" onChange={(e) => setLastName(e.target.value)} />
													<label className="focus-label">Last Name</label>
												</div>
												<div className="form-group form-focus">
													<input type="password" name='password' className="form-control floating" onChange={(e) => setPassword(e.target.value)} />
													<label className="focus-label">Create Password</label>
												</div>
												<div className="terms-and-policy pt-2 pb-2">
													<input type="checkbox" required name="checkbox" defaultValue="check" id="agree" /><span className="agree">I agree to these <span className="terms"><Link to="/terms-condition" target="_blank">Terms of Use</Link> and <Link to="/privacy-policy" target="_blank">Privacy Policy</Link></span></span>
												</div>
												<div className="text-right">
													<Link to="/login" className="forgot-link">Already have an account?</Link>
												</div>
												<button className="btn btn-primary btn-block btn-lg login-btn" type="submit" onClick={(e) => handleRegister(e)}>Signup</button>
												<div className="login-or">
													<span className="or-line"></span>
													<span className="span-or">or</span>
												</div>
												<div className="row form-row social-login">
													<div className="col-6">
														<Link to="#" className="btn btn-facebook btn-block"><FontAwesomeIcon icon={faFacebookF} className="mr-1" /> Login</Link>
													</div>
													<div className="col-6">
														<Link to="#" className="btn btn-google btn-block"><FontAwesomeIcon icon={faGoogle} className="mr-1" /> Login</Link>
													</div>
												</div>
											</form>
											{/* Register Form */}

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

export { Register };