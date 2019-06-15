import React, { Component } from 'react';
import axios from 'axios';
import { css } from 'emotion';

import contact from '../images/contact.jpg';
import table from '../images/table.jpg';

const headerImage = css(`
	width: 100%;
	height: 325px;
    background-image: url('${table}');
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
const contactContainer = css(`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  P {
    width: 80%;
  }
`);

class Contact extends Component {
	async handleSubmit(e) {
		e.preventDefault();
		const name = document.getElementById('name').value;
		const email = document.getElementById('inputEmail').value;
		const message = document.getElementById('message').value;
		await axios.post('/api/form', {
			name,
			email,
			message
		});
	}
	render() {
		return (
			<div>
				<div className={headerImage}>
					<h2>Hey, lets talk.</h2>
				</div>
				<div className={contactContainer}>
					<p>
						Please free to reach out to me any time for development
						opportunities, pricing information, or if you just want
						to grab a cup of coffee. I am currently looking for work
						and would love to hear from you!
					</p>
				</div>
				{/* For future use /*}
        {/* <div className={formContainer}>
          <form method="POST" onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" onChange={this.handleChange} />
            </div>
            <div>
              <label htmlFor="inputEmail">Email address</label>
              <input type="email" id="inputEmail" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea rows="5" id="message" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div> */}
			</div>
		);
	}
}

export default Contact;
