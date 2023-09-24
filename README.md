# Weather Dashboard

## Project Overview

The Weather Dashboard is a responsive, user-friendly web application developed using React.js and Tailwind CSS. It provides real-time weather information, utilizing the WeatherAPI to fetch and display the weather data accurately. It’s equipped with dynamic features such as displaying weather alerts, a 5-day forecast, and dynamic backgrounds reflecting current weather conditions.

## Features

- **Real-Time Weather Information:** Provides current weather information for any selected city.
- **5-Day Forecast:** Offers a detailed weather forecast for the upcoming five days.
- **Dynamic Backgrounds:** Backgrounds change according to the current weather conditions and time of day.
- **Temperature Scale Toggle:** Allows toggling between Celsius and Fahrenheit temperature scales.
- **Geolocation Feature:** Fetches and displays local weather information using the user’s current location.
- **Responsive Design:** Adapts UI for different devices ensuring a seamless user experience, thanks to Tailwind CSS.
- **Iconscout Icons:** Utilizes high-quality icons from Iconscout to enhance the UI.

## Application Structure

This application is modular and comprises several React components:

- **App:** The root component.
- **TopButtons:** Handles and renders city selection buttons.
- **Inputs:** Manages search inputs, search events, and temperature scale toggling.
- **TimeAndLocation:** Displays the current time and location.
- **TemperatureAndDetails:** Presents the current temperature and other weather details.
- **Forecast:** Renders a 5-day weather forecast.

## Technologies Used

- **React.js:** Utilized for building component-based UI.
- **Tailwind CSS:** Employed for crafting a responsive and adaptive design.
- **Iconscout:** Provides high-quality icons to enhance user interfaces.
- **WeatherAPI:** Supplies real-time weather information.

## Getting Started

### Prerequisites

- Node.js
- A modern web browser

### Setup & Installation

# Clone the repository

git clone https://github.com/Arashjamehbozorg/weather-dashboard.git

# Navigate to the project directory

cd weather-dashboard

# Install dependencies

npm install

# Start the development server

npm start

Access the application at `http://localhost:3000`.

## Usage & Interaction

1. **City Search:** Use the search bar to input a city name and display its current weather conditions.
2. **City Selection:** Use the pre-defined buttons for a quick switch between cities.
3. **Temperature Scale Toggle:** Easily switch between Celsius and Fahrenheit.
4. **Current Location Weather:** Use the location button to fetch weather information for your current location.

# To build the project for production

npm run build

## Acknowledgments & Contributions

All queries and contributions are welcome; please contact [jamehbozorgarash@gmail.com] for more information.
