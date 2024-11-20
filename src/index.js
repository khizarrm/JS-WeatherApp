import "./styles.css";
import { mainData } from "./mainData.js";

const WEATHER_API = 'H6L4L7VQEJFEFWNSMXPF2FG6D';
const res = document.getElementById('result');
async function getWeather(city){
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?key=${WEATHER_API}`;
    const data = await fetch(url, {
        mode : 'cors'
    })
    res.innerHTML = "Loading...";
    const info = await data.json();
    return info;
}

const form = document.getElementById('city');
form.addEventListener('submit', async (event)=>{
    event.preventDefault();
    const city = document.getElementById('city-name').value; 
    const info = await getWeather(city);
    const place = info.resolvedAddress; 
    mainData(info);
    res.innerHTML = place;
    form.reset();
})

