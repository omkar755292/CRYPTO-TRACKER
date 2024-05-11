import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { TrendingCoins } from '../config/api';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel'
import { useCyptoContext } from '../context/CyoptoContext';
import { Link } from 'react-router-dom';

const Banner = () => {
    const { currency } = useCyptoContext();
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        const fetchTrendingCoins = async () => {
            try {

                const data = await TrendingCoins(currency);
                setTrending(data);
                console.log(data);
            } catch (error) {
                console.error("Error Fetching Trending Coin: ", error);
            }
        }

        fetchTrendingCoins();
    }, [currency])

    const items = trending.map((coin) => {
        return (
            <Link to={`/coins/${coin.id}`}>

                <img src={coin.image}
                    alt={coin.name}
                    height='80'>
                </img>
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
                    autoPlay
                    disableButtonsControls
                    items={items}
                />
            </Container>
        </div>
    )
}

export default Banner