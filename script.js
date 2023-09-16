
const apiKey = "863242cfb2b1d35786093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "photos/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "photos/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "photos/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "photos/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "photos/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }


}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})