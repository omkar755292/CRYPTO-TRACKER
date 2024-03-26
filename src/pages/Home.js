import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import Header from '../components/Header';
import CoinList from './home/CoinList';
import CoinPage from './home/CoinPage';
import { Route, Routes } from 'react-router-dom';
import CyptoContextProvider from '../context/CyoptoContext';

const Home = () => {

  const { user } = useUserAuth();
  return (
    <CyptoContextProvider>
      <div className='home'>
        <Header />
        <Routes>
          <Route exact path='/' element={<CoinList />} />
          <Route exact path='/home' element={<CoinList />} />
          <Route exact path='/:id' element={<CoinPage />} />
        </Routes>
        <h1>Name: {user.displayName}</h1>
        <p>Email: {user.email}</p>
      </div>
    </CyptoContextProvider>
  )
}

export default Home