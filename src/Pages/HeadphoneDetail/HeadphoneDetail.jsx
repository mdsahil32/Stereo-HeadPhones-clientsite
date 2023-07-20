import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './style.css'

const HeadphoneDetail = () => {
    const data = useLoaderData([])
    console.log(data);
    const { brand, model, color, wireless, bluetooth_version, battery_life, noise_cancellation, price, image, id } = data
    return (
        <div className='py-16 flex'>
            <div className="app">
                <div className="img-container">
                    <img
                        src={image}
                        alt="meditation"
                    />
                </div>
            </div>
            <div className='py-16'>
                <h3 className='text-3xl'>Brand: {brand}</h3>
                <h5 className='text-xl'>Model: {model}</h5>
            </div>
        </div>
    );
};

export default HeadphoneDetail;