import React from 'react';
import './Intro.css';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import facebook from '../../img/fbgreen.png'
import twitter from '../../img/twittergreen.png'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
const Intro = () => {
    let theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    let themeStyle = {
        color: darkMode ? 'white' : ''
    }
    const transition = { duration: 2, type: 'spring' }
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={themeStyle}>Welcome To</span>
                    <span>Webmystik</span>
                    <span style={themeStyle}>Skilled Frontend Developer specializing in web design and development, delivering top-notch solutions with a strong attention to detail and user experience.</span>
                </div>
                <Link spy={true} to='form' smooth={true} >
                    <button className="button i-button">Hire Me</button>
                </Link>
                <div className="i-icons">
                    <a href="https://www.facebook.com/people/WebMystik/61550205778903/" target='_blank'>
                        <img src={facebook} alt="" />
                    </a>
                    <a href="https://twitter.com/webmystik" target='_blank'>
                        <img src={twitter} alt="" />
                    </a>
                    <a href="https://www.instagram.com/webmystik" target='_blank'>
                        <img src={Instagram} alt="" />
                    </a>
                    
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                    src={glassesimoji} alt="" />


                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    className='floating-div'
                    style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
                </motion.div>

                <motion.div
                    initial={{ top: '18rem', left: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
                    className='floating-div'
                    style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={thumbup} txt1='Best Designing' txt2='Award' />
                </motion.div>
                {/* Blur Div  */}
                <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
                <div className="blur" style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
            </div>
        </div>
    )
}

export default Intro