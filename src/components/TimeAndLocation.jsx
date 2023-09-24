import React from "react";

// The TimeAndLocation component is responsible for displaying the current date and the location.
function TimeAndLocation({ data }) {
  // Method to get the current date in the specified format
  const getCurrentDate = () => {
    const currentDate = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return currentDate; // Returns the formatted date string
  };

  // Storing the current date
  const currentDate = getCurrentDate();

  return (
    <div>
      {/* Displaying the current date */}
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight text-center">
          {currentDate}
        </p>
      </div>

      {/* Displaying the location name and country, or a default value if not available */}
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium text-center">
          {data.location
            ? `${data.location.name}, ${data.location.country}`
            : "Bonn, Germany"}
        </p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
