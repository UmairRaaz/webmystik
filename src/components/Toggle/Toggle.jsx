import React from 'react';
import './Toglgle.css';
import { UilSun } from '@iconscout/react-unicons';
import { UilMoon } from '@iconscout/react-unicons';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Toggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = () => {
        theme.dispatch({type : 'toggle'})
    }
    return (
        <div className="toggle" onClick={handleClick}>
            <UilMoon />
            <UilSun />
            <div className="t-button" style={darkMode ? { left: '2px' } : {right: '2px'}}>
                {/* Content of the div */}
            </div>

        </div>
    )
}

export default Toggle