const baseURL = "https://hccazado.github.io/wdd230/";
const linksURL = "https://hccazado.github.io/wdd230/data/links.json";

async function getLinks(url){
    const response = await fetch(url);
    const links = response.json();
    console.log(links);
}

getLinks(linksURL);