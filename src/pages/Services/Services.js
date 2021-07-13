import React from 'react';
import { homeObjThree,  } from './Data';
import { InfoSection, Pricing, ClientsList } from '../../components';

const Home = () => {
    return (
        <>
            <Pricing />
            <InfoSection {...homeObjThree} />
            <ClientsList />
        </>
    );
};

export default Home;