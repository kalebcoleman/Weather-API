🌤️ Weather Dashboard

This project was created as part of my Web Programming I course in the Bachelor of Science in Data Science program at Northern Arizona University (NAU). 
The Weather Dashboard is a simple web app that allows users to input a city name or ZIP code and retrieve real-time weather data using the WeatherAPI.

🚀 Features

🔍 Search weather by city or ZIP code

🌡️ Real-time temperature, condition, humidity, wind speed, and pressure

🎨 Dynamic background color based on weather condition

🌤️ Weather icons integrated for enhanced UI experience

🧠 Auto-remembers last searched location via sessionStorage

🛠️ Technologies Used

HTML for structure

CSS for styling

JavaScript for logic and API integration

WeatherAPI for live weather data

Weather Icons by Erik Flowers for visualizing weather conditions

Session Storage to persist user location temporarily

📁 Project Structure

📦 project-root/

├── index.html            # Main HTML page

├── styles.css            # Custom styles

├── script.js             # Main application logic

├── config.js             # Stores WeatherAPI key (excluded from repo for security)

└── weather-icons-master/ # External weather icon styles (not included in repo)

🔐 Setup Instructions

Clone the repository

git clone https://github.com/kalebcoleman/weather-API.git

cd weather-API

Create a config.js file

This file is already in the source code but should not be committed with your actual API key.

const config = {

    WEATHER_API_KEY: 'YOUR_API_KEY_HERE'
    
};

Download the weather icons library

Download from: https://github.com/erikflowers/weather-icons

Place the weather-icons-master folder in the project root

Open index.html in your browser


🧠 Lessons Learned

This project was a solid introduction to DOM manipulation, external APIs, and integrating third-party UI assets. 
It helped me understand real-world development patterns and how to structure front-end code clearly and modularly.

