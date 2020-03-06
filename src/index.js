console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function(){
    fetchImages()
    fetchBreeds()
  }) 

function fetchImages(){
  json = fetch(imgUrl)
  .then(response => response.json())
  .then(json => renderImages(json))
}

function fetchBreeds(){
  json = fetch(breedUrl)
  .then(response => response.json())
  .then(json => renderBreeds(json))
}

