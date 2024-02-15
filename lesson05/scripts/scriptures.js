const submitBtn = document.querySelector("button");
const input = document.querySelector("#favchap");
const scripturesList = document.querySelector("#list");

submitBtn.addEventListener("click", ()=>{

    if(input.value != ""){

        const removeBtn = document.createElement("button");
        const liItem = document.createElement("li");
        
        removeBtn.ariaLabel = `remove ${input.value}`;

        removeBtn.textContent = "X";

        removeBtn.classList.toggle("delete");
        
        removeBtn.addEventListener("click", ()=>{
            scripturesList.removeChild(liItem);
        });
        
        liItem.textContent = input.value;

        liItem.appendChild(removeBtn);

        scripturesList.appendChild(liItem);

        input.value = "";
        
        inputFocus();
    }
    else{
        window.alert("You need to inform your favorite scripture!");
        
        inputFocus();
    }
});

const inputFocus = () => {
    input.focus();
}