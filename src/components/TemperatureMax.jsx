import React from 'react';

const TemperatureMax = ({ weatherData }) => {
    if (!weatherData || !weatherData.main) {
        return null;  // Si no hay datos, no renderiza nada o no muestra nada.
    }

    const { temp_max } = weatherData.main;

    return (
        <div className='col-span-1 row-span-1 md:col-span-1 bg-secondary-pink text-white rounded-xl shadow-lg  p-4'>
            <div className='w-full flex flex-col justify-between items-center py-12 bg-slate-50/20 rounded-xl'>
                <div className="flex justify-center items-center gap-2">        
                    <svg className='w-10 h-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15.9998C11.4477 15.9998 11 16.4475 11 16.9998C11 17.5521 11.4477 17.9998 12 17.9998C12.5523 17.9998 13 17.5521 13 16.9998C13 16.4475 12.5523 15.9998 12 15.9998ZM12 15.9998V6M12 16.9998L12.0071 17.0069M16 16.9998C16 19.209 14.2091 20.9998 12 20.9998C9.79086 20.9998 8 19.209 8 16.9998C8 15.9854 8.37764 15.0591 9 14.354L9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V14.354C15.6224 15.0591 16 15.9854 16 16.9998Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className='font-bold text-3xl'>{temp_max.toFixed()}°C</p>
                </div> 
                <p className='text-center text-xl'>Temperatura máx.</p>      
            </div>              
        </div>
    );
};

export default TemperatureMax;
