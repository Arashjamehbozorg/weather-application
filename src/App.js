import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import React, { useState, useEffect } from "react";

function App() {
  // useEffect to fetch default weather data when component mounts
  useEffect(() => {
    // Function to fetch default weather
    const fetchDefaultWeather = async () => {
      try {
        // Make API call to fetch weather data for default city 'Bonn'
        const res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=Bonn&days=5&aqi=yes&alerts=yes`
        );
        // Throw an error if response is not OK
        if (!res.ok) {
          throw new Error();
        }
        // Set state with fetched weather data
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Error loading default city weather", error);
      }
    };
    fetchDefaultWeather();
  }, []);

  // Constants and State Variables

  const api_key = "fa3ef99aaf7a42c4846104836232309";
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [scale, setScale] = useState("C");
  const [selectedCity, setSelectedCity] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  // useEffect to update background image based on weather condition and time of the day
  useEffect(() => {
    let timeOfDay = "day";
    // Early return if data is not present
    if (!data || !data.current) return;
    if (!data.current.is_day) {
      timeOfDay = "night";
    }

    const code_weather = data.current.condition.code;

    let imageUrl = process.env.PUBLIC_URL + "/assets/images/";

    if (code_weather === 1000) {
      imageUrl += `${timeOfDay}/cloudy.jpg`;
    } else if (
      [
        1003, 1006, 1009, 1030, 1069, 1087, 1135, 1273, 1276, 1279, 1282,
      ].includes(code_weather)
    ) {
      imageUrl += `${timeOfDay}/cloudy.jpg`;
    } else if (
      [
        1063, 1069, 1072, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1204,
        1207, 1240, 1243, 1246, 1249, 1252,
      ].includes(code_weather)
    ) {
      imageUrl += `${timeOfDay}/rainy.jpg`;
    } else {
      imageUrl += `${timeOfDay}/snowy.jpg`;
    }
    // Conditionally set the imageUrl based on weather code and time of day
    setBackgroundImage(imageUrl);
  }, [data]);

  // Function to Fetch Weather Data for a City
  const getWeatherDataForCity = async (city) => {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=5&aqi=yes&alerts=yes`
      );
      if (!res.ok) {
        throw new Error();
      }
      const data = await res.json();
      setData(data);
      setError(""); // Clearing any previous errors
    } catch (error) {
      setError("Error getting weather for the city!");
    }
  };

  // Event Handler for City Click
  const handleCityClick = (city) => {
    setSelectedCity(city.toLowerCase());
    getWeatherDataForCity(city);
  };

  // Function to get weather for the user's current location
  const getLocationWeather = async () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${latitude},${longitude}&days=5&aqi=yes&alerts=yes`
          );
          if (!res.ok) {
            throw new Error();
          }
          const data = await res.json();
          setData(data);
        } catch (error) {
          setError("Error getting weather for your location!");
        }
      },
      (error) => {
        setError("Error getting your location!");
      }
    );
  };
  // Handler to change the temperature scale
  const handleScaleChange = (newScale) => {
    setScale(newScale);
  };

  // Define the URL for fetching weather data
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${location}&days=5&aqi=yes&alerts=yes`;

  // Event Handler for Search
  const handleSearch = async () => {
    if (!location) return;
    setSelectedCity(location.toLowerCase());
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error();
      }
      const data = await res.json();
      setData(data);
      setLocation("");
      setError("");
    } catch (error) {
      alert("City not found!");
      setLocation("");
      setData({});
      window.location.reload();
    }
  };

  // Event Handler for key press events
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="main m-auto md:my-8 max-w-screen-md md:rounded-[28px] py-6 px-5 md:px-32 h-full shadow-xl shadow-gray-400 margin-remover"
      >
        <TopButtons
          data={data}
          handleCityClick={handleCityClick}
          selectedCity={selectedCity}
        />
        <Inputs
          handleSearch={handleSearch}
          handleKeyPress={handleKeyPress}
          setLocation={setLocation}
          location={location}
          onScaleChange={handleScaleChange}
          scale={scale}
          getLocationWeather={getLocationWeather}
        />
        {error ? (
          <div>
            <h1 className="text-white text-xl text-center">City Not Found! </h1>
            <h1 className="text-white text-xl text-center">Try Again! </h1>
          </div>
        ) : Object.keys(data).length !== 0 ? (
          <>
            <TimeAndLocation data={data} />
            <TemperatureAndDetails data={data} scale={scale} />
            <Forecast title="daily forecast" data={data} scale={scale} />
          </>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default App;
