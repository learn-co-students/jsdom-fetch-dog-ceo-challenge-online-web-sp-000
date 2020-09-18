document.addEventListener('DOMContentLoaded', function() {
  fetchImages()
  fetchBreeds()
  dropDownDogList()
})


function fetchImages() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => addImages(json))
}

function addImages(json) {
  const imageDiv = document.getElementById('dog-image-container');
  json.message.forEach(image => {
    let newImg = document.createElement('img');
    newImg.src = image;
    imageDiv.appendChild(newImg);
  })
}

// on page load, fetch all the dog breeds using the url above

function fetchBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then(json => breedList(json))
}

// add the breeds to the page in an <ul>
function breedList(json) {
  const dogBreedList = document.getElementById('dog-breeds');
  for (var breed in json.message) {
    let newBreed = document.createElement('li');
    newBreed.innerHTML = breed;
    newBreed.addEventListener('click', changeColor)
    dogBreedList.appendChild(newBreed);
  }
}

function changeColor(event) {
  event.target.style.color = "orange"
}

function dropDownDogList() {
  const dropDown = document.getElementById('breed-dropdown')
  const dogBreedList = document.getElementById('dog-breeds');
    dropDown.addEventListener('change', function() {
      while (dogBreedList.firstChild)
        dogBreedList.removeChild(dogBreedList.firstChild);
        filterDogs(this.value);
    })
}

function filterDogs(letter) {
  filterDogs = [];
  filterDogs = allBreeds.filter(breed => breed[0] === letter);
  breedList(filterDogs);
}
