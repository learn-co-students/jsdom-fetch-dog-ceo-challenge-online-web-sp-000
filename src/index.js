document.addEventListener('DOMContentLoaded', function () {
    loadImages();
    loadBreedOptions();
  });

let breeds = [];
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

function loadImages() {
    fetch(imgUrl)
      .then(response => response.json())
      .then(results => {
        results.message.forEach(image => addImage(image))
    });
}

function addImage(dogPicUrl) {
    const dogImageContainer = document.querySelector('#dog-image-container');
    const newPic = document.createElement('img');
    newPic.src = dogPicUrl;
    dogImageContainer.appendChild(newPic);
}

function loadBreedOptions() {
    fetch(breedUrl)
      .then(response => response.json())
      .then(results => {
          breeds = Object.keys(results.message);
          updateBreedList(breeds);
          addBreedSelectListener();
      });
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
  
  function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }
  
  function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
  }
  
  function updateColor(event) {
    event.target.style.color = 'palevioletred';
  }



