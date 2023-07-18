import React, { useEffect, useState } from 'react';
import HeadPhoneCard from './HeadPhoneCard';

const HeadPhones = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('headPhones.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <>
            <div className='bg-black border-x-8 border-red-600 mt-44'>
                <h3 className='text-4xl text-red-600 py-6 font-semibold  text-center'>Headphones</h3>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 max-w-screen-md	mx-auto gap-12 my-12'>
                {
                    data.map(headPhone => <HeadPhoneCard
                        key={headPhone.brand}
                        headPhone={headPhone}
                    ></HeadPhoneCard>)
                }
            </div>
        </>
    );
};

export default HeadPhones;