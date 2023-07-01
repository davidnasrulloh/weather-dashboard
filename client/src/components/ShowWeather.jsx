import React from 'react'

const ShowWeather = ({ data }) => {
    return (
        <div className='my-10'>
            <h2 className='text-xl font-bold text-gray-800'>{data.name}</h2>
            <div className='flex justify-center'>
                <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="logo cuaca" />
            </div>
            <div>
                <span>{data.weather[0].main}</span> &nbsp;
                <span>{Math.floor(data.main.temp - 273.15)}&deg;C</span>
            </div>
        </div>
    )
}

export default ShowWeather