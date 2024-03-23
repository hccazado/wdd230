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
    const vipMembers = businesses.members.filter(business =>{
        if(business.membership == "gold" || business.membership == "silver"){
            return business;
        }
    });

    let i = 0;
    let randomMembers = [];

    while (i<=2){
        let random = Math.floor(Math.random()*vipMembers.length);
        if(!randomMembers.includes(random)){
            randomMembers.push(random);
            i++;
        }
    }

    affiliated.innerHTML = "";

    randomMembers.forEach(business=>{
        affiliated.innerHTML+=`
        <li>
        <h3>${vipMembers[business].name}</h3>
        <span>${vipMembers[business].address}</span>
        <span><a href="tel:${vipMembers[business].phone}">${vipMembers[business].phone}</a></span>
        </li>
        `;
        
    })
}

getBusinessesData();