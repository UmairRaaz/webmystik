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
                <UilInstagram color='white' size='3rem'/>
                <UilLinkedinAlt color='white' size='3rem'/>
                <UilGithub color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )
}

export default Footer