import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humle from '../../img/humble.png';
import Card from '../Cards/Card';
import Resume from '../Resume/umair_cv.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Services = () => {
    let theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    let themeStyle = {
        color: darkMode ? 'white' : ''
    }
    const transition = { duration: 1, type: 'spring' }
    return (
        <div className='services' id='Services'>
            {/* Left side  */}
            <div className="awesome" >
                <span style={themeStyle}>My Awesome</span>
                <span>Services</span>
                <span style={themeStyle}>
                    As a front-end developer, my services revolve around crafting immersive and <br /> interactive web experiences. <br />With a keen eye for aesthetics and a strong command over HTML, CSS, and JavaScript, <br />I create engaging user interfaces that seamlessly blend creativity and functionality
                </span>
                {/* <a href={Resume} target="_blank" download>
                    <button className="s-button button">Download CV</button>
                </a> */}
                <div className="blur s-blur" style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* Right Side */}
            <div className="cards">
                {/* First Card  */}
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}>
                    <Card emoji={HeartEmoji} heading={'Design'} detail={'Figma, Sketch, Photoshop, Adobe, Adobe xd'} />
                </motion.div>

                {/* Second Card  */}
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}>
                    <Card emoji={Glasses} heading={'Developer'} detail={'HTML, CSS, Javascript, React'} />
                </motion.div>

                {/* Third Card  */}
                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}>
                    <Card emoji={Humle} heading={'UI/UX'} detail={'HTML, CSS, Javascript, React'} />
                </motion.div>

                <div className="blur s-blur2" style={{ background: '#var(--purple)' }}></div>
            </div>
        </div>
    )
}

export default Services