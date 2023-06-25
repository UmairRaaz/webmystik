import React from 'react';
import './Experience.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Experience = () => {
  let theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  let themeStyle = {
      color : darkMode ?  'var(--orange)' : ''
  }
  return (
    <div className='experience'>
        <div className="achievement">
            <div className="circle" style={themeStyle}>1.5+</div>
            <span>Years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle" style={themeStyle}>20+</div>
            <span>Completed</span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle" style={themeStyle}>5+</div>
            <span>Clients</span>
            <span>Work</span>
        </div>
    </div>
  )
}

export default Experience