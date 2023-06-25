import React from 'react';
import './FloatingDiv.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const FloatingDiv = ({image, txt1, txt2}) => {
  let theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  let themeStyle = {
      color : darkMode ?  'black' : ''
  }
  return (
    <div className='floatingdiv'>
        <img src={image} alt="" />
        <span style={themeStyle}>
            {txt1} <br />
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv