// Get current weather near Lake Louise
async function loadWeather() {
  const weatherText = document.getElementById("weather-status");

  const url = "https://api.open-meteo.com/v1/forecast?latitude=51.4167&longitude=-116.2167&current=temperature_2m,wind_speed_10m";

  const controller = new AbortController();

  // Stop the request after 8 seconds
  const timer = setTimeout(function () {
    controller.abort();
  }, 8000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error("Weather request failed");
    }

    const data = await response.json();

    if (!data.current) {
      throw new Error("Weather data is missing");
    }

    const temperature = data.current.temperature_2m;
    const wind = data.current.wind_speed_10m;

    if (typeof temperature !== "number" ||
        typeof wind !== "number") {
      throw new Error("Invalid weather data");
    }

    weatherText.textContent =
      "Temperature: " + temperature + " °C | Wind: " + wind + " km/h";

  } catch (error) {
    weatherText.textContent =
      "Weather information is currently unavailable.";

    console.warn("Weather error:", error.message);

  } finally {
    clearTimeout(timer);
  }
}

// Set up the contact form
function setupForm() {
  const form = document.getElementById("trailForm");
  const status = document.getElementById("form-status");
  const button = form.querySelector("button");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Demo only: do not send or save form information
    status.textContent =
      "Form validated successfully. Demo only - no message was sent.";
  });

  button.disabled = false;
}

// Start website functions
loadWeather();
setupForm();