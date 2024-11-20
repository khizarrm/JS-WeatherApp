import "./styles.css";
import { greeting } from "./greeting.js";

const WEATHER_API = 'H6L4L7VQEJFEFWNSMXPF2FG6D';

async function getWeather(city){
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?key=${WEATHER_API}`;
    const data = await fetch(url, {
        mode : 'cors'
    })
    const info = await data.json();
    console.log(info.currentConditions.temp);
    return info.currentConditions.temp;
}

const form = document.getElementById('city');
form.addEventListener('submit', async (event)=>{
    event.preventDefault();
    const city = document.getElementById('city-name').value; 
    const res = document.getElementById('result');
    res.innerHTML = "The weather in " + city + " is " + Math.round(await getWeather(city) * (5/9)) + "\u00B0C";
    form.reset();
})
