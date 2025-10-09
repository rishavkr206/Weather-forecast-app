// Replace this with your actual API key from OpenWeatherMap
const apiKey = "cb75f1ad2fbe3ad1ebdcb79a2b997973";

document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value.trim();
    if(city) getWeather(city);
    else document.getElementById('weatherResult').textContent = "Please enter a city name.";
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    document.getElementById('weatherResult').innerHTML = "Loading...";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.cod === 200){
                const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                const result = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <img src="${weatherIcon}" alt="${data.weather[0].description}" style="width:70px;height:70px;">
                    <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                    <p><strong>Condition:</strong> ${data.weather[0].description}</p>
                    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                `;
                document.getElementById('weatherResult').innerHTML = result;
            } else {
                document.getElementById('weatherResult').textContent = "City not found. Please try again.";
            }
        })
        .catch(error => {
            document.getElementById('weatherResult').textContent = "Error fetching data.";
        });
}

// Optional: Allow Enter key for search
document.getElementById('cityInput').addEventListener('keyup', function(event) {
    if(event.key === "Enter") {
        document.getElementById('searchBtn').click();
    }
});
