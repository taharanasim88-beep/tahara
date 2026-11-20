// ==============================
// Weather App JavaScript
// ==============================


// Select HTML elements

const cityInput = document.getElementById("cityInput");

const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");

const temperature = document.getElementById("temperature");

const condition = document.getElementById("condition");

const humidity = document.getElementById("humidity");

const wind = document.getElementById("wind");

const feelsLike = document.getElementById("feelsLike");

const weatherIcon = document.getElementById("weatherIcon");

const dateElement = document.getElementById("date");



// ==============================
// Current Date
// ==============================

function showDate() {

    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    dateElement.textContent =
        today.toLocaleDateString("en-US", options);
}


showDate();



// ==============================
// Search Button
// ==============================

searchBtn.addEventListener("click", searchWeather);



// Allow Enter key
// ==============================

cityInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        searchWeather();

    }

});



// ==============================
// Search Weather Function
// ==============================

function searchWeather() {

    const city = cityInput.value.trim();


    if (city === "") {

        alert("Please enter a city name.");

        return;

    }


    // Temporary demo data
    // Real API will be added later

    cityName.textContent = city;

    temperature.textContent = "28°";

    condition.textContent = "Sunny";

    humidity.textContent = "65%";

    wind.textContent = "12 km/h";

    feelsLike.textContent = "30°";

    weatherIcon.textContent = "☀️";

}