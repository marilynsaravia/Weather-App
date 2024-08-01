import { useState } from 'react';
import Axios from 'axios'; // Importo la biblioteca Axios para poder realizar solicitudes HTTP, para poder interactuar con APIs y obtener los datos desde servidores.

import Result from './components/Result.jsx';
import Search from './components/Search.jsx';

function App() {
  const [data, setData] = useState({}); // Indica el estado para almacenar los datos obtenidos, inicialmente vacío.
  const [location, setLocation] = useState(""); // Indica el estado para almacenar la ubicación o ciudad actual, inicialmente una cadena vacía.
  
  const API_KEY = import.meta.env.VITE_APP_API_KEY; // DATO SENSIBLE obtenido del archivo .env a través de variables de entorno para poder protegerlo de ser expuesto en el código fuente. ¡¡Asegúrate de no subir el archivo .env al repositorio y de agregarlo al .gitignore!!
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=es&units=metric&appid=${API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      Axios.get(url) // Método para obtener los datos de la API
        .then(response => {
          setData(response.data);
          //  Prueba inicial para verificar los datos devueltos
          //  console.log(response.data);
        })
        .catch(error => console.error('Error al obtener los datos del clima:', error));
      setLocation('');
    }
  };

  return (
    <div className='flex flex-col items-center p-5 relative gap-4'>
      <Search location={location} setLocation={setLocation} searchLocation={searchLocation} />
      <Result weatherData={data} />
    </div>
  );
}

export default App;
