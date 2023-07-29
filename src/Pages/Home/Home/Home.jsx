import React from 'react';
import HeadPhones from '../HeadPhones/HeadPhones';
import Client from '../Client/Client';
import AirPod from '../Airpods/Airpods';
import Banner from '../Banner/Banner';
import Stereo from '../StereoBrand/Stereo';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HeadPhones></HeadPhones>
            {/* stereo brand -- */}
            <Stereo></Stereo>
            <AirPod></AirPod>
            <Client></Client>
        </div>
    );
};

export default Home;