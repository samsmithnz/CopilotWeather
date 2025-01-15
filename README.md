# CopilotWeather
An experiment with weather

## Project Details

This project is a weather website that displays weather information based on the user's location. It uses the Geolocation API to get the user's location and the OpenWeatherMap API to fetch weather data.

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/samsmithnz/CopilotWeather.git
   ```
2. Navigate to the project directory:
   ```
   cd CopilotWeather
   ```
3. Open `index.html` in your preferred web browser.

## Usage Guidelines

- The website will automatically try to get your location and display the weather information.
- You can also enter a city name or ZIP code in the search bar to get weather information for a specific location.

## API Endpoints and Usage

- The website uses the OpenWeatherMap API to fetch weather data.
- You need to replace `YOUR_API_KEY` in `app.js` with your own OpenWeatherMap API key.
- The API endpoint used is:
  ```
  https://api.openweathermap.org/data/2.5/weather?q={location}&appid={apiKey}&units=metric
  ```
