import { useState } from 'react';
import { fetchWeather } from './weatherutility';

const WeatherSection = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY || '';
    const data = await fetchWeather(location, apiKey);
    
    if (data && !data.error) {
      setWeatherData(data);
    } else {
      console.error('invalid data:', data);
      setWeatherData(null);
    }
  };

  return (
    <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Weather</h2>
        <p className="text-md mb-4 text-center">Uses <a href="https://openweathermap.org/api" className="text-blue-500">openWeatherMap</a></p>
      <input
        type="text"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="py-2 px-4 ml-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring focus:ring-opacity-50 focus:outline-none"
        onClick={fetchWeatherData}
      >
        Get Weather
      </button>
      {weatherData && weatherData.weather && weatherData.weather[0] ? (
        <div className="mt-4 p-4 border border-gray-300 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">{weatherData.name}</h2>
          <div className="flex items-center space-x-4">
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                className="h-10 w-10"
              />
            </div>
            <div>
              <p className="text-gray-600">{weatherData.weather[0].description}</p>
              <p className="text-gray-800">
                Temperature: {Math.round(weatherData.main.temp - 273.15)}°C
              </p>
              <p className="text-gray-800">Humidity: {weatherData.main.humidity}%</p>
              <p className="text-gray-800">
                Wind: {weatherData.wind.speed} m/s, {weatherData.wind.deg}°
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherSection;
