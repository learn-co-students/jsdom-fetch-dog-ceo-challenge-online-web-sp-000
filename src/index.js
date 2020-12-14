  
console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let dogsAr = [];

document.addEventListener('DOMContentLoaded', function() {
    const breeds = document.getElementById("dog-breeds");
    const select = document.getElementById("breed-dropdown")
    select.addEventListener("change", function(event) {
        filterBreeds(event.target.value);
    });
    breeds.addEventListener("click", function(event){
        event.target.style.color = "pink";
        });
    fetchImages();
    fetchBreeds();
  });

function fetchImages() {
    fetch(imgUrl)
    .then(response => response.json())
    .then(json => renderImg(json.message));
}

function renderImg(images) {lab
    const imgDiv = document.getElementById("dog-image-container");
    images.forEach(image => {
        const imgTag = document.createElement("img")
        imgTag.src = image
        imgDiv.appendChild(imgTag)
    });
}

function fetchBreeds() {
    fetch(breedUrl)
    .then(response => response.json())
    .then(json => renderBreeds(json));
}

function renderBreeds(breeds) {
    const breedsUl = document.getElementById("dog-breeds");
    breedKeys = Object.keys(breeds.message)
    breedKeys.forEach(breed => {
        dogsAr.push(breed);
        const liTag = document.createElement("li")
        liTag.innerText = breed
        breedsUl.appendChild(liTag)
    });
}

function filterBreeds(letter) {
    const breedsUl = document.getElementById("dog-breeds");
    let child = breedsUl.lastElementChild;
    while (child) {
        breedsUl.removeChild(child);
        child = breedsUl.lastElementChild;
    };
    let filtered = dogsAr.filter(breed => breed.startsWith(letter));
    filtered.forEach(breed => {
        const liTag = document.createElement("li")
        liTag.innerText = breed
        breedsUl.appendChild(liTag)
    });
}