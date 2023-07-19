import React from 'react';

const AirpodCard = ({ airpod }) => {

    const { id, img, brand, model, color, battery_life, wireless, water_resistant, price } = airpod

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-80' src={img} alt="AirPod" /></figure>
            <div className="card-body">
                <h2 className="card-title">Model: {model}</h2>
                <div className='flex'>
                    <p className='text-xl'>Brand: {brand}</p>
                    <h3 className='text-xl'>Price: ${price}</h3>
                </div>
                <div className="card-actions justify-center mt-2">
                <button className="btn bg-black text-red-600">See Detail</button>
                </div>
            </div>
        </div>
    );
};

export default AirpodCard;