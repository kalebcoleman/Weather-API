## 🌤️ Weather API

This project was created as part of my Web Programming I course in the Bachelor of Science in Data Science program at Northern Arizona University (NAU). 
The Weather Dashboard is a simple web app that allows users to input a city name or ZIP code and retrieve real-time weather data using the [WeatherAPI](https://www.weatherapi.com/).

🔗 Live Demo: https://weatherdisplay.z5.web.core.windows.net/

## 🚀 Features

🔍 Search weather by city or ZIP code

🌡️ Real-time temperature, condition, humidity, wind speed, and pressure

🎨 Dynamic background color based on weather condition

🌈 Emoji-based weather icons for a clean, font-free UI

🧠 Auto-remembers last searched location via sessionStorage

## 🛠️ Technologies Used

HTML for structure

CSS for styling

JavaScript for logic and API integration

WeatherAPI for live weather data

Emojis for visualizing weather conditions — no external icon libraries used

Session Storage to persist user location temporarily

## 📁 Project Structure

📦 project-root/

├── index.html            # Main HTML page

├── styles.css            # Custom styles

├── script.js             # Main application logic

└── config.js             # Stores WeatherAPI key (excluded from repo for security)


## 🔐 Setup Instructions

Clone the repository

git clone https://github.com/kalebcoleman/weather-API.git

cd weather-API

Create a config.js file and use the code below

```
const config = {
    WEATHER_API_KEY: 'YOUR_API_KEY_HERE'
};
```

Open index.html in your browser

## 🧠 Lessons Learned

This project gave me hands-on experience with:

* DOM manipulation

* Fetching and displaying API data

* Using emojis for a clean visual interface

* Styling for mobile and desktop responsiveness

* Separating logic, style, and structure into clear files

## 🙏 Credit

* [WeatherAPI](https://www.weatherapi.com/) — for providing the free weather data

* [Emoji icons](https://unicode.org/emoji/charts/full-emoji-list.html) — from the Unicode Standard

* Original inspiration for weather icons was [Erik Flowers' Weather Icons](https://erikflowers.github.io/weather-icons/), though now replaced with emojis

## 📜 Licensing

This project is for educational use.
Weather icons previously used were under the [SIL OFL 1.1] (http://scripts.sil.org/OFL), but are no longer required since switching to emojis.
