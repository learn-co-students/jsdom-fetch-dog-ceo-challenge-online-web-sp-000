console.log('%c HI', 'color: firebrick')



const breeds = []

function fetchDogs() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderDogs(json));
};

const imageContainer = document.querySelector('#dog-image-container')

function renderDogs(json) {
    const images = json.message;
    for (const element of images) {
        let img = document.createElement('img');
        img.src = element;
        imageContainer.appendChild(img);
    }
};

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
};

const breedContainer = document.querySelector('#dog-breeds');

function renderBreeds(json) {
    const breeds = json.message;
    for (const key in breeds) {
        let li = document.createElement('li');
        li.textContent = key;
        breeds.push(key)
        li.id = "breed"
        breedContainer.appendChild(li);
        li.addEventListener('click', function(event) {
            event.target.style.color = "#FF69B4";
        })
    }
};


document.addEventListener("DOMContentLoaded", function() {

    fetchDogs();
    fetchBreeds();

});