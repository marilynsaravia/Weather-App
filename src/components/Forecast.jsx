import React from 'react';

const Forecast = ({ forecastData }) => {
    const today = new Date(); // Obtiene la fecha actual.

    const filteredData = Object.entries(forecastData) // Filtra los datos para mostrar solo las predicciones a partir del día de hoy.
        .filter(([dateTime]) => { // Se utiliza .filter para seleccionar solo las entradas con fecha y hora iguales o posteriores a hoy.
            const forecastDate = new Date(dateTime); // Convierte la fecha del pronóstico a un objeto Date.
            return forecastDate >= today; // Solo mantiene los pronósticos desde hoy en adelante.
        });

    return (
        <div className="col-span-1 row-span-1 md:col-span-5 bg-primary-pink text-white rounded-xl shadow-lg p-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
                {filteredData.length > 0 ? (
                    filteredData.map(([date, data], index) => ( // Recorre cada entrada de datos filtrados.
                        <div key={index} className="w-full h-auto flex flex-col justify-center items-center bg-slate-50/20 rounded-xl p-2 text-center">
                            <p className="text-xl capitalize">{new Date(date).toLocaleDateString('es-ES', { weekday: 'long' })}</p> {/* Muestra el día de la semana en español. */}
                            <div className="relative">
                                <img 
                                    src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} 
                                    alt={data.description} 
                                />
                            </div>
                            <p className="text-3xl font-bold">{data.temp.toFixed()}°C</p>
                            <p className="text-xl">{data.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay datos disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default Forecast;
