const submitBtn = document.querySelector("button");
const input = document.querySelector("#favchap");
const scripturesList = document.querySelector("#list");

let scriputresArray = loadScriptures() || [];

//displaying saved scriptures
scriputresArray.forEach(item => listScripture(item));

submitBtn.addEventListener("click", ()=>{

    let uinput = input.value;
    if(uinput != ""){

        scriputresArray.push(uinput);

        saveScriptures();

        listScripture(uinput);

        input.value = "";
        
        input.focus();
    }
    else{
        window.alert("You need to inform your favorite scripture!");
        
        input.focus();
    }
});

function listScripture (scripture){
    const removeBtn = document.createElement("button");
    const liItem = document.createElement("li");
    
    removeBtn.ariaLabel = `remove ${scripture}`;
    removeBtn.textContent = "X";
    removeBtn.classList.toggle("delete");
    
    removeBtn.addEventListener("click", ()=>{
        scripturesList.removeChild(liItem);
        removeScripture(scripture);
    });
    
    liItem.textContent = scripture;
    liItem.appendChild(removeBtn);
    scripturesList.appendChild(liItem);
}

function loadScriptures (){
    return JSON.parse(localStorage.getItem("scriputresArray"));
}

function saveScriptures(){
    localStorage.setItem("scriputresArray", JSON.stringify(scriputresArray));
}

function removeScripture(value){
    scriputresArray = scriputresArray.filter((item) => item != value );

    saveScriptures();
}