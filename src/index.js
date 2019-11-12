let breeds = [];


//dom loaded
document.addEventListener('DOMContentLoaded', function () {
  loadImages();
  loadBreedOptions();
});


//images loading
function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(res=> res.json())
    .then(results => {
      results.message.forEach(image => addImage(image))
    });
}


//helper method to create an img tag
function addImage(dogPic) {
  let imgContainer = document.querySelector('#dog-image-container');
  let newImg = document.createElement('img');
  newImg.src = dogPic;
  imgContainer.appendChild(newImg);
}


//fetching breeds url
function loadBreedOptions() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(res => res.json())
    .then(results => {
      breeds = Object.keys(results.message);
      makeList(breeds);
      addBreedSelectListener();
    });
}

//adding li element
function makeList(breeds) {
  let ul = document.querySelector('#dog-breeds');
  removeChild(ul);
  breeds.forEach(breed => addBreed(breed));
}

function removeChild(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}
 
//filtering by letter
function selectBreedsStartingWith(letter) {
  makeList(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectListener() {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', function (event) {
    selectBreedsStartingWith(event.target.value);
  });
}

function addBreed(breed) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  ul.appendChild(li);
  li.addEventListener('click', updateColor);
}

function updateColor(event) {
  event.target.style.color = 'blue';
}