console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
  fetchDogs();
  appendDogs();
  fetchBreeds();
  appendBreeds();
  setTimeout(function () {
    changeColor();
  }, 5000);
  breedFilter(); 
});

function fetchDogs() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  return fetch(imgUrl)
    .then(response => response.json())
    .then(results => {
      results.message.forEach(image => appendDogs(image)) 
    });
  }

function appendDogs(image) {
  const dogImageContainer = document.querySelector('#dog-image-container');
  let newImageElement = document.createElement('img')
  newImageElement.src = image;
  dogImageContainer.appendChild(newImageElement)
}

function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  return fetch(breedUrl)
    .then(response => response.json())
    .then(results => {
      console.log(results)
      Object.keys(results.message).forEach(breeds => appendBreeds(breeds))
    });
}

function appendBreeds(breedName) {
  const breedList = document.querySelector('#dog-breeds')
  let newBreed = document.createElement('li')
  newBreed.innerHTML = breedName
  breedList.appendChild(newBreed)
}

function changeColor() {
  let listedBreeds = document.querySelectorAll('li');
  listedBreeds.forEach(dogBreedName => {
    dogBreedName.addEventListener('click', () => {
      dogBreedName.style.color = 'red'
    })
  })
}

function breedFilter() {
  const filter = document.querySelector("#breed-dropdown")
  filter.addEventListener('change', () => {
  let selectedLetter = filter.options[filter.selectedIndex].value

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  return fetch(breedUrl)
    .then(response => response.json())
    .then(results => {
      console.log(results)
      Object.keys(results.message).forEach()
    });
  })
}