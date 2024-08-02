# Weather App

Una aplicación de clima que muestra las condiciones actuales y el pronóstico para cualquier ciudad.

# Descripción

Weather App es una aplicación simple que utiliza la API de [OpenWeather](https://openweathermap.org/) para mostrar el clima actual y el pronóstico para los próximos días en cualquier ubicación. La aplicación está desarrollada con React y utiliza [Axios](https://axios-http.com/es/docs/intro) para manejar las solicitudes HTTP a la API.

# Captura de pantalla
![Pink 3D Mockups Sales Pitch Sales Presentation](https://github.com/user-attachments/assets/56735034-30e1-40ab-b990-2ef510cc9063)

# Demo 
Haz click en el siguiente enlace: [Weather App](https://weather-app-dvem.onrender.com/)

# Tecnologías utilizadas

**Cliente:**
- **[React](https://react.dev/):** Biblioteca de JavaScript para construir interfaces de usuario.
- **[Vite](https://es.vitejs.dev/guide/):** Herramienta de construcción y desarrollo para aplicaciones web, que ofrece una experiencia rápida y moderna. 
- **[TailwindCSS](https://tailwindcss.com/docs/guides/vite):** Framework de CSS para diseño.
- **[Axios](https://axios-http.com/es/docs/intro):** Librería para realizar solicitudes HTTP.

**API:**
- **[OpenWeather API](https://openweathermap.org/current#one):** Proveedor de datos meteorológicos.

# Instalación 

1. **Clona el repositorio:**
```bash
   git clone https://github.com/tu-usuario/weather-app.git
``` 
2. **Navega al directorio del proyecto:**   
```bash
   cd weather-app
```
3. **Instala las dependencias:**
```bash
   npm install
```
4. **Configura las variables de entorno:**
   Crea un archivo .env en la raíz del proyecto y agrega tu clave de API de OpenWeather:
```bash
   VITE_APP_API_KEY=tu_clave_de_api
```
5. **Ejecuta el servidor de desarrollo:**
```bash
   npm run dev
```
# Referencia de la API

## Obtener datos del clima actual

**Descripción:** Proporciona datos meteorológicos actuales para una ciudad específica.

**Edpoint:**
```bash
  GET https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=es&units=metric&appid=${API_KEY}
```
**Parámetros de la solicitud:**
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `q` | `string` | **Requerido.** Ciudad para la cual obtener el clima (por ejemplo, Madrid). |
| `appid` | `string` | **Requerido.** Tu clave de API para acceder a los datos de OpenWeather. |
| `units` | `string` | **A elección.** Unidades para la temperatura (metric para Celsius, imperial para Fahrenheit). |
| `lang` | `string` | **A elección.** Idioma para las descripciones del clima (por ejemplo, es para español). |


**Datos Incluidos:**
  - Temperatura actual.
  - Descripción del clima actual.
  - Sensación térmica, humedad, velocidad del viento, Temperatura mínima y Temperatura máxima.
  - Imágen del clima actual.
  - Fecha y hora actual en que se tomaron los datos.
    
**Ejemplo de respuesta JSON:**

```json
{
  "coord": {
    "lon": -3.7038,
    "lat": 40.4168
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 28.4,
    "feels_like": 30.0,
    "temp_min": 24.0,
    "temp_max": 29.5,
    "pressure": 1013,
    "humidity": 60
  },
  "visibility": 10000,
  "wind": {
    "speed": 5.1,
    "deg": 230
  },
  "clouds": {
    "all": 0
  },
  "dt": 1609459200,
  "sys": {
    "type": 1,
    "id": 6440,
    "country": "ES",
    "sunrise": 1609443600,
    "sunset": 1609490400
  },
  "timezone": 3600,
  "id": 3117735,
  "name": "Madrid",
  "cod": 200
}
```
## Obtener pronóstico del clima

**Descripción:** Proporciona datos meteorológicos para los días siguientes a la fecha actual, en intervalos de 3 horas

**Edpoint:**
```bash
  GET https://api.openweathermap.org/data/2.5/forecast?q=${weatherData.name}&appid=${API_KEY}&lang=es&units=metric
```
**Parámetros de la solicitud:**
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `q` | `string` | **Requerido.** Ciudad para la cual obtener el clima (por ejemplo, Madrid). |
| `appid` | `string` | **Requerido.** Tu clave de API para acceder a los datos de OpenWeather. |
| `units` | `string` | **A elección.** Unidades para la temperatura (metric para Celsius, imperial para Fahrenheit). |
| `lang` | `string` | **A elección.** Idioma para las descripciones del clima (por ejemplo, es para español). |


**Datos Incluidos:**

  - Temperatura según la fecha y hora respecto al día actual.
  - Descripción del clima según la fecha y hora respecto al día actual.
  - Imágen del clima.
  - Fecha y hora actual en que se tomaron los datos.
    
**Ejemplo de respuesta JSON**
```json
{
  "coord": {
    "lon": -3.7038,
    "lat": 40.4168
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "main": {
    "temp": 28.4       
  },
  "sys": {
    "country": "ES"     
  },
  "name": "Madrid",
  "dt": 1609459200,    
  "timezone": 3600    
}
```
# Autora
:v: [@marilynsaravia](https://github.com/marilynsaravia)


