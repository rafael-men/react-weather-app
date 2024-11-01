import React from 'react'

const MainWeather = ({weatherData}) => {

    const temperatureCelsius = weatherData?.main?.temp || 'N/A' ;
    const weatherDescription = weatherData?.weather?.[0]?.description || 'N/A';
    const cityName = weatherData?.name || 'Cidade Indisponível'
    const countryName = weatherData?.sys?.country ||'País Indisponível'
    const timestamp = weatherData?.dt || null

    const currentDate = timestamp? new Date (timestamp*1000).toLocaleDateString('pt-br',{

    }) : "Data Indisponível"

  return (
    <div style={{backgroundColor:'#485563',color:'white',borderRadius:'0.5rem',width:'160px',padding:'30px'}}>
        <div style={{fontSize:'20px'}}>
            Now
        </div>
        <div style={{display:'flex',alignItems:'center',fontSize:'35px',fontWeight:'bold'}}>{temperatureCelsius}c{renderTemperatureIcon()}</div>
    </div>
  )
}

export default MainWeather