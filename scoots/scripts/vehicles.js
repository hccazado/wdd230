const vehiclesUrl = "https://hccazado.github.io/wdd230/scoots/data/vehicles.json";
const vrData = document.querySelector("#vr-table-data");

async function fetchVehicles(){
    const response = await fetch(vehiclesUrl);
    try{
        if(response.ok){
            const result = await response.json();
            vehiclesTable(result);
        }
        else{
            throw Error(await response.text());
        }
    }catch (error){
        console.log(error);
    }
}

function vehiclesTable(data){

    let imagesLine = document.createElement("tr");
    let namesLine = document.createElement("tr");
    let capcacityLine = document.createElement("tr");
    let reserveHalfLine = document.createElement("tr");
    let reserveFullLine = document.createElement("tr");
    let walkinHalfLine = document.createElement("tr");
    let walkinFullLine = document.createElement("tr");
    
    function image(){
        let image = document.createElement("td");
        image.innerText = "Image";
        imagesLine.append(image);

        data.scooters.forEach(vehicle =>{
            let td = document.createElement("td");
            let img = document.createElement("img");
            img.setAttribute("src", `images/${vehicle.img}`);
            img.setAttribute("alt", `${vehicle.name} picture`);
            td.appendChild(img)
            imagesLine.append(td);
        });
        data.atvs.forEach(vehicle =>{
            let td = document.createElement("td");
            let img = document.createElement("img");
            img.setAttribute("src", `images/${vehicle.img}`);
            img.setAttribute("alt", `${vehicle.name} picture`);
            td.appendChild(img)
            imagesLine.append(td);
        });
        data.jeeps.forEach(vehicle =>{
            let td = document.createElement("td");
            let img = document.createElement("img");
            img.setAttribute("src", `images/${vehicle.img}`);
            img.setAttribute("alt", `${vehicle.name} picture`);
            td.appendChild(img)
            imagesLine.append(td);
        });
            
        vrData.appendChild(imagesLine);
    }

    function name(){
        let name = document.createElement("td");
        name.innerText = "Name";
        namesLine.append(name);
        data.scooters.forEach(vehicle =>{
            let td = document.createElement("td");
                td.innerHTML = vehicle.name;
                namesLine.append(td);
        });
        data.atvs.forEach(vehicle =>{
            let td = document.createElement("td");
                td.innerHTML = vehicle.name;
                namesLine.append(td);
        });
        data.jeeps.forEach(vehicle =>{
            let td = document.createElement("td");
                td.innerHTML = vehicle.name;
                namesLine.append(td);
        });
        vrData.appendChild(namesLine);
    }

    function capacity(){
        let cap = document.createElement("td");
        cap.innerText = "capacity";
        capcacityLine.append(cap);
        data.scooters.forEach(vehicle =>{
            let td = document.createElement("td");
            td.innerHTML = vehicle.capacity;
            capcacityLine.append(td);
        });
        data.atvs.forEach(vehicle =>{
            let td = document.createElement("td");
            td.innerHTML = vehicle.capacity;
            capcacityLine.append(td);
        });
        data.jeeps.forEach(vehicle =>{
            let td = document.createElement("td");
            td.innerHTML = vehicle.capacity;
            capcacityLine.append(td);
        });
        
        vrData.appendChild(capcacityLine);
    }

    function reserveHalf(){
        let price = document.createElement("td");
        price.innerText = "Reserve half-day(3h)";
        reserveHalfLine.appendChild(price);
        data.scooters.forEach(vehicle =>{
            let td = document.createElement("td");
            td.innerHTML =`${parseInt(vehicle.prices.reservation.halfDay).toFixed(2)}U$`;
            reserveHalfLine.appendChild(td);
        });
        data.atvs.forEach(vehicle =>{
            let td = document.createElement("td");
            td.innerHTML =`${parseInt(vehicle.prices.reservation.halfDay).toFixed(2)}U$`;
            reserveHalfLine.appendChild(td);
        });
        data.jeeps.forEach(vehicle =>{
            let td = document.createElement("td");
            td.innerHTML =`${parseInt(vehicle.prices.reservation.halfDay).toFixed(2)}U$`;
            reserveHalfLine.appendChild(td);
        });
        
        vrData.appendChild(reserveHalfLine);
    }

    function reserveFull(){
        let price = document.createElement("td");
        price.innerText = "Reserve full-day";
        reserveFullLine.appendChild(price);

        data.scooters.forEach(vehicle =>{
            let td = document.createElement("td");
            td.innerHTML = `${parseInt(vehicle.prices.reservation.fullDay).toFixed(2)}U$`;
            reserveFullLine.appendChild(td);
        });
        data.atvs.forEach(vehicle =>{
            let td = document.createElement("td");
            td.innerHTML = `${parseInt(vehicle.prices.reservation.fullDay).toFixed(2)}U$`;
            reserveFullLine.appendChild(td);
        });
        data.jeeps.forEach(vehicle =>{
            let td = document.createElement("td");
            td.innerHTML = `${parseInt(vehicle.prices.reservation.fullDay).toFixed(2)}U$`;
            reserveFullLine.appendChild(td);
        });
       
        vrData.appendChild(reserveFullLine);
    }

    function walkHalf(){
        let price = document.createElement("td");
        price.innerText = "Walk-In half-day(3h)";
        walkinHalfLine.appendChild(price);
        data.scooters.forEach(vehicle =>{
            let td = document.createElement("td");
            td.innerHTML = `${parseInt(vehicle.prices.walkin.halfDay).toFixed(2)}U$`;
            walkinHalfLine.appendChild(td);
        });
        data.atvs.forEach(vehicle =>{
            let td = document.createElement("td");
            td.innerHTML = `${parseInt(vehicle.prices.walkin.halfDay).toFixed(2)}U$`;
            walkinHalfLine.appendChild(td);
        });
        data.jeeps.forEach(vehicle =>{
            let td = document.createElement("td");
            td.innerHTML = `${parseInt(vehicle.prices.walkin.halfDay).toFixed(2)}U$`;
            walkinHalfLine.appendChild(td);
        });

        vrData.appendChild(walkinHalfLine);
    }

    function walkFull(){
        let price = document.createElement("td");
        price.innerText = "Walk-In full-day";
        walkinFullLine.appendChild(price);
        data.scooters.forEach(vehicle =>{
            let td = document.createElement("td");
            td.innerHTML = `${parseInt(vehicle.prices.walkin.fullDay).toFixed(2)}U$`;
            walkinFullLine.appendChild(td);
        });
        data.atvs.forEach(vehicle =>{
            let td = document.createElement("td");
            td.innerHTML = `${parseInt(vehicle.prices.walkin.fullDay).toFixed(2)}U$`;
            walkinFullLine.appendChild(td);
        });
        data.jeeps.forEach(vehicle =>{
            let td = document.createElement("td");
            td.innerHTML = `${parseInt(vehicle.prices.walkin.fullDay).toFixed(2)}U$`;
            walkinFullLine.appendChild(td);
        });

        vrData.appendChild(walkinFullLine);
    }

    image();
    name();
    capacity();
    reserveHalf();
    reserveFull();
    walkHalf();
    walkFull();
}

fetchVehicles();