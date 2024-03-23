const modeBtn = document.querySelector("#mode");
const body = document.querySelector("body");
const actions = document.querySelector(".actions");
const weather = document.querySelector("#wt-container");

modeBtn.addEventListener("click", () =>{
    if(modeBtn.textContent.includes("🌘")){
        body.style.backgroundColor = "#111";
        body.style.color = "#EEE5E9";
        weather.style.color = "#000";
        actions.style.backgroundColor = "#374067";
        modeBtn.textContent = "😎";
    }
    else{
        body.style.backgroundColor = "#FFF";
        body.style.color = "#000";
        actions.style.backgroundColor = "#35A7FF";
        modeBtn.textContent = "🌘";
    }
});