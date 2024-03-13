const btn = document.querySelector("#banner-btn");
const banner = document.querySelector("#hp-banner");

btn.addEventListener("click", () =>{
    console.log("click")
    banner.style.display = "none";
})