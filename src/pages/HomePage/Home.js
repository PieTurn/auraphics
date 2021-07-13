import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import { InfoSection, Pricing, ClientsList } from '../../components';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Pricing />
            <InfoSection {...homeObjThree} />
            <ClientsList />
        </>
    );
};

export default Home;