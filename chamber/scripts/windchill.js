function windchill (temp = 50, wind = 4){
    /***Calculates windchill factor and returns wind chill temperature. 
     * @Requires
     * @param temp: temperature in Fahrenheit
     * @param wind: windspeed ****/
    
    chillFactor = "NA";

    //verifying parameters meets specification limits for calculating wind chill
    if (temp <= 50 && wind > 3.1){
        
        chillFactor = 35.74 + (0.6215*temp) - 35.75*(wind**0.16) + (0.4275*temp*wind**0.16);

        chillFactor = Math.round(chillFactor);

        document.querySelector("#wchill").innerText = `Chill: ${chillFactor}`;

    }
    document.querySelector("#wchill").innerText = `Chill: NA`;
}

windchill();