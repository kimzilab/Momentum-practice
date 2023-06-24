const API_KEY = "009cb1ebc8721ad245e78e7bc459543a";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            let emoji = "";
            switch (data.weather[0].main) {
                case "Thunderstorm":
                    emoji = "🌩️";
                    break;
                case "Drizzle":
                case "Rain":
                    emoji = "🌧️";
                    break;
                case "Snow":
                    emoji = "🌨️";
                    break;
                case "Clear":
                    emoji = "☀️";
                    break;
                case "Clouds":
                    emoji = "☁️";
                    break;
                default:
                    emoji = "💨";
                    break;
            }

            city.innerText = data.name;
            weather.innerText = `${emoji} ${data.main.temp}`;
        });
}
function onGeoError() {
    alert("😭 Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
