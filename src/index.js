console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

document.addEventListener("DOMContentLoaded", function() {
  fetchImages();
  fetchBreeds();

  document.getElementById('breed-dropdown').addEventListener("change", (event) => {
    let breedList = document.querySelector('#dog-breeds')
    while (breedList.firstChild) breedList.removeChild(breedList.firstChild)
    fetchBreeds();
  });
});

function fetchImages() {
  fetch(imgUrl)
  .then(res => res.json())
  .then(results => {
    results.message.forEach(image => renderImage(image))
  });
}

function renderImage(url) {
  const container = document.querySelector('#dog-image-container');
  const image = document.createElement("img")
  image.src = url
  container.appendChild(image)
}

function fetchBreeds() {
  fetch(breedUrl)
  .then(res => res.json())
  .then(results => {
    let breeds = Object.keys(results.message);
    breeds.forEach(breed => renderBreed(breed))
    changeTextColor();
  });
}

function renderBreed(breed) {
  const breedList = document.querySelector('#dog-breeds')
  const dogBreed = document.createElement("li")
  const dropdown = document.getElementById('breed-dropdown')
  dogBreed.innerText = breed
  if (dogBreed.innerText.startsWith(dropdown.value)) {
    breedList.appendChild(dogBreed)
  }
}

function changeTextColor() {
  const listItems = document.querySelectorAll('#dog-breeds li');
  listItems.forEach(function (listItem) {
    listItem.addEventListener('click', function () {
      this.style.color = 'red';
    });
  });
};