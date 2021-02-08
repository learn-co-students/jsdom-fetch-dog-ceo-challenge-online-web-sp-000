const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", function() {
  fetchImages();
  fetchBreeds();
});

function fetchImages() {
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => {
    let imageArray = json.message;
    for(src of imageArray) {
      const dogContainer = document.getElementById("dog-image-container");
      const img = document.createElement('img');
      img.src = src;
      dogContainer.appendChild(img);
    }
  });
}

function fetchBreeds() {
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => {
    breeds = Object.keys(json.message);
    renderBreeds(breeds);
    selectBreed();
  });
}

function renderBreeds(breeds) {  
  for(const breed of breeds){
    const ul = document.getElementById("dog-breeds");
    const li = document.createElement('li');
    li.textContent = breed;
    ul.appendChild(li);
    li.addEventListener('click', changeColor);
  }
}
    
function selectBreed() {
  const breedDropdown = document.getElementById("breed-dropdown");
  breedDropdown.addEventListener('change', function (event) {
    selectBreedsStartingWith(event.target.value);
  });
}

function selectBreedsStartingWith(letter) {
  updateBreeds(breeds.filter(breed => breed.startsWith(letter)));
}

function updateBreeds(breeds) {
  let ul = document.getElementById("dog-breeds");
  removeChildren(ul);
  renderBreeds(breeds);
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function changeColor(event) {
  event.target.style.color = 'green';
}
