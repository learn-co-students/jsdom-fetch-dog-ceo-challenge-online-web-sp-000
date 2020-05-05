console.log('%c HI', 'color: firebrick')
let breeds = []
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function () {
    loadImages()
    loadBreeds()
})

function loadImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => {for (const el of json.message) {
                    let newEl = document.createElement('img')
                    newEl.src = el
                    document.getElementById('dog-image-container').appendChild(newEl)
                }})
}

function loadBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {for (const breed of Object.keys(json.message)) {
        let newBreed = document.createElement('li')
        newBreed.innerHTML = breed
        document.getElementById('dog-breeds').appendChild(newBreed)
        newBreed.addEventListener('click', updateColor)
        breeds = Object.keys(json.message)
        addBreedSelectListener()
    }})
}

function updateColor(event) {
    event.target.style.color = 'palevioletred';
}

function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
}

function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
}

function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
}