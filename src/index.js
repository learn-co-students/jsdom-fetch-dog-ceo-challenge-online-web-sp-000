console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener("DOMContentLoaded", function() {
    fetchDogs();
})

function fetchDogs() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
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

fetch dogBreeds() {
    
}