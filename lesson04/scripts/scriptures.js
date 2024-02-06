const btnAdd = document.querySelector("#add_scripture");
const input = document.querySelector("#ipt_scripture");
const scripturesList = document.querySelector("#scriptures");

btn_add.addEventListener("click", ()=>{
    const rmvButton = document.createElement("button");
    
    const liItem = document.createElement("li");
    
    rmvButton.textContent = "remove";
    rmvButton.classList.toggle("rmvbtn");
    rmvButton.addEventListener("click", ()=>{
        scripturesList.removeChild(liItem);
    })
    
    liItem.textContent = input.value;

    liItem.appendChild(rmvButton);

    scripturesList.appendChild(liItem);
});