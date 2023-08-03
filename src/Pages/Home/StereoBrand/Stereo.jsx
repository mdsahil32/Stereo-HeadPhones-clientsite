import React from 'react';
import './style.css'
import airpod1 from '../../../assets/brand/airpod1.jpg'
import airpod2 from '../../../assets/brand/airpod2.jpg'
import headphone1 from '../../../assets/brand/headphone1.jpg'
import headphone2 from '../../../assets/brand/headphone2.jpg'

const Stereo = () => {
    return (
        <>
        <div className='bg-black border-x-8 border-red-600 mt-44'>
        <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center py-6">
                            <h3 class="animate-charcter font-semibold text-center">our brand</h3>
                        </div>
                    </div>
                </div>
            </div>
        <div className='app grid md:grid-cols-2 max-w-screen-lg	mx-auto py-12 gap-6'>
            <div className='img-container grid md:grid-cols-2 gap-4'>
                <div className=' shadow-xl'>
                    <img src={airpod1} alt="" />
                </div>
                <div className='shadow-xl'>
                    <img src={airpod2} alt="" />
                </div>
                <div className='shadow-xl'>
                    <img src={headphone1} alt="" />
                </div>
                <div className='shadow-xl'>
                    <img src={headphone2} alt="" />
                </div>
            </div>

            <div >
                <div className='img-container shadow-xl w-full h-full'>
                    <img src='https://m.media-amazon.com/images/I/718sn7oOcfL.jpg' alt="" />
                </div>
            </div>
        </div>
        </>
    );
};

export default Stereo;