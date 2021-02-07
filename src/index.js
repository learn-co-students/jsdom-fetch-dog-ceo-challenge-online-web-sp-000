console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

const dogContainer = document.getElementById("dog-image-container");
const dogBreeds = document.getElementById("dog-breeds");

document.addEventListener("DOMContentLoaded", function() {
  fetchImages();
  fetchBreeds();
});

function fetchImages() {
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImages(json))
}

function renderImages(json) {
  json.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    dogContainer.appendChild(img);
  })
}

// function fetchImages() {
//   fetch(imgUrl)
//   .then(resp => resp.json())
//   .then(json => renderImages(json))
// }

// function renderImages(json) {
//   json.forEach(image => {
//     const img = document.createElement('img');
//     img.src = image;
//     dogContainer.appendChild(img);
//   })
// }

function fetchBreeds() {
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => renderBreeds(json))
}

function renderBreeds(json) {
  json.forEach(breed => {
    const li = document.createElement('li');
    li.textContent = breed.value;
    dogBreeds.appendChild(li);
  })
}

function selectBreedsStartingWith(letter) {
  renderBreeds(breeds.filter(breed => breed.startsWith(letter)));
}
