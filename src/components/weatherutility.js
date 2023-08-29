export const fetchWeather = async (location, apiKey) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
      if (response.status === 401) {
        console.error('check key');
        return { error: 'unauthed' };
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('error (weather):', error);
      return null;
    }
  };
  