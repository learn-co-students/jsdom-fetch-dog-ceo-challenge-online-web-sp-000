console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'; 
let dropdown;

function getDogPics() {
    return fetch(imgUrl).then(resp => resp.json()).then(json => addImg(json));
}

function addImg(array) {
    let div = document.getElementById("dog-image-container");

    for (let i = 0; i < array["message"].length; i++) {
        let img = document.createElement('img');
        img.src = array["message"][i];
        div.appendChild(img);
    }
}

function getDogBreeds() {
    return fetch(breedUrl).then(resp => resp.json()).then(json => addBreeds(json));
}

function addBreeds(obj) {
    let ul = document.getElementById("dog-breeds");

    for (const key in obj["message"]) {
        let li = document.createElement("li");
        li.textContent = key;
        ul.appendChild(li);
    }
}

function getDropDown() {
    dropdown = document.getElementById("breed-dropdown");
    dropdown.addEventListener("change", filterLis);
}

function filterLis() {
    let lists = document.getElementsByTagName("li");
    for (const li of lists) {
        if (dropdown.value == li.innerText[0]) {
            li.hidden = false;
        } else {
            li.hidden = true;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => { getDogPics(); getDogBreeds(); getDropDown(); });

document.addEventListener("click", function(e) {
    if (e.target.nodeName === "LI") {
        e.target.style.color = "blue";
    }
});