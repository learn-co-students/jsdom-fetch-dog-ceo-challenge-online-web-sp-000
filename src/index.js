console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'



function displayDogImages() { 
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => saveImages(json));
  }

function displayDogBreeds() { 
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => saveBreeds(json));
}

function saveImages(json) {
    for (const url of json.message) {
        addImageToDOM(url);
    }
}

  
function addImageToDOM(url) {
    const imgContainer = document.getElementById('dog-image-container')
    const imageElement = document.createElement('img')
    imageElement.src = `${url}`
    imageElement.height = '160'
    // imageElement.style.display = 'block'
    imageElement.style.border = "3px solid black"
    imageElement.style.margin = "3px"
    imgContainer.appendChild(imageElement)
}
function saveBreeds(json) {
    const breeds = Object.keys(json.message);
    for (const breed of breeds) {
        addBreedToDOM(breed);
    } 
}
function addBreedToDOM(name) {
    const breedContainer = document.getElementById('dog-breeds')
    const breedElement = document.createElement('li')
    breedElement.innerHTML = name
    breedContainer.appendChild(breedElement)
}
  
  document.addEventListener('DOMContentLoaded', function() {
    displayDogImages()
  })
  