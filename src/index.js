console.log('%c HI', 'color: firebrick')

let imgData = "";
let breedDataRaw = "";

//loading DOM and firing functions
document.addEventListener('DOMContentLoaded', function (event) {
    imgFunction();
    breedFunction();
});

// function to load images
function imgFunction() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(resp => resp.json())
        .then(json =>  {
            imgData = json
            imgData.message.forEach(image => addImage(image))
            console.log(imgData)
        });
}

// adding images to the area/page
function addImage(image) {
    let imgArea = document.getElementById('dog-image-container')
    let displayImg = document.createElement('img')
    imgArea.appendChild(displayImg)
    displayImg.src = image
}

// function to load breed data
function breedFunction() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(json => {
            breedDataRaw = json
            breedKeys = Object.keys(json.message)
            createList(breedKeys)
            console.log(breedDataRaw)
        });
}

// add breeds to ul
function createList(breeds) {
    let ul = document.querySelector('#dog-breeds')
    breeds.forEach(breed => addBreed(breed));
}

function addBreed(breed) {
    let ulArea = document.getElementById('dog-breeds')
    let displayBreeds = document.createElement('li')
    ulArea.appendChild(displayBreeds)
    displayBreeds.innerText = breed
}