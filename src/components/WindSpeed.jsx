import React from 'react';

const WindSpeed = ({ weatherData }) => {
    if (!weatherData || !weatherData.wind) {
        return null; // Si no hay datos, no renderiza nada o no muestra nada.
    }

    const { speed } = weatherData.wind;

    return (
        <div className='col-span-1 row-span-1 md:col-span-1 bg-primary-blue text-white rounded-xl shadow-lg relative p-4'>
            <div className='flex justify-center w-full h-full items-center py-12 bg-slate-50/20 rounded-xl'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className="flex justify-center items-center  gap-2">
                        <svg className='w-10 h-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7639 7C16.3132 6.38625 17.1115 6 18 6C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H3M8.50926 4.66667C8.87548 4.2575 9.40767 4 10 4C11.1046 4 12 4.89543 12 6C12 7.10457 11.1046 8 10 8H3M11.5093 19.3333C11.8755 19.7425 12.4077 20 13 20C14.1046 20 15 19.1046 15 18C15 16.8954 14.1046 16 13 16H3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className='font-bold text-3xl'>{speed.toFixed()}km/h</p>
                    </div>
                    <p className='text-center text-xl '>Viento</p>
                </div>
            </div>
        </div>       
    );
};

export default WindSpeed;
