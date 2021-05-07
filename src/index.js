console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let allBreeds = []

document.addEventListener('DOMContentLoaded', function() {
  apiCallDogs(), apiCallBreeds(), breedDropDown()
})

function apiCallDogs() {
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => {
    renderImages(json)
  })
}

function renderImages(images) {
  const imgDiv = document.getElementById('dog-image-container')
  images['message'].forEach(image => {
    const img = document.createElement('img')
    img.src = image
    img.setAttribute('width', '100px')
    imgDiv.appendChild(img)
  })
}

function apiCallBreeds() {
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => {
    displayBreeds(json)
  })
}

function displayBreeds(breeds) {
  const uList = document.getElementById('dog-breeds')
  for (const breed in breeds["message"]) {
    allBreeds.push(breed)
    const li = document.createElement('li')
    li.innerHTML = breed
    uList.appendChild(li)
    li.addEventListener('click', changeColor)
  }
}

function changeColor(event) {
  event.target.style.color = 'red'
}

function breedDropDown() {
  let breedDropDownMenu = document.getElementById('breed-dropdown')
  breedDropDownMenu.addEventListener('change', function(event) {
    selectBreedsStartingWith(event.target.value)
  })
}

function selectBreedsStartingWith(letter) {
  updateBreeds(allBreeds.filter(breed => breed.startsWith(letter)));
}

function updateBreeds(breeds) {
  let ul = document.querySelector('#dog-breeds');
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

function addBreed(breed) {
  const uList = document.getElementById('dog-breeds')
  const li = document.createElement('li')
  li.innerHTML = breed
  uList.appendChild(li)
  li.addEventListener('click', changeColor)
}