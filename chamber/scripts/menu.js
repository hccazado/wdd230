const hmbBtn = document.querySelector("#hmbbtn");
const navBar = document.querySelector(".navlist");

hmbBtn.addEventListener('click', ()=>{
    navBar.classList.toggle('show');
    hmbBtn.classList.toggle('show');
});