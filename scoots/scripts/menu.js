const btn = document.querySelector("#menuBtn");
const menu = document.querySelector("#navbar");
const navLinks = document.querySelectorAll(".nav-link");

btn.addEventListener("click", ()=>{
    menu.classList.toggle("show");
});

function highlightLink(){
    navLinks.forEach(link=>{
        if(document.location.pathname == link.pathname){
            link.classList.toggle("active");
        }
    });
}

highlightLink();