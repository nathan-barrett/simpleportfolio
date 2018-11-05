import React from 'react';
import { css } from 'emotion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const footerContainer = css(`
    width: 100%;
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    div {
        justify-content: space-around;
        align-items: center;
        display: flex;
        height: 100%;
        width: 15%;
    }
`);

const iconStyle = css(`
    path {
        fill: black;
    }
    &:hover path {
        fill: grey;
    }
`);
const Footer = () => (
  <div className={footerContainer}>
    <div>
      <a href="mailto:demeules.barrett@gmail.com?Subject=Hello!">
        <FontAwesomeIcon className={iconStyle} icon="envelope" size="lg" />
      </a>
      <a href="https://twitter.com/barrettnathan" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className={iconStyle} color="#4183C4" icon={['fab', 'twitter']} size="lg" />
      </a>
      <a href="https://github.com/nathan-barrett" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className={iconStyle} icon={['fab', 'github']} size="lg" />
      </a>
      <a href="https://www.linkedin.com/in/nathanbarrett24" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className={iconStyle} icon={['fab', 'linkedin']} size="lg" />
      </a>
    </div>
  </div>
);

export default Footer;
