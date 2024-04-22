import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCyptoContext } from '../context/CyoptoContext';
import { AbcLogo } from './Images';


const Header = () => {
  const navigate = useNavigate();
  const { currency, setCurrency } = useCyptoContext();
  console.log(currency);
  return (
    <div className='header'>
      <div className='header-container'>

        <div className='header-title'
          onClick={() => navigate('/home')}>
          {AbcLogo}
          <p> CRYPTO.TRACKER  </p>
        </div>

        <div className='header-select'>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}>

            <option value={'USD'}>USD</option>
            <option value={'INR'}>INR</option>
          </select>
        </div>
      </div>

    </div>
  )
}

export default Header