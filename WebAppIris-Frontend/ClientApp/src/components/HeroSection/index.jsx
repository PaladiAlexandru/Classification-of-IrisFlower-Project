import React, { useState } from 'react'
import Vid from '../../videos/video.mp4'
import { Button } from '../ButtonElement';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
 } from './HeroSectionElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }


    return (
        <>
            <HeroContainer id='home'>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Vid} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Iris flower classification project</HeroH1>
                    <HeroP>Scroll down for more information</HeroP>
                    <HeroBtnWrapper>
                        <Button to='discover' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover} 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        primary='true' 
                        dark='true'>
                            Get started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
