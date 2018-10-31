import React from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
const header_container = css({
	fontFamily: "'Montserrat', sans-serif",
	display: 'flex',
	alignContent: 'center',
	height: 60,
	marginBottom: 10,
	justifyContent: 'space-between',
	div: {
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

const Header = () => (
	<div className={header_container}>
		<div>
			<Link to="/">NATHAN BARRETT</Link>
		</div>
		<div className={header_right}>
			<ul>
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<Link to="/work">Work</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</div>
	</div>
);

export default Header;
