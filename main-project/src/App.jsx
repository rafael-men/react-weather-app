import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainWeather from './components/MainWeather'
import TodayHighlights from './components/TodayHighlights'
import Footer from './components/Footer'

function App() {
  const UNSPLASH_ACCESS_KEY = 'sZLKAip7xTa6AaQv2_e7e3QDnUBLBbyJXukdAw6zako';

  const [weatherData, setWeatherData]= useState(null)
  const [city, setcity] = useState('London')
  const [cityImage, setCityImage] = useState(null)

  useEffect(()=> {
    fetchWeatherData(city)
    fetchCityImage(city);
  },[city])
  
  const fetchWeatherData = () => {
    const API_KEY = 'ae650679d60ea4bd1187faeba1c0e03e'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
    .then(response=>response.json())
    .then(data=>{setWeatherData(data)
      console.log(JSON.stringify(data))
    })
  }

  const fetchCityImage = () => {
    const UNSPLASH_ACCESS_KEY = 'sZLKAip7xTa6AaQv2_e7e3QDnUBLBbyJXukdAw6zako'
    fetch(`https://api.unsplash.com/search/photos?query=${city}&client_id=${UNSPLASH_ACCESS_KEY}`)
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.results[0]?.urls?.regular;
        setCityImage(imageUrl); 
      })
      .catch(error => console.error('Erro ao buscar imagem da cidade:', error));
  };

  const handleSearch = (searchedCity) => {
    setcity(searchedCity)
  }

  return (
    <div>
      <Navbar onSearch={handleSearch}/>
      <h4 style={{textAlign:'center'}}>Tempo em {city}</h4>
      {cityImage && <img src={cityImage} alt={`Imagem de ${city}`} style={{ width: '300px', height: 'auto', borderRadius: '10px', marginBottom: '20px',marginTop:'20px',marginLeft:'auto',marginRight:'auto', display:'block'}} />
      }
      { weatherData && (
      <div style={{display:'flex',padding:'30px',gap:'20px'}}>
        <div style={{flex:'1',marginRight:'10px'}}>
          <MainWeather weatherData={weatherData}/>
        </div>
        <div style={{display:'flex',flexDirection:'column',flex:'0.5',gap:'20px'}}>
          <TodayHighlights weatherData={weatherData}/>
        </div>
      </div>
)}
 <Footer/>
    </div>
  )
}

export default App
