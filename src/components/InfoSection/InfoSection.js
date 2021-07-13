import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { 
    InfoSec, 
    InfoRow, 
    InfoColumn, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.elements';

const InfoSection = ({ 
    primary,
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightTextDesc, 
    buttonLabel, 
    description, 
    headline, 
    lightText, 
    topLine,
    img,
    alt,
    start 
}) => {
    return (
        <>
            <InfoSec lightBg= {lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine = {lightTopLine}>{topLine}</TopLine>
                                <Heading lightText = {lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                
                                { buttonLabel === "GET STARTED" ? 
                                    <a target='_blank' rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSeyeHsv--ediYSrUSemUsvzPc_zeOmZTNVQFsl54t12DIBn7Q/viewform">
                                        <Button big fontBig primary={primary}>
                                            {buttonLabel}
                                        </Button>
                                    </a>
                                : "" }

                                { buttonLabel === "Read Reviews" ? 
                                    <a target='_blank' rel="noreferrer" href="https://www.facebook.com/Auraphics/reviews/?ref=page_internal">
                                        <Button big fontBig primary={primary}>
                                            {buttonLabel}
                                        </Button>
                                    </a>
                                : "" }

                                { buttonLabel === "View Portfolio" ? 
                                    <a target='_blank' rel="noreferrer" href="https://dribbble.com/junjiechooo">
                                        <Button big fontBig primary={primary}>
                                            {buttonLabel}
                                        </Button>
                                    </a>
                                : "" }
                                
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
