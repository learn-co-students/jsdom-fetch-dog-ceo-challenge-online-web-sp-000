console.log('%c HI', 'color: firebrick')

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
  event.target.style.color = "red";
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function updateBreedList(breeds) {
  let ul = document.getElementById("dog-breeds");
  removeChildren(ul);
  breeds.forEach(breed => addBreed(breed));
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