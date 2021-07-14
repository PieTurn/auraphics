import styled from 'styled-components';

export const ClientHeading = styled.h1`
    color: #101522;
    font-size: 48px;
    margin-top: 100px;
    margin-bottom: 30px;
    text-align: center;
`;

export const Content = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    padding: 10px 10%;

    @media only screen and (max-device-width: 600px) {
        display: grid;
        grid-gap: 30px;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        align-items: center;
    }
`

export const ClientList = styled.div`
    display: grid;
    // grid-template-columns: repeat(2, minmax(0, 1fr));
    /* grid-template-columns: 30% 70%; */
    padding: 10px 0;
    align-items: center;
    place-items: center;
    
    img {
        width: 80%;
        height: 100%;
    }

    @media only screen and (max-device-width: 600px) {
        img {
            width: 30%;
            height: 100%;
        }
    }
`