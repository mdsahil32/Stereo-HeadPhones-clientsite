import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './style.css'

const HeadphoneDetail = () => {
    const data = useLoaderData([])
    console.log(data);
    const { brand, model, color, wireless, bluetooth_version, battery_life, noise_cancellation, price, image, id } = data
    return (
        <div className=''>
            <div className="app items-center justify-center ">
                <div className="img-container mt-3">
                    <img
                        src={image}
                        alt="meditation"
                    />
                </div>
            </div>
            <div className='md:flex gap-5 mx-12'>
                <div className='bg-black text-red-600 my-16 p-5'>
                    <h3 className='text-3xl'>Brand: {brand}</h3>
                    <h5 className='text-xl'>Model: {model}</h5>
                    <h5 className='text-xl'>Price: ${price}</h5>
                    <h5 className='text-xl'>Color: {color}</h5>
                </div>
                <div className='bg-black text-red-600 my-16 p-5'>
                    <h5 className='text-xl'>Battery: {battery_life}</h5>
                    <h5 className='text-xl'>Bluetooth: {bluetooth_version}</h5>
                    <h5 className='text-xl'>Wireless: {wireless}</h5>
                    <h5 className='text-xl'>Noise : {noise_cancellation}</h5>
                </div>
            </div>
        </div>
    );
};

export default HeadphoneDetail;