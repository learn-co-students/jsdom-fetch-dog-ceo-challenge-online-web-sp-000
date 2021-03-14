console.log('%c HI', 'color: firebrick')

const dogBreeds = document.querySelector("#dog-breeds")
const breedDropdown = document.querySelector("#breed-dropdown")

document.addEventListener('DOMContentLoaded', function() {
  loadImages();
  loadDogBreeds();
  addBreedSelectListener()
})

function loadImages() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(results => { results.message.forEach(image => addImage(image))});
}

function addImage(image) {
  let container = document.getElementById("dog-image-container");
  let newImg = document.createElement("img");
  newImg.src = image;
  container.appendChild(newImg);
}

let breeds = []
function loadDogBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(results => {
      breeds = Object.keys(results.message);
      breeds.forEach(breed => addBreed(breed))});
}

function addBreed(breed) {
  let breedUl = document.getElementById("dog-breeds");
  let newLi = document.createElement("li");
  newLi.innerText = breed;
  newLi.style.cursor = "pointer";
  breedUl.appendChild(newLi);
  newLi.addEventListener("click", changeColor)
}

function changeColor(event) {
  event.target.style.color = "yellow";
}