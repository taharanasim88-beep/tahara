
async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();

    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    try {
        const geoResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
        );

        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            alert("City not found!");
            return;
        }

        const place = geoData.results[0];

        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`
        );

        const data = await weatherResponse.json();
        const current = data.current;

        document.getElementById("city").innerText =
            place.name;

        document.getElementById("temperature").innerText =
            current.temperature_2m + "°C";

        document.getElementById("humidity").innerText =
            current.relative_humidity_2m + "%";

        document.getElementById("wind").innerText =
            current.wind_speed_10m + " km/h";

        document.getElementById("condition").innerText =
            getCondition(current.weather_code);

    } catch (error) {
        alert("Weather data load nahi ho saka!");
        console.error(error);
    }
}

function getCondition(code) {
    if (code === 0) return "Clear Sky ☀️";
    if ([1, 2, 3].includes(code)) return "Partly Cloudy ☁️";
    if ([45, 48].includes(code)) return "Foggy 🌫️";
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "Rainy 🌧️";
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "Snowy ❄️";
    if ([95, 96, 99].includes(code)) return "Thunderstorm ⛈️";

    return "Weather Unavailable";
}
