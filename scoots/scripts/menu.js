const btn = document.querySelector("#menuBtn");
const menu = document.querySelector("#navbar");
const navLinks = document.querySelectorAll(".nav-link");
const bannerBtn = document.querySelector("#banner-btn");

btn.addEventListener("click", ()=>{
    menu.classList.toggle("show");
});

if(bannerBtn){
    bannerBtn.addEventListener("click", ()=>{
        document.querySelector("#wt-max-temp").style.display = "none";
    });
}

function highlightLink(){
    navLinks.forEach(link=>{
        if(document.location.pathname == link.pathname){
            link.classList.toggle("active");
        }
    });
}

highlightLink();