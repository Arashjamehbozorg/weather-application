import React from "react";
// Importing icons to be used in this component
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

// TemperatureAndDetails Component is responsible for displaying weather-related details
function TemperatureAndDetails({ data, scale }) {
  // Defining a variable to store the weather icon URL, it's null if no data available
  const weatherIcon = data.current ? data.current.condition.icon : null;
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        {/* Displaying the weather condition text or null if no data available */}
        <p>{data.current ? data.current.condition.text : null}</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between text-white py-3">
        <div className="md:w-8/12 md:justify-around flex flex-row justify-center items-center ">
          {/* Displaying the weather icon */}
          <div className="">
            <img src={weatherIcon} className="" alt="weather_icon" />
          </div>

          {/* Displaying the current temperature in the selected scale */}
          <h1 className="text-3xl">
            {scale === "C"
              ? `${data.current.temp_c.toFixed()}°C`
              : `${data.current.temp_f.toFixed()}°F`}
          </h1>
        </div>

        {/* Displaying additional weather details like feel-like temperature, humidity, and wind speed */}
        <div className="flex my-6 flex-col space-y-2">
          {/* Displaying the feel-like temperature */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Feels Like:
            <span className="font-medium ml-1">
              {/* Displaying the value or the error message if no data available */}
              {data && data.current && scale === "C"
                ? `${data.current.feelslike_c}°C`
                : `${data.current.feelslike_f}°F`}
            </span>
          </div>

          {/* Displaying humidity level */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            {/* Displaying the value or the error message if no data available */}
            {data && data.current ? (
              <span className="font-medium ml-1">{data.current.humidity}%</span>
            ) : (
              <span>Error: Invalid Input</span>
            )}
          </div>

          {/* Displaying wind speed */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Speed:
            {/* Displaying the value or the error message if no data available */}
            {data && data.current ? (
              <span className="font-medium ml-1">
                {data.current.wind_kph.toFixed()}km/h
              </span>
            ) : (
              <span>Error: Invalid Input</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-1 text-white text-sm py-3">
        {/* Displaying the sunrise, sunset, high and low temperature values or error messages if no data available */}
        <div className="card-details w-3/12 flex flex-col justify-center items-center">
          <UilSun />
          <p className="font-light">
            {data?.forecast?.forecastday ? (
              <span className="font-medium ml-1">
                {data.forecast.forecastday[1].astro.sunrise}
              </span>
            ) : (
              <span>Error: Invalid Input</span>
            )}
          </p>
        </div>

        <div className="card-details w-3/12 flex flex-col justify-center items-center">
          <UilSunset />
          <p className="font-light">
            {data?.forecast?.forecastday ? (
              <span className="font-medium ml-1">
                {data.forecast.forecastday[1].astro.sunset}
              </span>
            ) : (
              <span>Error: Invalid Input</span>
            )}
          </p>
        </div>

        <div className="card-details w-3/12 flex flex-col justify-center items-center">
          <UilArrowUp />
          <p className="font-light">
            <span className="font-medium border-r-white ml-1">
              High:{" "}
              {scale === "C"
                ? `${data.forecast.forecastday[1].day.maxtemp_c.toFixed()}°C`
                : `${data.forecast.forecastday[1].day.maxtemp_f.toFixed()}°F`}
            </span>
          </p>
        </div>
        <div className="card-details w-3/12 flex flex-col justify-center items-center rounded-md">
          <UilArrowDown />
          <p className="font-light">
            <span className="font-medium ml-1">
              Low:{" "}
              {scale === "C"
                ? `${data.forecast.forecastday[1].day.mintemp_c.toFixed()}°C`
                : `${data.forecast.forecastday[1].day.mintemp_f.toFixed()}°F`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
