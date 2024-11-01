import {React, useState} from 'react'
import FilterDramaIcon from '@mui/icons-material/FilterDrama'
import { Button, TextField } from '@mui/material'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'

const Navbar = ({onSearch}) => {
  const [searchCity, setSearchCity] = useState('')

  const handleSearchClick = () => {
    if(searchCity.trim()) {
      onSearch(searchCity)
    }
  }


  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px',
      backgroundColor: '#f5f5f5',
      marginTop:'0px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FilterDramaIcon fontSize="large" />
        <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Tempo</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <TextField
          style={{ backgroundColor: 'white', borderRadius: '2rem', width: '20rem' }}
          placeholder="ex: Tokyo"
          variant="outlined"
          size="small"
          value={searchCity}
          onChange={(e)=>setSearchCity(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={handleSearchClick}
          style={{ borderRadius: '6px', backgroundColor: 'darkblue', color: 'white' }}
        >
          Buscar
        </Button>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: '#4B5550',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          <GpsFixedIcon />
          <span style={{ fontSize: '14px', fontWeight: '700' }}>Localização Atual</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
