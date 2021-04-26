console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function() {
    dogImage();
    fetchBreeds();
});

function dogImage() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => json.message.forEach(dog => renderImg(dog)))
};

function renderImg(image) {
    const dog = document.createElement("img")
    dog.src = image
    document.getElementById("dog-image-container").appendChild(dog)
};

function updateBreeds(breeds) {
    const breedsList = document.getElementById('dog-breeds');
    removeChildren(breedsList)
    breeds.forEach(breed => addBreed(breed))
};

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        breeds = Object.keys(json.message);
        updateBreeds(breeds);
        addBreedSelectListener();
    })
};

function addBreed(breed) {
    const breedsList = document.getElementById('dog-breeds');
    const newBreed = document.createElement('li')
    newBreed.innerText = breed
    breedsList.appendChild(newBreed)
    newBreed.addEventListener('click', updateColor)
};

function updateColor() {
    event.target.style.color = 'palevioletred'
}

function selectBreedsStartingWith(letter) {
    updateBreeds(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }

  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }