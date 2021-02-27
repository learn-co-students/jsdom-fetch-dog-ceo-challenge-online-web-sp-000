let breeds = [];

document.addEventListener('DOMContentLoaded', function () {
  addImages();
  loadDogBreeds();
});

function addImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(response => response.json())
    .then(results => {
      results.message.forEach(image => addImage(image))
    });
}

function addImage(url) {
  let container = document.getElementById('dog-image-container');
  let imgElem = document.createElement('img');
  imgElem.src = url;
  container.appendChild(imgElem);
}

function loadDogBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(response => response.json())
    .then(results => {
      breeds = Object.keys(results.message);
      updateBreeds(breeds);
      addBreedSelectionListener();
    })
}

function updateBreeds(breeds) {
  let ul = document.getElementById("dog-breeds")
  removeChildren(ul);
  breeds.forEach(breed => addBreed(breed));
}

function removeChildren(elem) {
  let child = elem.lastElementChild;
  while (child) {
    elem.removeChild(child);
    child = elem.lastElementChild;
  }
}

function addBreed(breed) {
  let ul = document.getElementById("dog-breeds");
  let li = document.createElement("li");
  li.innerText = breed;
  ul.appendChild(li);
  li.addEventListener("click", changeColor);
}

function changeColor(event) {
  event.target.style.color = "red";
}

function filterBreedsBy(letter) {
  updateBreeds(breeds.filter(breed => breed.startsWith(letter)));
}


function addBreedSelectionListener() {
  let dropdown = document.querySelector("#breed-dropdown");
  dropdown.addEventListener("change", function (event) {
    filterBreedsBy(event.target.value);
  });
}