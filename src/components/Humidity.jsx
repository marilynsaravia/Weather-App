import React from 'react';

const Humidity = ({ weatherData }) => {

    if (!weatherData || !weatherData.main) {
        return null; // Si no hay datos, no renderiza nada o no muestra nada.
    }
    const { humidity } = weatherData.main;
    return (
        <div className='col-span-1 row-span-1 md:col-span-1 bg-primary-yellow text-white rounded-xl shadow-lg relative p-4'>
            <div className='flex justify-center w-full h-full items-center py-12 bg-slate-50/20 rounded-xl'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className="flex justify-center items-center gap-2">        
                        <svg className='w-10 h-10' viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 14.7C21 18.1794 19.0438 21 15.5 21C11.9562 21 10 18.1794 10 14.7C10 11.2206 15.5 3 15.5 3C15.5 3 21 11.2206 21 14.7Z" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 8.2C8 9.7464 7.11083 11 5.5 11C3.88917 11 3 9.7464 3 8.2C3 6.6536 5.5 3 5.5 3C5.5 3 8 6.6536 8 8.2Z"  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className='font-bold text-3xl'>{humidity}%</p>
                    </div>
                    <p className='text-center text-xl'>Humedad</p>             
                </div>
            </div>
        </div>
    );
};
export default Humidity;
