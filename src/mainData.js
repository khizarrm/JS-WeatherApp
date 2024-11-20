import {getWeather} from './index.js';

async function mainData(info){
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const temp = Math.round((info.currentConditions.temp - 32) * (5/9)) + "\u00B0C";
    const conditions = info.currentConditions.conditions; 
    const icon = info.currentConditions.icon; 
    let mainData = document.getElementsByClassName('mainData')[0];

    const weatherIconMap = {
        'partly-cloudy-day': 'fas fa-cloud-sun',
        'partly-cloudy-night': 'fas fa-cloud-moon',
        'clear-day': 'fas fa-sun',
        'clear-night': 'fas fa-moon',
        'cloudy': 'fas fa-cloud',
        'rain': 'fas fa-cloud-rain',
        'snow': 'fas fa-snowflake',
        'fog': 'fas fa-smog',
        'wind': 'fas fa-wind',
        'thunder-rain': 'fas fa-bolt',
        'thunder-showers-day': 'fas fa-bolt',
        'thunder-showers-night': 'fas fa-bolt',
        'sleet': 'fas fa-cloud-meatball',
        'snow-showers-day': 'fas fa-snowflake',
        'snow-showers-night': 'fas fa-snowflake',
        'showers-day': 'fas fa-cloud-sun-rain',
        'showers-night': 'fas fa-cloud-moon-rain',
        'default': 'fas fa-cloud' // Default icon if condition not found
    };

    //modifying the html 
    if (!mainData){
        mainData = document.createElement('div');
        mainData.className = 'mainData';
    } 

    const text = 
    `<p>${today}, </p>
     <p>${temp}, </p>
     <i class="${weatherIconMap[icon]}"></i>
    `;

    mainData.innerHTML = text;
    const content = document.getElementsByClassName('content')[0];
    content.appendChild(mainData);
    console.log(today, temp, conditions, icon);
}

export {mainData};