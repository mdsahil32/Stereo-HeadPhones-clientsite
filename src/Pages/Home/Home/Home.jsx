import React from 'react';
import HeadPhones from '../HeadPhones/HeadPhones';
import Client from '../Client/Client';
import AirPod from '../Airpods/Airpods';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HeadPhones></HeadPhones>
            <AirPod></AirPod>
            <Client></Client>
        </div>
    );
};

export default Home;