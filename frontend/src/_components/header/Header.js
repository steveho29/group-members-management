import React from 'react';
import { Dropdown } from 'react-bootstrap';
import $ from "jquery";
import { Link } from 'react-router-dom';

// Import Images
import LogoWhite from '../../assets/img/logo-white.png';
import Logo from '../../assets/img/logo.png';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faShoppingCart, faTimes } from '@fortawesome/fontawesome-free-solid';


class Header extends React.Component {
	componentDidMount() {
		// Mobile menu sidebar overlay

		$('body').append('<div className="sidebar-overlay"></div>');
		$(document).on('click', '#mobile_btn', function () {
			$('main-wrapper').toggleClass('slide-nav');
			$('.sidebar-overlay').toggleClass('opened');
			$('html').addClass('menu-opened');
			return false;
		});

		$(document).on('click', '.sidebar-overlay', function () {
			$('html').removeClass('menu-opened');
			$(this).removeClass('opened');
			$('main-wrapper').removeClass('slide-nav');
		});

		$(document).on('click', '#menu_close', function () {
			$('html').removeClass('menu-opened');
			$('.sidebar-overlay').removeClass('opened');
			$('main-wrapper').removeClass('slide-nav');
		});

		//scroll header

		$(window).scroll(function () {
			var sticky = $('.min-header'),
				scroll = $(window).scrollTop();
			if (scroll >= 100) {
				sticky.addClass('nav-sticky');
				$('body').addClass('map-up');
			}
			else {
				sticky.removeClass('nav-sticky');
				$('body').removeClass('map-up');
			}

		});
	}

	render() {
		const exclusionArray = []
		if (exclusionArray.indexOf(this.props.location.pathname) >= 0) {
			return '';
		}

		const pathname = this.props.location.pathname;

		return (
			<header className={`header ${(pathname === ('/') ? 'min-header' : '')}`}>
				<nav className="navbar navbar-expand-lg header-nav">
					<div className="navbar-header">
						
					</div>
					<div className="main-menu-wrapper">
						<div className="menu-header">
							<Link to="/" className="menu-logo">
								<img src={Logo} className="img-fluid" alt="Logo" />
							</Link>
							<Link to="" id="menu_close" className="menu-close">
								<FontAwesomeIcon icon={faTimes} />
							</Link>
						</div>
						<ul className="main-nav">
							<li className={pathname === ('/') ? 'active' : ''}>
								<Link to="/">Home</Link>
							</li>
							<li className={`has-submenu ${pathname === ('/blog-list') ? 'active' : pathname === ('/blog-grid') ? 'active' : pathname === ('/blog-details') ? 'active' : ''}`}>
								<Link to="/blog-grid">Blog</Link>
							</li>
						</ul>
					</div>
					<div className="nav header-navbar-rht menu-select">
						
					</div>
				</nav>
			</header>
		)
	}
}

export { Header };