console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    fetchImages();
    fetchBreeds()
})

function fetchImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(images => {
        images.message.forEach(image => appendImages(image))
    });
}

function appendImages(links){
    const container = document.querySelector("#dog-image-container");
    const dogImage = document.createElement("img");
    dogImage.src = links;
    container.appendChild(dogImage);
}

function fetchBreeds(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(breeds => {
        breeds.message.forEach(breed => appendBreeds(breed))
    });
}

function appendBreeds(breed){
    const container = document.querySelector('#dog-breeds');
    const dogBreed = document.createElement("li");
    dogBreed.innerHTML = breed 
    container.appendChild(dogBreed);
}