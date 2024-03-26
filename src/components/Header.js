import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCyptoContext } from '../context/CyoptoContext';
import { AbcLogo } from './Images';


const Header = () => {
  const navigate = useNavigate();
  const { currency, setCurrency } = useCyptoContext();

  const darkTheam = createTheme({
    palette: {
      primary: {
        main: '#fff'
      }
    },
    type: 'dark'
  });

  return (

    <ThemeProvider theme={darkTheam}>
      <AppBar color='transparent' position='static' >
        <Container>
          <Toolbar>

            <Typography onClick={(e) => { navigate('/') }} className='title' >
              {AbcLogo}
              CRYPTO.TRACKER
            </Typography>

            <Select
              variant='outlined'
              value={currency}
              style={{ color: 'gold', width: '100px', height: '50px' }}
              onChange={(e) => { setCurrency(e.target.value) }}>
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'INR'}>INR</MenuItem>
            </Select>

          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header