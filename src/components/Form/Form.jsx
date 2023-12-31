import React, { useRef, useState } from 'react';
import './Form.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
import { useContext } from 'react';
export const Form = () => {

    const form = useRef();
    const [done, setDone] = useState(false)
    let theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
    let themeStyle = {
        color : darkMode ?  'white' : ''
    }
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_portfolioemail', 'template_3wuznos', form.current, 'ghd6Vxzxu68IXFWRv')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <div className='contact-form' id='form'>
            <div className="w-left">
                <div className="awesome">
                    <span style={themeStyle}>Get in touch</span>
                    <span>Contact Me</span>
                    <div className="blur s-blur" style={{ background: '#ABF1FF94' }}>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name' />
                    <input type="email" name='user_email' className='user' placeholder='Email' />
                    <textarea name="message" className='user' placeholder='Message'></textarea>
                    <input type="submit" value="Send" className='button' />
                    <span>{done  && "Thanks For Contacting Me"}</span>
                    <div className="blur s-blur" style={{ background: 'var(--purple)' }}>
                    </div>
                </form>
            </div>
        </div>
    )
}
