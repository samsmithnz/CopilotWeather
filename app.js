const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const locationInput = document.getElementById('location-input');

    searchButton.addEventListener('click', () => {
        const location = locationInput.value;
        if (location) {
            fetchWeatherData(location);
        } else {
            getUserLocation();
        }
    });

    getUserLocation();
});

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(`${latitude},${longitude}`);
        }, error => {
            console.error('Error getting user location:', error);
            alert('Unable to retrieve your location. Please enter a city name or ZIP code.');
        });
    } else {
        alert('Geolocation is not supported by this browser. Please enter a city name or ZIP code.');
    }
}

function fetchWeatherData(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather data not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeatherData(data) {
    const locationName = document.getElementById('location-name');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');
    const weatherConditions = document.getElementById('weather-conditions');

    locationName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    weatherConditions.textContent = `Weather Conditions: ${data.weather[0].description}`;
}
