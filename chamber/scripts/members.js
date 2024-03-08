document.querySelector(".wf-container");

const membersURL = "https://hccazado.github.io/wdd230/chamber/data/members.json";

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
        let image = document.createElement("img");
        
        card.classList.toggle("member");

        name.innerText = member.name;
        phone.innerHTML = `<a href="tel:${member.phone}">${member.phone}</a>`;
        website.innerHTML = `<a href=${member.website} _target="_blank">${member.website}</a>`;
        image.innerHTML = `<img src=${member.image} loading="lazy alt="Picture from ${member.name}" width=450 height=350>` 

        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(image);
    });
}

getData(membersURL);