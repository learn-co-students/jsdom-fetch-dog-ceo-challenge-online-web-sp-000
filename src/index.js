console.log('%c HI', 'color: firebrick')
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function() {
  fetchImages()
  fetchBreeds()
})

function fetchImages() {
  return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImages(json))
  }

function renderImages(imageUrls){
  const container = document.getElementById('dog-image-container');
  imageUrls.message.forEach(imgUrl => {
    const imgEl = document.createElement('img');
    imgEl.src = imgUrl;
    container.appendChild(imgEl);
  })
}

function fetchBreeds() {
  return fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => renderBreeds(json))
}

function renderBreeds(breedsJson){
  let ul = document.getElementById('dog-breeds')
  const breeds = Object.keys(breedsJson.message);
  breeds.forEach(breed => addBreed(breed))
  addBreedListener(breeds);
}

function addBreed(breed) {
  let ul = document.getElementById('dog-breeds');
  const li = document.createElement('li');
  li.innerText = breed;
  ul.appendChild(li);
  li.addEventListener('click', changeColour);
}

function changeColour(event){
  event.target.style.color = '#3D9970'
}

function addBreedListener(breeds){
  const breedDropdown = document.getElementById('breed-dropdown');
  breedDropdown.addEventListener('change', function(event) {
    selectBreedsStartingWith(event.target.value, breeds);
  })
}

function selectBreedsStartingWith(letter, breeds) {
  let ul = document.getElementById('dog-breeds');
  let newBreeds = breeds.filter(breed => breed.startsWith(letter));
  clearElement(ul);
  newBreeds.forEach(newBreed => addBreed(newBreed));
}

function clearElement(el) {
  let child = el.lastElementChild;
  while (child) {
    el.removeChild(child);
    child = el.lastElementChild;
  }
}
