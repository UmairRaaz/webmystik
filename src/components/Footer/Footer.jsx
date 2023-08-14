import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import { UilInstagram } from '@iconscout/react-unicons';
import { UilLinkedinAlt } from '@iconscout/react-unicons';
import { UilGithub } from '@iconscout/react-unicons';
const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span>umairgopang123@gmail.com</span>
            <div className="f-iocns">
              <a href="https://www.facebook.com/people/WebMystik/61550205778903/" target='_blank' rel="noreferrer"><UilInstagram color='white' size='3rem'/></a>
              <a href="https://twitter.com/webmystik" target='_blank' rel="noreferrer"><UilLinkedinAlt color='white' size='3rem'/></a>
              <a  href="https://www.instagram.com/webmystik" target='_blank' rel="noreferrer"><UilGithub color='white' size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer