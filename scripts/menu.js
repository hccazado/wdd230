const hmbBtn = document.querySelector(".hmbBtn");
const navBar = document.querySelector(".navBar");

hmbBtn.addEventListener("click", (e)=>{
    hmbBtn.classList.toggle("show");
    navBar.classList.toggle("show");
});