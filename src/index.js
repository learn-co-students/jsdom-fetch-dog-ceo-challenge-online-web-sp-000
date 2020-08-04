console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener(DOMContentLoaded, getImages);
function getImages() {
  fetch(imgUrl).then(res => res.json).then(json => renderDogs(json))
}
function renderDogs(json) {
  json.map(dog => document.querySelector("#dog-image-container").innerHTML =
  `<li>${dog}</li>`)
}