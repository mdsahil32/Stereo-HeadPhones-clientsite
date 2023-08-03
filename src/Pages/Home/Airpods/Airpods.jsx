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
            <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center py-6">
                            <h3 className="animate-charcter font-semibold text-center">airpods</h3>
                        </div>
                    </div>
                </div>
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