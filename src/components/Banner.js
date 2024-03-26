import { Container } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCyptoContext } from '../context/CyoptoContext'
import { TrendingCoins } from '../config/api'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'

const Banner = () => {

    const { currency } = useCyptoContext();
    const [trending, setTranding] = useState([]);

    const fetchTrendingCoins = async (currency) => {
        try {
            const { data } = await axios.get(TrendingCoins(currency));
            setTranding(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTrendingCoins(currency);
    }, [currency])

    const responsive = { 0: { items: 2 }, 512: { items: 4 } }
    const items = trending.map((coin) => {
        return (
            <Link className='carouse-item' to={`/coins/${coin.id}`}>
                <img src={coin?.image} alt={coin.name} height='80px' style={{ marginBottom: 10 }} />
            </Link>
        )
    });



    return (
        <div className='banner'>
            <Container className='banner-carouse'>
                <AliceCarousel
                    mouseTracking
                    autoPlayInterval={1000}
                    animationDuration={1500}
                    disableDotsControls
                    responsive={responsive}
                    autoPlay
                    disableButtonsControls
                    items={items} />
            </Container>
        </div>
    )
}

export default Banner