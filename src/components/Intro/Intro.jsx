import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Intro = () => {
    let theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    let themeStyle = {
        color : darkMode ?  'white' : ''
    }
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span  style={themeStyle}>Hey! I Am</span>
                    <span>Umair Raaz</span>
                    <span style={themeStyle}>Skilled Frontend Developer specializing in web design and development, delivering top-notch solutions with a strong attention to detail and user experience.</span>
                </div>
                <button className="button i-button">Hire Me</button>
                <div className="i-icons">
                    <a href="">
                        <img src={Github} alt="" />
                    </a>
                    <img src={Linkedin} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimoji} alt="" />
                <div style={{top: '-4%', left: '68%'}}>
                    <FloatingDiv image={crown} txt1='Web' txt2 = 'Developer' />
                </div>
                <div style={{top: '18rem', left: '0rem'}}>
                    <FloatingDiv image={thumbup} txt1='Best Designing' txt2 = 'Award' />
                </div>
                {/* Blur Div  */}
                <div className="blur" style={{background : 'rgb(238 210 255)'}}></div>
                <div className="blur" style={{background :'#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
            </div>
        </div>
    )
}

export default Intro