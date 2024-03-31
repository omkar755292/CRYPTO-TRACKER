import { Container } from '@mui/material'
import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel'

const Banner = () => {

    return (
        <div className='banner'>
            <Container className='banner-carouse'>
                <AliceCarousel
                    mouseTracking
                    autoPlayInterval={1000}
                    animationDuration={1500}
                    disableDotsControls
                    autoPlay
                    disableButtonsControls
                />
            </Container>
        </div>
    )
}

export default Banner