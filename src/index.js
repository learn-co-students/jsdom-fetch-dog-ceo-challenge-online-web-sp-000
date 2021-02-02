console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    fetchImages();
    fetchBreeds();
    document.getElementById('breed-dropdown').addEventListener("change", filterBreed);
});


function fetchImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => json['message'].forEach(image => renderImages(image)))
}

function renderImages(image) {
     const imageContainer = document.querySelector('#dog-image-container')
     let img = document.createElement('img');
     img.src = image;
     imageContainer.appendChild(img);
}

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => {
        const breeds = Object.keys(json['message'])
        allBreeds.push(...breeds)
        breeds.forEach(breed => renderBreeds(breed))
    })
}

const allBreeds = [];
const filteredBreeds = [];
let count = 0;

function renderBreeds(breed) {
     const ul = document.querySelector('ul#dog-breeds')
     let li = document.createElement('li');
     li.innerHTML = breed;
     ul.appendChild(li);
     li.id = count;
     count++;
     li.addEventListener("click", changeColor)
}

function changeColor(event) {
    event.target.style.color = "purple";
}


function filterBreed() {
    console.log("here")
    const ul = document.querySelector('ul#dog-breeds')
    ul.innerHTML = " "
    const dropDown = document.getElementById('breed-dropdown')
    const filter = dropDown.value
    console.log(dropDown.value)
    allBreeds.filter(b => b.startsWith(filter)).forEach(b => renderBreeds(b))
}



// document.querySelector('ul#dog-breeds li').innerHTML
// aff.startsWith("a");


  