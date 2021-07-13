import React from 'react';
// import { Button } from '../../globalStyles';
import { GiVideoConference } from 'react-icons/gi';
import { GiComputing, GiPencilBrush } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLength,
    PricingCardFeatures,
    PricingCardFeature
} from './Pricing.elements';

function Pricing() {
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
            <PricingSection>
                <PricingWrapper>
                    <PricingHeading>Our Services</PricingHeading>
                    <PricingContainer>

                        {/* <PricingCard to='/sign-up'> */}
                        <PricingCard>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiPencilBrush />
                                </PricingCardIcon>
                                <PricingCardPlan>Design</PricingCardPlan>
                                <PricingCardCost>$19.99</PricingCardCost>
                                <PricingCardLength>starting from</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Design Collateral</PricingCardFeature>
                                    <PricingCardFeature>UXUI Design</PricingCardFeature>
                                    <PricingCardFeature>Photo Edit</PricingCardFeature>
                                </PricingCardFeatures>
                                {/* <Button primary>Choose Plan</Button> */}
                            </PricingCardInfo>
                        </PricingCard>

                        <PricingCard>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiVideoConference />
                                </PricingCardIcon>
                                <PricingCardPlan>Video</PricingCardPlan>
                                <PricingCardCost>$49.99</PricingCardCost>
                                <PricingCardLength>starting from</PricingCardLength>
                                <PricingCardFeatures>
                                <PricingCardFeature>Promotional Video</PricingCardFeature>
                                    <PricingCardFeature>Travel Video</PricingCardFeature>
                                    <PricingCardFeature>& many variety</PricingCardFeature>
                                </PricingCardFeatures>
                                {/* <Button primary>Choose Plan</Button> */}
                            </PricingCardInfo>
                        </PricingCard>

                        <PricingCard>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiComputing />
                                </PricingCardIcon>
                                <PricingCardPlan>Wesbite</PricingCardPlan>
                                <PricingCardCost>$499.99</PricingCardCost>
                                <PricingCardLength>starting from</PricingCardLength>
                                <PricingCardFeatures>
                                <PricingCardFeature>Portfolio Website</PricingCardFeature>
                                    <PricingCardFeature>Personal Static Website</PricingCardFeature>
                                    <PricingCardFeature>Company Website</PricingCardFeature>
                                </PricingCardFeatures>
                                {/* <Button primary>Choose Plan</Button> */}
                            </PricingCardInfo>
                        </PricingCard>

                    </PricingContainer>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    );
}
export default Pricing;