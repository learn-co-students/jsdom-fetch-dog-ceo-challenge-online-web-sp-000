console.log('%c HI', 'color: firebrick')

let breeds = []

document.addEventListener('DOMContentLoaded', function() {
    getDogs()
    addBreeds()
});


function getDogs () {
    let dogs = []
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => {json.message.forEach(dog => {
            addDog(dog)
        });})
}

function addDog (dog) {
        const list = document.getElementById('dog-image-container')
        newDog = document.createElement('img');
        newDog.src = dog;
        list.appendChild(newDog);
    }

function addBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {breeds = Object.keys(json.message)

            updateBreeds(breeds)
            addBreedListener()
        })
}

function updateBreeds(breeds) {
    const list = document.getElementById('dog-breeds')
    removeChildren(list)
    for (const breed of breeds) {
        el = document.createElement('li')
        el.innerText = breed
        list.appendChild(el)
        el.addEventListener('click', updateColor)
    }
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }

  function selectBreedsStartingWith(letter) {
    updateBreeds(breeds.filter(breed => breed.startsWith(letter)));
  }

  function addBreedListener() {
    let breedDropdown = document.getElementById('breed-dropdown')
    breedDropdown.addEventListener('change', function (event) {
        selectBreedsStartingWith(event.target.value)
    })
  }

  function updateColor() {
      event.target.style.color = 'blue';
  }