import React from 'react';
import { homeObjThree } from './Data';
import { InfoSection, ClientsList } from '../../components';

const Reviews = () => {
    return (
        <>
            <InfoSection {...homeObjThree} />
            <ClientsList />
        </>
    );
};

export default Reviews;