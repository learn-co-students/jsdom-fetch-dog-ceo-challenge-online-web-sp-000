console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogs() {
    fetch(imgUrl)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      renderDogs(json.message)
    })
}

function fetchBreeds() {
    fetch(breedUrl)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      renderBreeds(Object.keys(json.message))
    })
}

function renderBreeds(breeds) {
    const breedBox = document.querySelector('#dog-breeds')
    for (const element of breeds) {
        const dType = document.createElement('li')
        dType.innerHTML = element;
        breedBox.appendChild(dType)
    };
}

function renderDogs(dogs) { 
    const dogCage = document.querySelector('#dog-image-container')
    console.log(dogs)
    dogs.forEach(dog => {
        const boarded = document.createElement('img')
        boarded.src = dog
        boarded.setAttribute("height", "25%");
        boarded.setAttribute("width", "25%");
        dogCage.appendChild(boarded)
    })
}
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchDogs()
    fetchBreeds()
    const dogBreedUl = document.getElementById('dog-breeds')
    dogBreedUl.addEventListener('click', function(event) {
        event.target.style.color = 'red'
    })
    
  })