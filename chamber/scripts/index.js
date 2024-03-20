const affiliated = document.querySelector("#affiliated");

async function getBusinessesData(){

    const url = "https://hccazado.github.io/wdd230/chamber/data/members.json"

    try{
        const response = await fetch(url);

        if(response.ok){
            const result = await response.json();
            displayBusiness(result);
        }
        else{
            throw error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}


function displayBusiness(businesses){
    const gold = businesses.members.filter(business =>{
        if(business.membership == "gold"){
            return business;
        }
    });

    affiliated.innerHTML = "";

    gold.forEach(member=>{
        affiliated.innerHTML+=`
        <li>
        <h3>${member.name}</h3>
        <span>${member.address}</span>
        <span><a href="tel:${member.phone}">${member.phone}</a></span>
        </li>
        `;
        
    })
}

getBusinessesData();