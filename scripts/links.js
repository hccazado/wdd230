const baseURL = "https://hccazado.github.io/wdd230/";

const linksURL = "https://hccazado.github.io/wdd230/data/links.json";

const lessonsUl = document.querySelector("#lessons");

async function getLinks(url){
    //fetching lessons data from url
    const response = await fetch(url);
    //parsing response to json and calling function to displayLinks
    const result = await response.json();
    displayLinks(result.lessons);
}

function displayLinks(lessons){
    //iterating through activities list and concatenating each week activity
    //for each week lesson a new li element is created
    lessons.forEach(lesson => {
        let liItem = document.createElement("li");

        liItem.innerHTML = `Week ${lesson.lesson}: `;

        for (let i = 0; i < lesson.links.length; i++) {

            liItem.innerHTML += `<a href=${lesson.links[i].url}>${lesson.links[i].title}</a> | `;
        }
        
        lessonsUl.append(liItem);
    });
}

getLinks(linksURL);