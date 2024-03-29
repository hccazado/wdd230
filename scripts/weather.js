const url = "https://api.openweathermap.org/data/2.5/weather?lon=-18.94&lat=-47.00&units=imperial&appid=d3073afe388cc183a5167cc059a2173a"

const temp = document.querySelector("#ct-temp");
const icon = document.querySelector("#wt-icon");
const desc = document.querySelector("#wt-desc");

async function fetchWeather(){
    try{
        const response = await fetch(url);

        if(response.ok){
            const result = await response.json();
            displayWeather(result);
        } else{
            throw (await response.error());
        }
    }catch(error) {
        console.log(error);
    }
}

function displayWeather(data){
    temp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    icon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    icon.setAttribute("alt", `Weather icon: ${data.weather[0].description}`);
    desc.innerText = data.weather[0].description;
    desc.style.textTransform = "capitalize";
}

fetchWeather();