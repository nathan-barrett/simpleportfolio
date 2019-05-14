import React from 'react';
import { css } from 'emotion';

import books from '../images/books.jpg';
import forest from '../images/forest.jpg';

const aboutImage = css(`
	width: 100%;
	height: 400px;
    background-image: url('${forest}');
    background-repeat: no-repeat;
    background-size: cover;
	display: flex;
	justify-content: center;
    align-items: cover;
	h2 {
        color: white;
        align-self: center;
        font-size: 48px;
        width: 70%;
        text-align: center;
	}
`);

const aboutContainer = css(`
    display: grid;
    padding: 40px 20px 40px 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
`);

const aboutLeftColumn = css(`
    display: flex;
    justify-content: center;
    div {
        
        p {
            text-align: center;
            width: 100%;
            margin-bottom: 0;
            font-size: 18px;
        }
        ul {
            list-style: none;
            padding-left: 0;
            margin: 0;
            width: 100%;
            text-align: center;
            li {
                margin: 20px;
            }
        }
    }
`);

const aboutRightColumn = css(`
    display: flex;
    justify-content: center;
    div {
        width: 80%;
        p:first-child {
            text-align: center;
            font-size: 18px;
        }
        p:nth-child(2) {
            margin-top: 0;
        }
    }
`);

const array = [
	'a hot cup of coffee',
	'learning with others',
	'starting a new book',
	'solving problems as a team',
	'exploring the pacific northwest'
];

const About = () => (
	<div>
		<div className={aboutImage}>
			<h2>
				I'm Nathan. <br /> I like to create thoughtful <br />
				web sites.
			</h2>
		</div>
		<div className={aboutContainer}>
			<div className={aboutLeftColumn}>
				<div>
					<p>THINGS I LOVE</p>
					<ul>{array.map((i) => [<li key={i}>{i}</li>])}</ul>
				</div>
			</div>
			<div className={aboutRightColumn}>
				<div>
					<p>HELLO!</p>
					<p>
						I'm a Web Developer, working mostly in the front-end,
						but dabbling in back end as well. Currently, I am
						enjoying working with React, Redux, TypeScript and
						GrpahQL. I'm currently lerning more anbout Python, Node
						and Postgres.
					</p>
					<p>
						I took a bit of an unusual path into development. After
						I went to college for History and Education, I moved to
						Portland where I worked in both non-profits and in
						customer facing roles. I love being able to come up with
						solutions for complex problems, and it sparked my
						interest in development.
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default About;
