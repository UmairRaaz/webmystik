import React from 'react'
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Slidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import 'swiper/css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Portfolio = () => {
    let theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
    let themeStyle = {
        color : darkMode ?  'white' : ''
    }
  return (
    <div className='portfolio' id='Portfolio'>
        {/* Heading  */}
        <span style={themeStyle}>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slider  */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Slidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>



        </Swiper>
    </div>
  )
}

export default Portfolio