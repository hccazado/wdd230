const btn = document.querySelector("#menuBtn");
const menu = document.querySelector("#navbar");

btn.addEventListener("click", ()=>{
    menu.classList.toggle("show");
})
