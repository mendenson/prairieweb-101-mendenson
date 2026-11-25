const weatherStatus = document.getElementById("weather-status");
const weatherDetails = document.getElementById("weather-details");
const CACHE_KEY = "lakeLouiseWeather";
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

async function loadWeather() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=51.4167&longitude=-116.2167&current=temperature_2m,wind_speed_10m";
    
    try {
        const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY));
        if (cached && Date.now() - cached.savedAt < CACHE_DURATION && Number.isFinite(cached.temperature) && Number.isFinite(cached.wind)) {
            weatherStatus.textContent = "Recent estimated conditions (cached):";
            weatherDetails.textContent = `Temperature: ${cached.temperature} °C | Wind: ${cached.wind} km/h`;
            return;
        }
    } catch (error) {
        console.warn("Weather cache unavailable:", error)
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    try {
        const response = await fetch(url, {
            signal: controller.signal
        });

        if (!response.ok) {
            throw new Error("Weather API request failed.");
        }

        const data = await response.json();
        const wind = data.current?.wind_speed_10m;
        const temperature = data.current?.temperature_2m;

        if (!Number.isFinite(temperature) || !Number.isFinite(wind)) {
            throw new Error("Invalid weather data.");
        }

        weatherStatus.textContent = "Current estimated conditions:";
        weatherDetails.textContent = `Temperature: ${temperature} °C | Wind: ${wind} km/h`;

        try {sessionStorage.setItem(CACHE_KEY,JSON.stringify({
            temperature: temperature,
            wind: wind,
            savedAt: Date.now()
            }));
        } catch (error) {
            console.warn("Could not save weather cache:", error);
        }
    } catch (error) {
        weatherStatus.textContent = "Weather information is currently unavailable.";
        weatherDetails.textContent = "";
        console.error("Weather error:", error);
    } finally {
        clearTimeout(timeout);
    }
}

loadWeather();

const mapButton = document.getElementById("load-map");
const mapContainer = document.getElementById("map-container");
const mapNotice = document.getElementById("map-notice");

mapButton.addEventListener("click", function () {
    const map = document.createElement("iframe");
    map.title = "OpenStreetMap showing Lake Louise, Alberta";
    map.src = "https://www.openstreetmap.org/export/embed.html?bbox=-116.22%2C51.40%2C-116.14%2C51.43&layer=mapnik";
    map.loading = "lazy";
    map.referrerPolicy = "strict-origin-when-cross-origin";
    map.setAttribute("sandbox", "allow-scripts allow-same-origin");
    mapContainer.appendChild(map);
    mapContainer.hidden = false;
    mapButton.hidden = true;
    mapNotice.textContent = "Map requested from OpenStreetMap. Third-party requests may occur.";
});