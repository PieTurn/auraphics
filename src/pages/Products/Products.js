import React from 'react';
import { homeObjTwo, homeObjThree } from './Data';
import { InfoSection, Pricing, ClientsList } from '../../components';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Pricing />
            <ClientsList />
        </>
    );
};

export default Home;