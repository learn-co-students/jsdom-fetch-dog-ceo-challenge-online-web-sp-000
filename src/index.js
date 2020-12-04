console.log('%c HI', 'color: firebrick')

function fetchDogs() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderDogs(json))
}

function renderDogs(dogs) {
  const main = document.getElementById('dog-image-container')
  dogs.message.forEach(dog => {
    const dogImg = document.createElement('IMG')
    dogImg.src = dog
    main.appendChild(dogImg)

  })
}

function fetchBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => {
      breeds = Object.keys(json.message);
      dogList(breeds);
      breedSelector();
    })
}

function dogList(breeds) {
  let ul = document.querySelector('#dog-breeds')
  removeChildren(ul)
  breeds.forEach(breed => {
    let dogBreed = document.createElement('li')
    dogBreed.innerText = breed
    dogBreed.style.cursor = 'pointer'
    dogBreed.addEventListener('click', changeColor)
    ul.appendChild(dogBreed)
  })
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}
function changeColor() {
  this.style.color = 'red'
}

function breedSelector() {
  let breedSelector = document.querySelector('#breed-dropdown');
  breedSelector.addEventListener('change', function (event) {
    selectBreeds(event.target.value)
  })
}

function selectBreeds(letter) {
  dogList(breeds.filter(breed => breed.startsWith(letter)))
}

document.addEventListener('DOMContentLoaded', function () {
  fetchDogs()
  fetchBreeds()
})
