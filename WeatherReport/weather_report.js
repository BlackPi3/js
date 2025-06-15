function showWeatherDetails(event) {
    debugger;
    event.preventDefault();

    const lat = document.getElementById("cityLat").value;
    const lon = document.getElementById("cityLon").value;
    const apiKey = "1e907919d4584f1eedb826d1f1f4da80";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `<p>failed to get weather: ${error}</p>`;
        });
}

document.getElementById("weatherForm").addEventListener("submit", showWeatherDetails);