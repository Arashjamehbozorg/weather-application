import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

// Inputs Component handles the search bar, location button, and the temperature scale buttons
function Inputs({
  handleSearch,
  handleKeyPress, // Function to handle the search functionality when the user presses a key
  setLocation, // Function to set the location based on user input
  onScaleChange, // Function to change the temperature scale
  scale, // Current temperature scale (Celsius or Fahrenheit)
  getLocationWeather, // Function to get the weather for the current location
}) {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        {/* Search Input field where the user can type a query */}
        <input
          type="text"
          placeholder="search..."
          className="font-light p-2 w-full rounded-full shadow-xl focus:outline-none capitalize"
          onKeyDown={handleKeyPress} // Updated to handleKeyPress
          onChange={(e) => setLocation(e.target.value)}
        />
        {/* Search Icon, acts as a visual cue for the search functionality */}
        <UilSearch
          size={25}
          onClick={handleSearch} // handleSearch is attached here
          className="cursor-pointer transition ease-out hover:scale-110 text-white"
        />

        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-110"
          onClick={getLocationWeather} // Fetch the weather for the current location when clicked
        />
        {/* Location Icon, a button to fetch the weather of the user's current location */}
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className={`font-light ${
            scale === "C"
              ? "bg-white w-7 h-7 rounded-full text-black"
              : "text-white"
          }`}
          onClick={() => onScaleChange("C")} // Set the temperature scale to Celsius when clicked
        >
          °C
        </button>
        {/* Celsius Button, allows the user to set the temperature scale to Celsius */}

        <p className="text-xl text-white mx-1">|</p>
        {/* Separator between Celsius and Fahrenheit buttons */}

        <button
          name="imperial"
          className={`font-light ${
            scale === "F"
              ? "bg-white w-7 h-7 rounded-full text-black"
              : "text-white"
          }`}
          onClick={() => onScaleChange("F")} // Set the temperature scale to Fahrenheit when clicked
        >
          °F
        </button>
        {/* Fahrenheit Button, allows the user to set the temperature scale to Fahrenheit */}
      </div>
    </div>
  );
}

export default Inputs;
