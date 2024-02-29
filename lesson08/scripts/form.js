const range = document.querySelector("#rating");
const confirmPwd = document.querySelector("#confirmpwd");
const pwd = document.querySelector("#password");
const form = document.querySelector("#form");
const user = document.querySelector("#username");

document.querySelector("#rg_ot").innerText = range.value;

range.addEventListener("input", (e)=>{
    document.querySelector("#rg_ot").innerText = range.value;
});

confirmPwd.addEventListener("focusout", (e)=>{

    if(passwordCheck(pwd, confirmPwd)){
        pwd.style["border-bottom"] = "2px solid #54da53";
        confirmPwd.style["border-bottom"] = "2px solid #54da53";
    }

    else{
        pwd.style["border-bottom"] = "2px solid red";
        confirmPwd.style["border-bottom"] = "2px solid red";
    }
});

user.addEventListener("focusout", (e)=>{

    if(user.value){
        user.style["border-bottom"] = "2px solid #54da53";
    }

});

function passwordCheck(pwd1, pwd2){
    if(pwd1.value == pwd2.value){
        return true;
    }
    else{
        return false;
    }
}

form.addEventListener("submit", (e)=>{

    if(!passwordCheck(pwd, confirmPwd)){
        let message = document.querySelector("#message");
        e.preventDefault();
        message.innerText = "Password does not match!";
        message.style.display = "block";
        pwd.value="";
        confirmPwd.value="";
        pwd.focus();
    }
})

