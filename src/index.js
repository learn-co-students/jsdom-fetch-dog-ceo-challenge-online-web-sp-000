const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', () => {
    fetchImages();
    fetchBreeds();
});

function fetchImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
        data.message.forEach(image => addImageElementsToDom(image))
    });
}

function addImageElementsToDom(newImgSrc) {
    const imageContainer = document.getElementById('dog-image-container');
    const createImageElement = document.createElement('img');
    createImageElement.src = newImgSrc;
    imageContainer.appendChild(createImageElement);
}

function fetchBreeds() {
    fetch(breedUrl)
        .then(resp => resp.json())
        //objectify to access keys
        .then(hash => {
            breeds = Object.keys(hash.message);
            listBreeds(breeds); 
            attachBreedSelector();
        });
}

function listBreeds(breeds) {
    let ul = document.getElementById('dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => makeLI(breed));
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
}

function makeLI(breed) {
    let ul = document.getElementById('dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    ul.appendChild(li);
    li.addEventListener('click', changeColor);
}

function changeColor() {
    event.target.style.color = 'grey';
}

function attachBreedSelector() {
    let dropDown = document.getElementById('breed-dropdown');
    dropDown.addEventListener('change', function (event) {
        startsWith(event.target.value);
    });
}

function startsWith(letter) {
    listBreeds(breeds.filter(breed => breed.startsWith(letter)));
}

