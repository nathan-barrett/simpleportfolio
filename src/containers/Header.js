import React from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';

/** Stylin' */
const header_container = css({
	fontFamily: "'Montserrat', sans-serif",
	display: 'flex',
	alignContent: 'center',
	height: 60,
	marginBottom: 10,
	justifyContent: 'space-between',
	section: {
		alignSelf: 'center',
		a: {
			textDecoration: 'none',
			lineHeight: '1.2em',
			fontSize: 32,
			color: 'black',
			fontWeight: 500,
			alignSelf: 'center'
		}
	}
});

const header_right = css({
	alignSelf: 'flex-end',
	ul: {
		listStyle: 'none',
		display: 'flex',
		flexDirection: 'row',

		li: {
			a: {
				color: 'grey',
				textDecoration: 'none',
				fontSize: 16,
				padding: 10,
				'&:hover': {
					color: 'black',
					cursor: 'pointer'
				}
			}
		}
	}
});

const selected = css({
	borderBottom: '2px solid'
});
const Header = () => {
	const location = window.location.pathname;
	return (
		<header className={header_container}>
			<section>
				<Link to="/">NATHAN BARRETT</Link>
			</section>
			<nav className={header_right}>
				<ul>
					<li>
						<Link
							className={location === '/' ? selected : ''}
							to="/"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							className={location === '/work' ? selected : ''}
							to="/work"
						>
							Work
						</Link>
					</li>
					<li>
						<Link
							className={location === '/contact' ? selected : ''}
							to="/contact"
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
