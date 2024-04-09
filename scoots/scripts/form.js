const check = document.querySelector("#chk-term");
const errorMessage = document.querySelector("#form-error");
const form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    if (!check.checked){
        e.preventDefault();
        errorMessage.style.display = "block";
        document.querySelector(".label-agreement").style.textDecoration = "underline";
        document.querySelector(".label-agreement").focus();
    }
    else{
    e.currentTarget.dispatchEvent();
    }
});