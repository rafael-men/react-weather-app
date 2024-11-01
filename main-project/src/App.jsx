import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainWeather from './components/MainWeather'

function App() {

  const [weatherData, setWeatherData]= useState(null)
  const [city, setcity] = useState('London')

  useEffect(()=> {
    fetchWeatherData(city)
  },[city])
  
  const fetchWeatherData = () => {
    const API_KEY = 'ae650679d60ea4bd1187faeba1c0e03e'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
    .then(response=>response.json())
    .then(data=>{setWeatherData(data)
      console.log(JSON.stringify(data))
    })
  }

  const handleSearch = (searchedCity) => {
    setcity(searchedCity)
  }

  return (
    <div>
      <Navbar onSearch={handleSearch}/>
{ weatherData && (
      <div style={{display:'flex',padding:'30px',gap:'20px'}}>
        <div style={{flex:'1',marginRight:'10px'}}>
          <MainWeather weatherData={weatherData}/>
        </div>
      </div>
)}
    </div>
  )
}

export default App
