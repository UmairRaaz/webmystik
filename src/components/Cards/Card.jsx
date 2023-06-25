import React from 'react';
import './Card.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Card = ({emoji, heading, detail}) => {
  let theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  let themeStyle = {
      color : darkMode ?  'white' : ''
  }
  return (
    <div className='card'>
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span style={themeStyle}>{detail}</span>
        <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card