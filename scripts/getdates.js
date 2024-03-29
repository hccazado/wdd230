const options = {"day":"numeric", "month":"short", "year":"numeric"};
let currentDate = new Date().toLocaleDateString("en-US", options);

const ctdate = document.querySelector("#ct-date");

if (ctdate){
    ctdate.innerHTML = currentDate;
}

document.querySelector("#ct-year").innerHTML = new Date().toLocaleDateString("en-US", {"year":"numeric"});

document.querySelector("#lastModified").innerHTML = `Last Modified: ${document.lastModified}`;