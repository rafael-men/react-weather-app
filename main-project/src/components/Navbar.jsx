import { React, useState } from 'react';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import { Button, TextField } from '@mui/material';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

const Navbar = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState('');

  const handleSearchClick = () => {
    if (searchCity.trim()) {
      onSearch(searchCity);
    }
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>
        <FilterDramaIcon fontSize="large" />
        <p style={titleStyle}>Tempo</p>
      </div>

      <div style={searchContainerStyle}>
        <TextField
          style={textFieldStyle}
          placeholder="ex: Tokyo"
          variant="outlined"
          size="small"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={handleSearchClick}
          style={buttonStyle}
        >
          Buscar
        </Button>
      </div>
    </nav>
  );
};


const navbarStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
  backgroundColor: '#f5f5f5',
  backgroundSize:'cover',
  marginTop: '0px',
  flexWrap: 'wrap', 
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const titleStyle = {
  fontWeight: 'bold',
  fontSize: '20px',
};

const searchContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  flexWrap: 'wrap', 
};

const textFieldStyle = {
  borderRadius: '2rem',
  width: '20rem',
  minWidth: '150px',
  backgroundColor:'white'
};

const buttonStyle = {
  borderRadius: '6px',
  backgroundColor: 'darkblue',
  color: 'white',
};

export default Navbar;
