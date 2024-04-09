const weatherUrl="https://api.openweathermap.org/data/2.5/forecast?lat=20.425520&lon=-87.0284&units=imperial&appid=d3073afe388cc183a5167cc059a2173a";

async function fetchWeather(){
    try{
        const response = await fetch(weatherUrl);
        const result = await response.json();
        if (response.ok){
            displayWeather(result);
        }
        else{
            throw Error( await result.text());
        }
    }
    catch (error){
        console.log(error);
    }
}

function displayWeather(resultSet){
 
    const temp = document.querySelector("#wt-temp");
    const hum = document.querySelector("#wt-hum");
    const icon = document.querySelector("#wt-icon");
    const fcTemp = document.querySelector("#fc-temp");
    const maxTemp = document.querySelector("#max-temp");
    
    const ctDate = new Date(Date.now());
    const ctDay = ctDate.getDay();
    
    icon.setAttribute("alt", `${resultSet.list[0].weather.description} icon`);
    icon.setAttribute("src",`https://openweathermap.org/img/wn/${resultSet.list[0].weather[0].icon}.png`); 
    temp.innerHTML = `Temperature: <strong>${resultSet.list[0].main.temp}&degF</strong>`;
    hum.innerHTML = `Humidity: <strong>${resultSet.list[0].main.humidity}%</strong>`;
    
    if(document.location.pathname == "index"){
        maxTemp.innerHTML = `${Math.round(resultSet.list[0].main.temp_max)}&deg;F`;
    }

    resultSet.list.forEach(forecast => {

       let fcDate = new Date(forecast.dt_txt);
       let fcDay = fcDate.getDay();
       let fcHour = fcDate.getHours();

       if(fcDay == ctDay + 1 && fcHour == 15){
        fcTemp.innerHTML = `Temperature: <strong>${(forecast.main.temp).toFixed(0)}&degF</strong>`;
       }
    }); 
}

fetchWeather();