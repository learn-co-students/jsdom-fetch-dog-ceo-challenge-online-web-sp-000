console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
    addBreedSelectListener();
});

function fetchImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(results => { results.message.forEach(image => insertImages(image))});
}

function insertImages(image){
    const images = document.getElementById("dog-image-container");
    const img = document.createElement('img');
    img.src = image;
    images.appendChild(img);
}
let breeds = [];

function fetchBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(results => {
        breeds = Object.keys(results.message);
        breeds.forEach(breed => insertBreeds(breed))});
}

function insertBreeds(breed){
    const breedList = document.getElementById("dog-breeds");
    let dog = document.createElement("li");
    dog.innerText = breed;
    breedList.appendChild(dog);
    dog.addEventListener("click", changeColor)
}

function changeColor(event) {
    event.target.style.color = "red";
}

function updateBreedList(breeds) {
    let ul = document.getElementById("dog-breeds");
    removeChildren(ul);
    breeds.forEach(breed => insertBreeds(breed));
}
  
function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}
  
function addBreedSelectListener() {
    let breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
}


