const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector("#cards");

async function getProphetData(url){
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement("section");
        
        let fullName = document.createElement("h2");
        
        let portrait = document.createElement("img");

        let dob = document.createElement("p");

        let birthplace = document.createElement("p");
        
        fullName.innerText = `${prophet.lastname}, ${prophet.name}`;

        portrait.setAttribute("src", prophet.imageurl);
        
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);

        portrait.setAttribute("loading", "lazy");

        portrait.setAttribute("width", "240");
        
        portrait.setAttribute("height", "300");

        dob.innerText = `Birthday: ${prophet.birthdate}`;

        birthplace.innerText = `Place of Birth: ${prophet.birthplace}`;

        card.appendChild(fullName);

        card.appendChild(birthplace);

        card.appendChild(dob);

        card.appendChild(portrait);

        cards.appendChild(card);

    });
}

getProphetData(url);