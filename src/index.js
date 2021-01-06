console.log('%c HI', 'color: firebrick')
const dogPics = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedElements = [];

function fetchExtended(url, callback) {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data));
}
function createImage(src) {
    let image = document.createElement("img")
    image.src = src;
    return image
}
function createBreedLi(breed) {
    let newItem = document.createElement("li");
    newItem.textContent = breed;
    return newItem
}

function addImages(data) {
    let container = document.getElementById('dog-image-container');
    for (const url of data.message) {container.appendChild(createImage(url))}
}
function addBreeds(data) {
    let container = document.getElementById("dog-breeds");
    for (const breed in data.message) {
        let newElement = createBreedLi(breed);
        newElement.addEventListener("click", () => {newElement.style.color = "blue"});
        container.appendChild(newElement);
    }
}

function filterBreeds(value) {
    let items = document.querySelectorAll('li');
    for (const li of items) {
        (li.textContent[0] !== value) ? li.style.display = "none" : li.style.display = "block";
    }
}



window.addEventListener('load', (e) => {
    fetchExtended(dogPics, addImages);
    fetchExtended(breedUrl, addBreeds);
    document.getElementById("breed-dropdown").addEventListener("change", (e) => {filterBreeds(e.target.value)});
});
