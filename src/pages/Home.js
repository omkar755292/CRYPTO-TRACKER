import React from 'react'
import Header from '../components/Header';
import CoinList from './home/CoinList';
import CoinPage from './home/CoinPage';
import { Route, Routes } from 'react-router-dom';

const Home = () => {

  return (

    <div className='home'>
      <Header />
      <Routes>
        <Route exact path='/' element={<CoinList />} />
        <Route exact path='/home' element={<CoinList />} />
        <Route exact path='/:id' element={<CoinPage />} />
      </Routes>
    </div>

  )
}

export default Home