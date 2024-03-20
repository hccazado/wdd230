const url = "https://api.openweathermap.org/data/2.5/forecast?lat=-32.9468&lon=-60.6393&units=imperial&appid=114c50b10d3b5b49806965727c247f57";

const wticon = document.querySelector("#wt-icon");
const wttemp = document.querySelector("#wt-temp")
const wtdesc = document.querySelector("#wt-desc");
const wtforecast = document.querySelector("#wt-forecast");

async function fetchApi(){
    try{
        const response = await fetch(url);
        
        if(response.ok){
            
            const result = await response.json();
            
            displayWeather(result);
            
            displayForecast(result);
            
            windchill(result);
        }
        else{
            throw Error( await response.text());
        }

    } catch(error){
        console.log(error);
    }
}

function displayWeather(data){
    
    wttemp.innerHTML = `${Math.round(data.list[0].main.temp)}&deg;F`;
    
    wticon.setAttribute("src", `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`);
    
    wticon.setAttribute("alt", data.list[0].weather[0].description);
    
    wtdesc.innerText = data.list[0].weather[0].description;
    
    wtdesc.style.textTransform = "capitalize";
}

function displayForecast(data){
    
    let currentDate = new Date(Date.now());
    
    let nextday = 1;
    
    for(let i = 1; i < data.list.length; i++){
        
        let forecastDt = new Date(data.list[i].dt_txt);
        
        if(forecastDt.getDate() == currentDate.getDate()+nextday && forecastDt.getHours() == 9 && nextday <= 3){
            let div = document.createElement("div");
            
            let spanDt = document.createElement("span");
            
            let spanTmp = document.createElement("span");
            
            let img = document.createElement("img");

            spanTmp.innerHTML = `${forecastDt.getMonth()}/${forecastDt.getDate()}`;
            
            spanDt.innerHTML = `${Math.round(data.list[i].main.temp)}&deg;F`;

            img.setAttribute("src", `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`);
            
            img.setAttribute("alt", data.list[i].weather[0].description);

            div.appendChild(spanTmp);

            div.appendChild(spanDt);
            
            div.appendChild(img)
            
            wtforecast.appendChild(div);

            nextday++;
        }
    }
}


function windchill (data){
    //Calculates windchill factor and returns wind chill temperature. 
    
    const temp = data.list[0].main.temp;
    const wind = data.list[0].wind.speed;
    const chillFactor = "";

    //verifying parameters meets specification limits for calculating wind chill
    if (temp <= 50 && wind > 3.1){
        
        chillFactor = 35.74 + (0.6215*temp) - 35.75*(wind**0.16) + (0.4275*temp*wind**0.16);

        chillFactor = Math.round(chillFactor);

        document.querySelector("#wt-chill").innerText = `Chill: ${chillFactor}`;

    }
    else{
        document.querySelector("#wt-chill").innerText = `Chill: NA`;
    }
}

fetchApi();
