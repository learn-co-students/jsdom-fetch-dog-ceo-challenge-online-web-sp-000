document.addEventListener('DOMContentLoaded', function () {
  loadImages();
  loadBreedOptions();
});

function loadImages() {
  const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';

  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => {
      json.message.forEach(image => addImage(image));
    });
}

function addImage(image) {
  const container = document.getElementById('dog-image-container');
  
  const newImage = document.createElement('img');
  newImage.src = image;
  container.appendChild(newImage);
}

let breeds = [];

function loadBreedOptions() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';

  fetch(breedUrl)
    .then(resp => resp.json())
    .then(resp => {
      breeds = Object.keys(resp.message);
      updateBreedList(breeds);
      addBreedSelectListener();
    });
}

function updateBreedList(breeds) {
  let ul = document.getElementById('dog-breeds');
  removeChildren(ul);
  breeds.forEach(breed => addBreed(breed));
}

function removeChildren(element) {
  let child = element.lastElementChild;
  
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function addBreedSelectListener() {
  let breedDropdown = document.getElementById('breed-dropdown');
  
  breedDropdown.addEventListener('change', function (e) {
    selectBreedsStartingWith(e.target.value);
  });
}

function selectBreedsStartingWith(letter) {
  updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreed(breed) {
  const ul = document.getElementById('dog-breeds');
  
  const li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  ul.appendChild(li);
  
  li.addEventListener('click', updateColor);
}

function updateColor(e) {
  e.target.style.color = 'palevioletred';
}