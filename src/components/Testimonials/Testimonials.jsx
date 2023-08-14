import React from 'react';
import './Testimonials.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Pagination } from 'swiper';
import "swiper/css/pagination";
import { themeContext } from '../../Context';
import { useContext } from 'react';

import ProfilePic1 from '../../img/profile1.jpg';
import ProfilePic2 from '../../img/profile2.jpg';
import ProfilePic3 from '../../img/profile3.jpg';
import ProfilePic4 from '../../img/profile4.jpg';
import ProfilePic5 from '../../img/profile5.jpg';
import ProfilePic6 from '../../img/profile6.jpg';

const Testimonials = () => {
    let theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
    let themeStyle = {
        color : darkMode ?  'white' : ''
    }
    const clients = [
        {
            image: ProfilePic1,
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet dolor non tortor gravida, a maximus ligula pellentesque.'
        },
        {
            image: ProfilePic2,
            review: 'Praesent id augue eget ligula aliquam aliquet nec at velit. Morbi lacinia, dui vel volutpat iaculis, elit metus feugiat nisi, vitae ullamcorper eros orci nec nibh.'
        },
        {
            image: ProfilePic3,
            review: 'Fusce scelerisque risus ut nunc semper condimentum. Curabitur dignissim diam in risus luctus, non maximus nulla cursus.'
        },
        {
            image: ProfilePic4,
            review: 'Fusce scelerisque risus ut nunc semper condimentum. Curabitur dignissim diam in risus luctus, non maximus nulla cursus.'
        },
        {
            image: ProfilePic5,
            review: 'Fusce scelerisque risus ut nunc semper condimentum. Curabitur dignissim diam in risus luctus, non maximus nulla cursus.'
        },
        {
            image: ProfilePic6,
            review: 'Fusce scelerisque risus ut nunc semper condimentum. Curabitur dignissim diam in risus luctus, non maximus nulla cursus.'
        },
        // Add more client objects as needed
    ];

    return (
        <div className='testimonials' id='Testimonials'>
            <div className="t-wrapper">
                <div className="t-heading">
                    <span>Clients always get </span>
                    <span>Exceptional Work </span>
                    <span>from me...</span>
                    <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                    <div className="blur t-blur2" style={{ background: 'skyblue' }}></div>
                </div>
                {/* Slider  */}
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={'auto'}
                    pagination={{ clickable: true }}
                >
                    {clients.map((client, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.image} alt="" />
                                <span style={themeStyle}>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    )
}

export default Testimonials