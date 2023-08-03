import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import img1 from '../../../assets/client/low-angle-man-drinking-coffee.jpg'
import img2 from '../../../assets/client/man-wearing-headphones-pointing-someone-right.jpg'
import img3 from '../../../assets/client/medium-shot-smiley-guy-with-headphones-looking-smartphone.jpg'
import img4 from '../../../assets/client/portrait-curly-pink-haired-woman-massive-white-headphones.jpg'
import img5 from '../../../assets/client/portrait-happy-caucasian-man-enjoys-fantastic-sound-quality-headphones-holds-modern-cell-phone.jpg'
import img6 from '../../../assets/client/portrait-pleased-carefree-handsome-stylish-urban-african-american-male-casual-tshirt-danci.jpg'
import img7 from '../../../assets/client/stylish-businessman-texting-message-smartphone-outdoors.jpg'
import img8 from '../../../assets/client/young-pretty-woman-sitting-with-laptop-modern-park-street-using-smartphone.jpg'

const Client = () => {
    return (
        <div className='my-12'>
            <div className='bg-black border-x-8 border-red-600 mt-44'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center py-6">
                            <h3 className="animate-charcter font-semibold text-center">Happy Client's</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img  src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img7} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img8} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Client;