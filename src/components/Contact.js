import React, { Component } from 'react';
import axios from 'axios';
import { css } from 'emotion';

import contact from '../images/contact.jpg';

const headerImage = css(`
	width: 100%;
	height: 400px;
    background-image: url('${contact}');
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

// const formContainer = css(`
//     width: 100%;
//     padding-top: 10px;
// `);

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
          <h2>Hey. Lets talk.</h2>
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
