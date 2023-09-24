import React from "react";
import "../styles/Forecast.css";

// The Forecast component displays weather forecast data.
// It receives three props:
// - data: The forecast data to be displayed.
// - title: The title to be displayed above the forecast data.
// - scale: The temperature scale to be used (Celsius or Fahrenheit).
function Forecast({ data, title, scale }) {
  return (
    <div>
      {/* The main section holding the forecast details */}
      <section className="forecast mt-6">
        {/* Display the title received as a prop, styled as white, medium font, and uppercase */}
        <p className="text-white font-medium uppercase">{title}</p>
        <hr className="my-2" />

        {/* Card displaying the forecast data */}
        <div className="card card-lg forecast-card mt-4">
          <ul>
            {/* Map through the forecastday array in the received data and create list items for each day */}
            {data?.forecast?.forecastday?.map((day, index) => (
              <li className="card-item">
                <div className="icon-wrapper">
                  {/* Display the condition icon for the day */}
                  <img
                    src={day.day.condition.icon}
                    alt="Weather condition icon"
                  />
                  <span>
                    {/* Display the short form of the weekday */}
                    <p className="text-white">
                      {" "}
                      {new Date(day.date).toLocaleString("en-US", {
                        weekday: "short",
                      })}
                    </p>
                  </span>
                </div>

                {/* Display the high and low temperatures for the day, formatted according to the scale prop */}
                <p className="text-white label-1 text-center">
                  <p className="font-extralight">
                    High:{" "}
                    {scale === "C"
                      ? `${day.day.maxtemp_c.toFixed()}°C`
                      : `${day.day.maxtemp_f.toFixed()}°F`}
                  </p>
                  <p className="font-extralight">
                    Low:{" "}
                    {scale === "C"
                      ? `${day.day.mintemp_c.toFixed()}°C`
                      : `${day.day.mintemp_f.toFixed()}°F`}
                  </p>
                </p>

                {/* Display the long form of the month and the numeric day */}
                <p className="text-white label-1">
                  {new Date(day.date).toLocaleString("en-US", {
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Forecast;
