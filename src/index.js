//on page load
//fetch the images using the url above ⬆️
//parse the response as JSON
//add image elements to the DOM for each🤔 image in the array
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener('DOMContentLoaded', function () {
    fetchImages();
    fetchBreedList()
  });

function fetchImages() {
  fetch(imgUrl)
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
  fetch(breedUrl)
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
function changeColor(newBreed) {
newBreed.target.style.color = 'magenta'
}

function selectBreedsStartingWith(letter) {
    addBreeds(breeds.filter(breed => breed.startsWith(letter)));
  }
function addBreedSelectListener() {
const breedDropdown = document.querySelector('input[name="select-breed"]');
breedDropdown.addEventListener('change', function(event) {
  selectBreedsStartingWith(event.target.value);
});

}
