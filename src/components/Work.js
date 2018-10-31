import React from 'react';
import { css } from 'emotion';

import arduino from '../images/arduinoMock.jpeg';
import stardew from '../images/StardewMock.jpeg';
import pokemon from '../images/pokeMockup.jpeg';
import FDO from '../images/FDO.jpeg';
import database from '../images/databse.png';
import database2 from '../images/database2.jpg';

const grid = css(`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	grid-gap: 50px;
`);

const overlayTitle = css(`
  transition:all .3s cubic-bezier(.3, 0, 0, 1.3);
  position: relative;
  color: white;
  top:-300px;
`);

const overlayText = css(`
  transition:all .3s cubic-bezier(.3, 0, 0, 1.3);
  position: relative;
  bottom: -300px;
  color: white;
	text-align: center;
  p {
	color: white;
	padding: 0px 20px 20px 20px;
  }
  a {
	color: white;
	border: 2px solid white;
	border-radius: 5px;
	text-decoration: none;
	padding: 10px;
	&:hover {
		background-color: white;
		color: black;
	}
  }
`);
const overlay = css(`
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	top:0;
	z-index:10;
	
	&:after {
		content:'';
		width: 100%;
		height: 100%;
		background-color: #202020;
		opacity:0;
		position: absolute;
		top:0;
		z-index:-10;
		left:0;
		transition:all .3s ease;
  }
`);

const gridItem = css(`
	height: 100%;
	width: 100%;
	position: relative;
	overflow: hidden;
	transition:all .4s ease;
	img {
		width: 100%;
		height: 100%;
	}
	&:hover {
		.${overlayTitle} {
			top: 0;
		}
		.${overlayText} {
			bottom: 0
		}
		.${overlay}:after {
			opacity: .75;
		}
	}
	
`);

const Work = () => (
	<div className={grid}>
		<div className={gridItem}>
			<img alt="Mockup for For Dogs Only" src={FDO} />
			<div className={overlay}>
				<h2 className={overlayTitle}>For Dogs Only</h2>
				<div className={overlayText}>
					<p>React Native application to set up dog play-dates using Redux state management</p>
					<a href="https://github.com/nathan-barrett/ForDogsOnly" rel="noopener noreferrer" target="_blank">
						GitHub Repository
					</a>
				</div>
			</div>
		</div>
		<div className={gridItem}>
			<img alt="Mockup for Node API" src={database} />
			<div className={overlay}>
				<h2 className={overlayTitle}>Node To-do API</h2>
				<div className={overlayText}>
					<p>Node & Express API with authentication using JWT and MongoDB for NoSQL databse</p>
					<a href="https://github.com/nathan-barrett/mongodb-node-todo" rel="noopener noreferrer" target="_blank">
						GitHub Repository
					</a>
				</div>
			</div>
		</div>
		<div className={gridItem}>
			<img alt="Mockup for Event Emitter" src={database2} />
			<div className={overlay}>
				<h2 className={overlayTitle}>Node Event Emitter</h2>
				<div className={overlayText}>
					<p>Event Emitter library using Node and ES6</p>
					<a href="https://github.com/nathan-barrett/simple-event-emitter" rel="noopener noreferrer" target="_blank">
						GitHub Repository
					</a>
				</div>
			</div>
		</div>
		<div className={gridItem}>
			<img alt="Mockup for Arduino" src={arduino} />
			<div className={overlay}>
				<h2 className={overlayTitle}>Plantagotchi</h2>
				<div className={overlayText}>
					<p>Arduino application written in C++ that checks moisture and water house plants</p>
					<a href="https://github.com/nathan-barrett/plantigotchi" rel="noopener noreferrer" target="_blank">
						GitHub Repository
					</a>
				</div>
			</div>
		</div>
		<div className={gridItem}>
			<img alt="Mockup for Pokemon" src={pokemon} />
			<div className={overlay}>
				<h2 className={overlayTitle}>Pokemon JS</h2>
				<div className={overlayText}>
					<p>Pokemon clone using Angular and TypeScript</p>
					<a href="https://github.com/nathan-barrett/PokemonJS" rel="noopener noreferrer" target="_blank">
						GitHub Repository
					</a>
				</div>
			</div>
		</div>
		<div className={gridItem}>
			<img alt="Mockup for Stardew" src={stardew} />
			<div className={overlay}>
				<h2 className={overlayTitle}>Stardew Valley Tribune</h2>
				<div className={overlayText}>
					<p>Web blog using Materialize framework</p>
					<a href="https://github.com/nathan-barrett/StardewBlog" rel="noopener noreferrer" target="_blank">
						GitHub Repository
					</a>
				</div>
			</div>
		</div>
	</div>
);

export default Work;
