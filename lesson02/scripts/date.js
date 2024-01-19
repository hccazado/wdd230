document.querySelector("#date").innerText = new Date().toLocaleDateString("en-US", {"year":"numeric"});

document.querySelector("#last-mod").innerText =`Last update: ${document.lastModified}`;