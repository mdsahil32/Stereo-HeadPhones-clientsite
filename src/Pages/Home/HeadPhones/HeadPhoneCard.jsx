import React from 'react';

const HeadPhoneCard = ({ headPhone }) => {
    const {brand,model,color,wireless,bluetooth_version,battery_life,noise_cancellation,price,image} =headPhone
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl">
            <figure><img className='h-80' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Brand: {brand}</h2>
                <div className='flex text-xl'>
                <p>Model: {model}</p>
                <p>Price: {price}</p>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn bg-black my-2 text-red-600">See Detail</button>
                </div>
            </div>
        </div>
    );
};

export default HeadPhoneCard;