console.log('%c HI', 'color: firebrick')

let breeds = [];


document.addEventListener("DOMContentLoaded", function() {
    fetchDogs();
    fetchDogBreeds();
})

function fetchDogs() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json));
}  

function renderImages(json) {
    const dogImageContainer = document.querySelector('#dog-image-container');
    Object.keys(json.message).forEach(dogImgKey => {
        const img = document.createElement('img');
        img.src = json.message[dogImgKey];
        img.alt = "Image of a dog";
        dogImageContainer.appendChild(img);
    })
}

function fetchDogBreeds() {
    const dogBreedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(dogBreedUrl)
    .then(resp => resp.json())
    .then(json => addDogBreeds(json));
}  

function addDogBreeds(json) {
    const dogBreedList = document.querySelector('#dog-breeds');
    breeds = Object.keys(json.message);
    console.log(breeds)
    
}