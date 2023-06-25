import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humle from '../../img/humble.png';
import Card from '../Cards/Card';
import Resume from '../Resume/umair_cv.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Services = () => {
    let theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
    let themeStyle = {
        color : darkMode ?  'white' : ''
    }
    return (
        <div className='services'>
            {/* Left side  */}
            <div className="awesome">
                <span style={themeStyle}>My Awesome</span>
                <span>Services</span>
                <span style={themeStyle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quae. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, unde.
                </span>
                <a href={Resume}><button className="s-button button">Download CV</button></a>
                <div className="blur s-blur" style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* Right Side */}
            <div className="cards">
                {/* First Card  */}
                <div style={{ left: '14rem' }}>
                    <Card emoji={HeartEmoji} heading={'Design'} detail={'Figma, Sketch, Photoshop, Adobe, Adobe xd'} />
                </div>

                {/* Second Card  */}
                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card emoji={Glasses} heading={'Developer'} detail={'HTML, CSS, Javascript, React'} />
                </div>

                {/* Third Card  */}
                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card emoji={Humle} heading={'UI/UX'} detail={'HTML, CSS, Javascript, React'} />
                </div>

                <div className="blur s-blur2" style={{ background: '#var(--purple)' }}></div>
            </div>
        </div>
    )
}

export default Services