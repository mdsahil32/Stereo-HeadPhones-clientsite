import React, { useEffect, useState } from 'react';
import AirpodCard from './AirpodCard';

const AirPod = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('earbud.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <>
            <div className='bg-black border-x-8 border-red-600 mt-44'>
                <h3 className='text-4xl text-red-600 py-6 font-semibold  text-center'>AirPods</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-screen-md	mx-auto gap-12 my-12'>
                {
                    data.map(airpod => 
                    <AirpodCard
                    key={airpod.id}
                    airpod={airpod}
                    ></AirpodCard>)
                }
            </div>
        </>
    );
};

export default AirPod;