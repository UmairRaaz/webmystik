import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
const Works = () => {
  let theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  let themeStyle = {
    color: darkMode ? 'white' : ''
  }
  return (
    <div className="works">
      {/* Left Side  */}
      <div className="awesome">
        <span style={themeStyle}>Work for all these</span>
        <span >Brands and Clients</span>
        <span style={themeStyle}>
          I have had the privilege of working with <br />clients from renowned platforms such as <br />Facebook, Upwork, and Fiverr. <br />   Through these experiences, I have honed my skills <br /> as a front-end developer, delivering high-quality <br />web solutions that meet their unique requirements.  <br /> Let's collaborate to create an exceptional online presence for your brand.
        </span>
        <Link spy={true} to='form' smooth={true} >
          <button className="s-button button">Hire Me</button>
        </Link>
        <div className="blur s-blur" style={{ background: '#ABF1FF94' }}></div>
      </div>
      {/* Right Side  */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duartion: 3.5, type: 'spring' }}
          className="w-mainCircle">
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
        </motion.div>
        {/* Background Circle  */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works