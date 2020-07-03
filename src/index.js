const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breeds = {}

document.addEventListener('DOMContentLoaded', () => {
  fetch(imgUrl)
    .then(r => r.json())
    .then(addImages)

  fetch(breedUrl)
    .then(r => r.json())
    .then(addBreeds)
    .then(listenClicks)
    .then(listenFilter)
})

const addImages = o => {
  let imgHTML = ''
  for (const img of o.message) {
    imgHTML += `<img src='${img}' style='max-width: 100px; max-height: 100px;' /><br />`
  }
  document.getElementById('dog-image-container').innerHTML = imgHTML
}

const addBreeds = o => {
  breeds = Object.assign({}, o.message)
  displayBreeds(breeds)
}

const listenClicks = () => {
  document
    .getElementById('dog-breeds')
    .childNodes.forEach(e => e.addEventListener('click', clickResponse))
}

const clickResponse = e => {
  e.target.style.color = '#0d0'
}

const listenFilter = () => {
  document
    .getElementById('breed-dropdown')
    .addEventListener('change', dropdownChange)
}

const dropdownChange = e => {
  const letter = e.srcElement.value
  const filteredBreeds = {}
  for (const breed in breeds) {
    if (breed.slice(0, 1) === letter) {
      filteredBreeds[breed] = breeds[breed]
    } else if (letter === '0') {
      filteredBreeds[breed] = breeds[breed]
    }
  }
  displayBreeds(filteredBreeds)
}

const displayBreeds = breedList => {
  let breedHTML = ''
  for (const breed of Object.keys(breedList)) {
    breedHTML += `<li>${breed}</li>`
  }
  document.getElementById('dog-breeds').innerHTML = breedHTML
}
