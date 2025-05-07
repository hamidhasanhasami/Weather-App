const api_key = "ccc61eadc5a94dc7aef80316252901";
const base_url = "http://api.weatherapi.com/v1/current.json";

var input_box = document.querySelector(".input-box");
var searchbtn = document.querySelector(".searchbtn");
var weather_img = document.querySelector(".weather-img");
var temparature = document.querySelector(".temperature span");
var description = document.querySelector(".description span");
var humidity_element = document.querySelector("#humidity span");
var wind_speed = document.querySelector("#wind-speed span");

async function checkweather(e, city){
    e.preventDefault();
    fetch(`${base_url}?key=${api_key}&q=${city}`).then(res => res.json()).then(data => {
        const { humidity, temp_c, wind_kph } = data.current;
        const { text } = data.current.condition;

        temparature.textContent = temp_c;
        description.textContent = text;
        humidity_element.textContent = humidity;
        wind_speed.textContent = wind_kph;
    });

}

document.querySelector("form").addEventListener("submit", (e) => checkweather(e, input_box.value))