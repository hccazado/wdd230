const container = document.querySelector(".members-container");
const btView = document.querySelector("#bt-view");

const membersURL = "https://hccazado.github.io/wdd230/chamber/data/members.json";

btView.addEventListener("click", ()=>{
    if(btView.textContent == "📃"){
        container.classList.remove("view-grid");
        container.classList.add("view-list");
        btView.textContent = "⏹";
    }
    else{
        container.classList.add("view-grid");
        container.classList.remove("view-list");
        btView.textContent = "📃";
    }
});

async function getData(url){
    const response = await fetch(url);
    const result = await response.json();
    displayMembers(result.members);
}

function displayMembers(members){
    members.forEach(member => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let phone = document.createElement("p");
        let website = document.createElement("p");
        let address = document.createElement("p");
        let image = document.createElement("img");
        
        card.classList.toggle("member");

        name.innerText = member.name;
        
        if (member.phone == ""){
            phone.innerText = "Phone: N/A";
        }
        else{
            phone.innerHTML = `<a href="tel:${member.phone}">Phone: ${member.phone}</a>`;
        }

        if(member.website == ""){
            website.innerText = "Website: N/A"
        }
        else{
            website.innerHTML = `<a href=${member.website} _target="_blank">Website: ${member.name}</a>`;
        }

        if(member.address == ""){
            address.innerText = "Address: N/A"
        }
        else{
            address.innerHTML = `${member.address}`;
        }


        image.setAttribute("loading","lazy");
        image.setAttribute("alt",`Picture from ${member.name}`);
        image.setAttribute("src", `${member.image}`);

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(image);

        container.appendChild(card);
    });
}

getData(membersURL);