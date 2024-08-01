import React from 'react';

const CurrentWeather = ({ weatherData }) => {
    if (!weatherData || !weatherData.weather) {
        return null; // Si no hay datos, no renderiza nada o no muestra nada.
    }

    const { icon } = weatherData.weather[0];
    const { temp } = weatherData.main;
    const { name } = weatherData;
    const { country } = weatherData.sys;
    const { description } = weatherData.weather[0];

    return (
        <div className='col-span-1 row-span-1 md:row-span-2 bg-primary-beige rounded-xl shadow-lg relative p-4'>
            <div className='w-full h-auto flex flex-col items-center justify-center'>
                <img
                    src={`https://openweathermap.org/img/wn/${icon}@4x.png`} // Usé 4x para una mayor resolución del icono
                    alt='Weather Icon'
                    className='w-[250px]'
                />       
                <h1 className='text-7xl font-semibold'>{temp.toFixed()}°C</h1>
                <p className='text-2xl'>{name}, {country}</p>
                <p className='text-center text-xl text-primary-pink mb-14'>{description}</p>
            </div>
        </div>
    );
};

export default CurrentWeather;
