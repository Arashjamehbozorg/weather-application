// Utility to fetch and format weather data from Open-Meteo API
const getWeatherData = (url) => {
  // Fetching weather data using the provided URL
  // and returning the parsed JSON response.
  return fetch(url).then((res) => res.json());
};

// Function to format the current weather data.
const formatCurrentWeather = (data) => {
  // Destructuring relevant properties from the API response data.
  const {
    latitude,
    longitude,
    current_weather: { temperature, windspeed, weathercode, time },
  } = data;

  // Returning an object with formatted current weather data.
  return {
    lat: latitude,
    lon: longitude,
    temp: temperature,
    wind: windspeed,
    weather_code: weathercode,
    current_time: time,
  };
};

// Function to format the forecast weather data.
const formatForecastWeather = (data) => {
  // Destructuring relevant properties from the API response data.
  const { timezone, hourly, daily } = data;

  // Mapping through the time property of daily data to format it
  // (It seems there is a missing return to the outer scope for the formatted daily data.)
  daily.time.map((time, index) => {
    return {
      temp: daily.temperature_2m[index],
    };
  });

  // Returning an object with formatted forecast weather data.
  return { timezone, hourly, daily };
};

// Asynchronous function to fetch and format the weather data.
const getFormattedWeatherData = async (url) => {
  // Fetching the weather data
  const weatherData = await getWeatherData(url);

  // Formatting the current and forecast weather data
  const formattedCurrentWeather = formatCurrentWeather(weatherData);
  const formattedForecastWeather = formatForecastWeather(weatherData);

  // Merging and returning the formatted current and forecast weather data.
  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

export default getFormattedWeatherData;
