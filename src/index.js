console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
    fetchImages();
    fetchBreedList()
  });

function fetchImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => json.message.forEach(image => addImages(image)));
  }

function addImages(image) {
    const container = document.getElementById('dog-image-container')
    const newImage = document.createElement('img')
    newImage.src = image
    container.appendChild(newImage)
}

function fetchBreedList() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => {
        breeds = Object.keys(json.message)
        addBreeds(breeds)
    })
}

function addBreeds(breeds) {
    const ulBreeds = document.getElementById('dog-breeds')
    breeds.forEach(breed => {
        const newBreed = document.createElement('li')
        newBreed.id = "onClick"
        newBreed.innerText = breed
        ulBreeds.appendChild(newBreed)
        newBreed.addEventListener("click", changeColor)
    })
}

function changeColor(newBreed) { //how does it know what newBreed is to take in here if we're not saying changeColor(newBreed) above???
    newBreed.target.style.color = "pink"
}


