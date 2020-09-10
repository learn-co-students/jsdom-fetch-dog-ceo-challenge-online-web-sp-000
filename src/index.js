const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'

fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => showImages(json))

function showImages(json) {
  let imagesDiv = document.getElementById('dog-image-container')
  json.message.forEach(url => {
    let img = document.createElement('img')
    img.src = url
    imagesDiv.appendChild(img) 
  })
}

let breeds = []

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => makeBreeds(json))

function makeBreeds(json) {
  breeds = []
  for (const key in json.message) {
    breeds.push(key)
  }
  showBreeds(breeds)
  dropdownListener()
}

function showBreeds(breeds, opt) {
  document.querySelectorAll('li').forEach(li => li.remove())
  list = (opt == null ? breeds : (breeds.filter(b => b.startsWith(opt))))
  for (const item of list) {
    buildBreed(item)
  }
}

function buildBreed(item) {
  let ul = document.getElementById('dog-breeds')
  let li = document.createElement('li')
  li.textContent = item
  ul.appendChild(li)
  colorOnClick(li)
}

function colorOnClick(element) {
  element.addEventListener('click', function(event) {
      element.style.color = 'green'
    }
  )
}

function dropdownListener() {
  const dropDown = document.getElementById('breed-dropdown')
  dropDown.addEventListener('change', function(event) { showBreeds(breeds, event.target.value) })
}
