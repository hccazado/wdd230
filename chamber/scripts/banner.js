const btn = document.querySelector("#banner-btn");
const banner = document.querySelector("#hp-banner");

btn.addEventListener("click", () =>{
    banner.classList.remove("show");
    banner.classList.add("hide");
});

function displayBanner(){
    const currentDate = new Date(Date.now());
    const wDay = currentDate.getDay(); // Sunday - Saturday : 0 - 6
    const hour = currentDate.getHours();
    if(wDay == 1 || wDay == 2 || wDay == 3 && hour < 19){
        banner.classList.remove("hide");
        banner.classList.add("show");
    }
}

displayBanner();