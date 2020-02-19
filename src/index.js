console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
function fetchImages(){
  json = fetch(imgUrl)
  .then(response => response.json())
  .then(json => renderImages(json))

}

function renderImages(json){
  const imageBox = document.getElementById("dog-image-container")
  for (const url of json.message) {
    const image = document.createElement('img')
    image.src = `${url}`
    imageBox.appendChild(image)
  }
}

function fetchBreeds(){
  json = fetch(breedUrl)
  .then(response => response.json())
  .then(json => renderBreeds(json))
}

function renderBreeds(json){
  const breedList = document.getElementById("dog-breeds")
  for (const key in new_array) {
  const uli = document.createElement('li')
  uli.innerText = `${key}`
  uli.id = key
  breedList.appendChild(uli)
  uli.onclick = function(){
    uli.style.color = "red"
  }
  }
}

function filterNames(object) {
  const arr = []
  for (const key in object) {
    arr.push(key)
  }
  list = document.getElementById("breed-dropdown")
  new_array = arr.filter(function(breed){
    breed.charAt(0) === list.value
  })
  return new_array
}
document.addEventListener('DOMContentLoaded', function(){
  fetchImages()
  fetchBreeds()
})