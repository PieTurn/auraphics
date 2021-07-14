import React from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Ixora from "../../images/Clients/ixora.png";
import Singhealth from "../../images/Clients/singhealth.png";
import GlobalKnight from "../../images/Clients/globalknight.jpg";
import Propnex from "../../images/Clients/propnex.png";
import Taijiquan from "../../images/Clients/taijiquan.png";
import Eas from "../../images/Clients/eas.png";
import Locomole from "../../images/Clients/locomole.png";
import Aquaseries from "../../images/Clients/aquaseries.png";
import Era from "../../images/Clients/era.png";
import Saf from "../../images/Clients/saf.png";
import Cozykashmir from "../../images/Clients/cozykashmir.png";
import Caringskin from "../../images/Clients/caringskin.png";

import Roybrew from "../../images/Clients/roybrew.png";
import Carempire from "../../images/Clients/carempire.jpg";
import Leap from "../../images/Clients/leap.jpg";
import Qci from "../../images/Clients/qci.png";
import Jdaudio from "../../images/Clients/jdaudio.png";
import Axa from "../../images/Clients/axa.png";
import Yichang from "../../images/Clients/yichang.png";

import {
    ClientHeading,
    Content,
    ClientList
} from './ClientsList.elements';

const ClientsList = () => {
    return (
        <>
        <ClientHeading>Our Clients</ClientHeading>
        <Content>
            <ClientList>
                <img src={Ixora} alt="" />
            </ClientList>
            <ClientList>
                <img src={Singhealth} alt="" />
            </ClientList>
            <ClientList>
                <img src={GlobalKnight} alt="" />
            </ClientList>
            <ClientList>
                <img src={Propnex} alt="" />
            </ClientList>
            <ClientList>
                <img src={Taijiquan} alt="" />
            </ClientList>
            <ClientList>
                <img src={Eas} alt="" />
            </ClientList>
            <ClientList>
                <img src={Locomole} alt="" style={{  }}/>
            </ClientList>
            <ClientList>
                <img src={Aquaseries} alt="" style={{ }}/>
            </ClientList>
            <ClientList>
                <img src={Era} alt="" />
            </ClientList>
            <ClientList>
                <img src={Saf} alt="" />
            </ClientList>
            <ClientList>
                <img src={Cozykashmir} alt="" style={{ }}/>
            </ClientList>
            <ClientList>
                <img src={Caringskin} alt="" />
            </ClientList>
            <ClientList>
                <img src={Roybrew} alt="" style={{ }}/>
            </ClientList>
            <ClientList>
                <img src={Carempire} alt="" />
            </ClientList>
            <ClientList>
                <img src={Jdaudio} alt="" />
            </ClientList>
            <ClientList>
                <img src={Leap} alt="" />
            </ClientList>
            <ClientList>
                <img src={Qci} alt="" />
            </ClientList>
            <ClientList>
                <img src={Axa} alt="" />
            </ClientList>
            <ClientList>
                <img src={Yichang} alt="" />
            </ClientList>
        </Content>
        </>
    );
};
export default ClientsList;

