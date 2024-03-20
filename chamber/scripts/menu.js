const hmbBtn = document.querySelector("#hmbbtn");
const navBar = document.querySelector(".navlist");
const navLinks = document.querySelectorAll(".nav-link");

hmbBtn.addEventListener('click', ()=>{
    navBar.classList.toggle('show');
    hmbBtn.classList.toggle('show');
});

function highlightLink(){
    navLinks.forEach(link=>{
        if(document.location.pathname == link.pathname){
            link.classList.toggle("active");
        }
    });
}

highlightLink();