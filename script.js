document.addEventListener("DOMContentLoaded", function() {
    const apiKey = config.WEATHER_API_KEY; 
    const locationForm = document.getElementById('locationForm');
    const locationInput = document.getElementById('locationInput');
    const locationName = document.getElementById('locationName');
    const temperature = document.getElementById('temperature');
    const weatherCondition = document.getElementById('weatherCondition');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');
    const pressure = document.getElementById('pressure');
    const weatherIcon = document.getElementById('weatherIcon'); 
    const errorMessage = document.getElementById('errorMessage'); 
    const body = document.body;

    const savedLocation = sessionStorage.getItem('savedLocation');
    if (savedLocation) {
        getWeather(savedLocation);
    }

    locationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const location = locationInput.value;
        getWeather(location);
    });

    function getWeather(location) {
        fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    showError('Location not found. Please enter a valid city name or zip code.');
                    return;
                }
                updateWeatherDisplay(data);
                saveLocation(location);  
                clearError(); 
            })
            .catch(error => {
                showError('Error fetching weather data. Please try again later.');
                console.error('Error fetching weather data:', error);
            });
    }

    function updateWeatherDisplay(data) {
        // Update weather display the data from API
        locationName.textContent = data.location.name;
        temperature.textContent = `Temperature: ${data.current.temp_f} °F`; 
        weatherCondition.textContent = `Condition: ${data.current.condition.text}`;
        humidity.textContent = `Humidity: ${data.current.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.current.wind_mph} mph`; 
        pressure.textContent = `Pressure: ${data.current.pressure_in} in`; 

        const emoji = getIconEmoji(data.current.condition.code);
        weatherIcon.textContent = emoji;
        weatherIcon.className = '';     

        const backgroundColor = getBackgroundColor(data.current.condition.code);
        body.style.backgroundColor = backgroundColor;
    }

    function saveLocation(location) {
        sessionStorage.setItem('savedLocation', location); 
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.color = 'red';
    }

    function clearError() {
        errorMessage.textContent = '';
    }

    function getIconEmoji(conditionCode) {
        const emojiMapping = {
            1000: '☀️',   // Sunny
            1003: '🌤️',  // Partly Cloudy
            1006: '☁️',   // Cloudy
            1009: '☁️',   // Overcast
            1030: '🌫️',   // Mist
            1063: '🌦️',   // Patchy rain
            1066: '❄️',   // Snow
            1069: '🌧️❄️',// Sleet
            1072: '❄️',   // Freezing drizzle
            1087: '⛈️',   // Thunder
            1114: '🌬️❄️',// Blowing snow
            1117: '❄️🌩️',// Blizzard
            1135: '🌫️',   // Fog
            1147: '🌫️',
            1150: '🌧️',
            1153: '🌧️',
            1168: '🌧️',
            1171: '🌧️',
            1180: '🌧️',
            1183: '🌧️',
            1186: '🌧️',
            1189: '🌧️',
            1192: '🌧️',
            1195: '🌧️',
            1198: '🌧️',
            1201: '🌧️',
            1204: '🌨️',
            1207: '🌨️',
            1210: '❄️',
            1213: '❄️',
            1216: '❄️',
            1219: '❄️',
            1222: '❄️',
            1225: '❄️',
            1237: '🧊',   // Ice pellets
            1240: '🌧️',
            1243: '🌧️',
            1246: '🌧️',
            1249: '🌧️❄️',
            1252: '🌧️❄️',
            1255: '❄️',
            1258: '❄️',
            1261: '❄️',
            1264: '❄️',
            1273: '🌩️',
            1276: '🌩️',
            1279: '❄️⚡',
            1282: '❄️⚡'
        };
        return emojiMapping[conditionCode] || '🌈'; // fallback
    }
    

    function getBackgroundColor(conditionCode) {
        const colorMapping = {
            1000: '#FFD700',
            1003: '#B0C4DE',
            1006: '#778899',
            1009: '#778899',
            1030: '#C0C0C0',
            1063: '#4682B4',
            1066: '#ADD8E6',
            1069: '#ADD8E6',
            1072: '#D3D3D3',
            1087: '#A9A9A9',
            1114: '#E0FFFF',
            1117: '#F0FFFF',
            1135: '#DCDCDC',
            1147: '#D3D3D3',
            1150: '#87CEFA',
            1153: '#87CEFA',
            1168: '#B0C4DE',
            1171: '#B0C4DE',
            1180: '#4682B4',
            1183: '#4682B4',
            1186: '#4169E1',
            1189: '#4169E1',
            1192: '#0000CD',
            1195: '#0000CD',
            1198: '#1E90FF',
            1201: '#1E90FF',
            1204: '#00BFFF',
            1207: '#00BFFF',
            1210: '#87CEEB',
            1213: '#87CEEB',
            1216: '#ADD8E6',
            1219: '#ADD8E6',
            1222: '#B0C4DE',
            1225: '#B0C4DE',
            1237: '#AFEEEE',
            1240: '#87CEFA',
            1243: '#4682B4',
            1246: '#0000FF',
            1249: '#87CEEB',
            1252: '#00BFFF',
            1255: '#ADD8E6',
            1258: '#ADD8E6',
            1261: '#B0E0E6',
            1264: '#B0E0E6',
            1273: '#1E90FF',
            1276: '#0000CD',
            1279: '#87CEFA',
            1282: '#00BFFF'
        };

        return colorMapping[conditionCode] || '#FFFFFF'; // Default to white if condition code not found
    }
});
