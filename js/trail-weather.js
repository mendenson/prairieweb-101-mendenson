const WEATHER_CACHE_DURATION = 10 * 60 * 1000;

async function loadTrailWeather(elementId, latitude, longitude) {
    const weatherElement = document.getElementById(elementId);
    const WEATHER_CACHE_KEY = `mainSiteWeather_${elementId}`;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;

    // Check cached weather
    try {
        const cached = JSON.parse(
            sessionStorage.getItem(WEATHER_CACHE_KEY)
        );

        if (
            cached &&
            Date.now() - cached.savedAt < WEATHER_CACHE_DURATION &&
            Number.isFinite(cached.temperature) &&
            Number.isFinite(cached.wind)
        ) {
            weatherElement.textContent =
                `Temperature: ${cached.temperature} °C | Wind: ${cached.wind} km/h (cached)`;
            return;
        }
    } catch (error) {
        console.warn("Weather cache unavailable:", error);
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

        const temperature = data.current?.temperature_2m;
        const wind = data.current?.wind_speed_10m;

        if (!Number.isFinite(temperature) || !Number.isFinite(wind)) {
            throw new Error("Invalid weather data.");
        }

        weatherElement.textContent =
            `Temperature: ${temperature} °C | Wind: ${wind} km/h`;

        try {
            sessionStorage.setItem(
                WEATHER_CACHE_KEY,
                JSON.stringify({
                    temperature,
                    wind,
                    savedAt: Date.now()
                })
            );
        } catch (error) {
            console.warn("Could not save weather cache:", error);
        }

    } catch (error) {
        weatherElement.textContent =
            "Weather information is currently unavailable.";

        console.error("Weather error:", error);

    } finally {
        clearTimeout(timeout);
    }
}

loadTrailWeather(
    "weather-lake-louise",
    51.4167,
    -116.2167
);

loadTrailWeather(
    "weather-johnston-canyon",
    51.24554,
    -115.83990
);

loadTrailWeather(
    "weather-ha-ling",
    51.0642,
    -115.3997
);

loadTrailWeather(
    "weather-troll-falls",
    50.9481,
    -115.1444
);