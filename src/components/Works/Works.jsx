import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Works = () => {
  let theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  let themeStyle = {
      color : darkMode ?  'white' : ''
  }
  return (
    <div className="works">
      {/* Left Side  */}
      <div className="awesome">
        <span style={themeStyle}>Work for all these</span>
        <span >Brands and Clients</span>
        <span style={themeStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quae. <br />
          Lorem ipsum dolor sit amet consectetur <br />
          Lorem ipsum dolor sit amet consectetur <br />
        </span>
        <button className="s-button button">Hire Me</button>
        <div className="blur s-blur" style={{ background: '#ABF1FF94' }}></div>
      </div>
      {/* Right Side  */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        {/* Background Circle  */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works