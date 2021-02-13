import React, { Component } from 'react';

const isMobileDevice = window.matchMedia('(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)').matches;

const Source = () => <>&nbsp;|&nbsp;<a className='footer-link' href='https://github.com/adamalston/v2'>Source</a></>

class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
               
            </div>
        )
    }
}

export default Footer;
