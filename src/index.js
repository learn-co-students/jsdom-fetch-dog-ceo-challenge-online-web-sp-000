console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//challenge #1
//fetch dog images
function dogImages() {
    return fetch(imgUrl).then(resp => resp.json()).then(json => addImages(json));
}

//insert dog images into id box
function addImages(json) {
    let docImages = document.getElementById("dog-image-container");
    json.message.forEach(image => {
        let newImage = document.createElement('img');
        newImage.src = image;
        docImages.appendChild(newImage);
    })
}

//challenge #2
//fetch dog breeds
function dogBreeds() {
    return fetch(breedUrl).then(resp => resp.json()).then(json => breedsArray(json));
}

//put breeds into array
let allBreeds = []

function breedsArray(json) {
    allBreeds = Object.keys(json.message)
    addBreeds(allBreeds);
}
//add breeds to ul
function addBreeds(breeds) {
    let dogBreeds = document.getElementById('dog-breeds');
    breeds.forEach(breed => {
        let newLi = document.createElement('li');
        newLi.textContent = breed;
        dogBreeds.appendChild(newLi);
        newLi.addEventListener('click', changeColor);
    })
}

//challenge #3
function changeColor(event) {
    event.target.style.color = 'red';
}

//challenger #4
let filterBreeds = [];

function dropdownFiltering() {
    const dropdownElem = document.getElementById('breed-dropdown');
    const dogBreeds = document.getElementById("dog-breeds");
    dropdownElem.addEventListener('change', function (){
      while (dogBreeds.firstChild) dogBreeds.removeChild(dogBreeds.firstChild);
      filterBreeds(this.value);
    })
  }
  

  function filterBreeds(letter) {
    filteredBreeds = [];
    filteredBreeds = allBreeds.filter(breed => breed[0] === letter);
    listBreeds(filteredBreeds);
  } 



document.addEventListener('DOMContentLoaded', function () {
    dogImages();
    dogBreeds();
})


