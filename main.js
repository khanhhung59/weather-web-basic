const apiKey = "dcfe2a2201953ec0aeae371ca810232a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather_Icon = document.querySelector(".weather-icon");


async function checkWeather(city) {

    const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);
    const data = await response.json();


    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }
    else{
        //bỏ code dòng dưới vào
    }

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "*c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
       weather_Icon.src = "weather-app-img/images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
       weather_Icon.src = "weather-app-img/images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weather_Icon.src = "weather-app-img/images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weather_Icon.src = "weather-app-img/images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weather_Icon.src = "weather-app-img/images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

checkWeather("Bangalore");