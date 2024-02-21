let visits = loadVisits() || 0;

let span = document.querySelector("#ct-visits").textContent =  displayVisits();

function displayVisits(){ 
    
    if (visits == 0) {
        visits = 1;
        setVisits();
        return "It's your first time here!";
    }
    else{
        visits += 1;
        setVisits();
        return visits
    }
}

function loadVisits(){
    return parseInt(JSON.parse(localStorage.getItem("visits")));
}

function setVisits(){
    localStorage.setItem("visits", visits);
}