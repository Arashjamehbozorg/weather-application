import React from "react";

// The TopButtons component is responsible for displaying the list of city buttons at the top of the UI.
function TopButtons({ handleCityClick, selectedCity }) {
  // Defining an array of city objects, each object containing id and title of the city.
  const cities = [
    { id: 1, title: "Berlin" },
    { id: 2, title: "Tehran" },
    { id: 3, title: "Bonn" },
    { id: 4, title: "Paris" },
    { id: 5, title: "London" },
  ];

  return (
    // Container for the city buttons, positioned with 'justify-around' for even spacing
    <div className="flex items-center justify-around my-6">
      {
        // Mapping over the cities array to create a button for each city
        cities.map((city) => (
          <button
            key={city.id} // Unique key prop for each button, based on city id
            className={`text-lg font-medium ${
              // Conditional styling - applying different text color if the city is the selectedCity
              city.title.toLowerCase() === selectedCity.toLowerCase()
                ? "text-cyan-300"
                : "text-white"
            }`}
            onClick={() => handleCityClick(city.title)} // Calling handleCityClick with the title of the city as parameter on button click
          >
            {city.title} {/* Displaying the title of the city on the button */}
          </button>
        ))
      }
    </div>
  );
}

export default TopButtons;
