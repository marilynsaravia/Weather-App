import React, { useState, useEffect } from 'react';
import CurrentWeather from './CurrentWeather';
import FeelsLike from './FeelsLike';
import Forecast from './Forecast';
import Humidity from './Humidity';
import WindSpeed from './WindSpeed';
import TemperatureMin from './TemperatureMin';
import TemperatureMax from './TemperatureMax';

const Result = ({ weatherData }) => {
    const [forecastData, setForecastData] = useState({});

    useEffect(() => {
        if (weatherData?.name) {
            const fetchForecastData = async () => {
                const API_KEY = import.meta.env.VITE_APP_API_KEY;
                const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${weatherData.name}&appid=${API_KEY}&lang=es&units=metric`;

                try {
                    const response = await fetch(forecastUrl);
                    const forecastData = await response.json();

                    const dailyForecasts = forecastData.list.reduce((acc, forecast) => {
                        const date = forecast.dt_txt.split(' ')[0];
                        if (!acc[date]) {
                            acc[date] = {
                                temp: 0,
                                count: 0,
                                description: forecast.weather[0].description,
                                icon: forecast.weather[0].icon
                            };
                        }
                        acc[date].temp += forecast.main.temp;
                        acc[date].count += 1;
                        return acc;
                    }, {});

                    Object.keys(dailyForecasts).forEach(date => {
                        dailyForecasts[date].temp /= dailyForecasts[date].count;
                    });

                    setForecastData(dailyForecasts);
                } catch (error) {
                    console.error("Error fetching forecast data:", error);
                    setForecastData({});
                }
            };

            fetchForecastData();
        }
    }, [weatherData]);

    return (
        <div className='w-full h-full flex justify-center items-center'>
            {weatherData.weather ? (
                <>
                    <div className='w-full h-auto grid grid-cols-1 gap-3 md:grid-cols-6'>
                        <CurrentWeather weatherData={weatherData} />
                        <FeelsLike weatherData={weatherData} />
                        <Humidity weatherData={weatherData} />
                        <WindSpeed weatherData={weatherData} />
                        <TemperatureMin weatherData={weatherData} />
                        <TemperatureMax weatherData={weatherData} />
                        <Forecast forecastData={forecastData} />
                    </div>
                </>
            ) : (
                <div className='w-9/12 h-auto bg-secondary-pink text-white rounded-lg my-6 p-6 text-center'>
                    <p className='text-xl'>No se han encontrado datos.</p>
                </div>
            )}
        </div>
    )
};

export default Result;
