function showWeatherDetails(event) {
    event.preventDefault();

    const lat = document.getElementById("cityLat").value;
    const lon = document.getElementById("cityLon").value;
    const apiKey = "1e907919d4584f1eedb826d1f1f4da80";
    const part = "minutely";
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={apiKey}`;
}