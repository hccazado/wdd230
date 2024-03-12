//document elements
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.77&lon=6.66&units=imperial&appid=d3073afe388cc183a5167cc059a2173a";

async function apiFetch(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            displayResults(data);
        } else{
            throw Error(await response.text());
        }
    } catch(error) {
        console.log(error);
    }
}

function displayResults(data){
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    if(data.weather.length == 1){
        weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        weatherIcon.setAttribute("alt", data.weather[0].description);
        captionDesc.textContent = data.weather[0].description;
        captionDesc.style.textTransform = "capitalize";
    }
    else{
        data.weather.forEach(event =>{
            let section = document.createElement("section");
            section.innerHTML = `
                <h2>Weather Event ${event.description}</h2>
                <figure>
                <img src="httpsopenweathermap.org/img/wn/${event.icon}@2x.png" alt="${event.description}">
                <figcaption>${event.description}</figcaption>
                </figure>
                `;
        })
        
    }
}

apiFetch();