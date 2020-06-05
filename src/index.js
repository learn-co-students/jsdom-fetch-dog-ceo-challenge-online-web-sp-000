console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
   fetchDogImages();
   fetchDogBreeds();
   breedDropdown();
});

// Challenge 1 - fetch the images
function fetchDogImages() {
   const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
   fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => {
         json.message.forEach(image => renderDogImages(image))
      });
}

function renderDogImages(image) {
   const imageContainer = document.getElementById('dog-image-container');
   const dogImage = document.createElement('img');
   dogImage.src = image;
   imageContainer.appendChild(dogImage);
}

// Challenge 2 - fetch all the dog breeds
function fetchDogBreeds() {
   const breedUrl = 'https://dog.ceo/api/breeds/list/all';
   fetch(breedUrl)
      .then(resp => resp.json())
      .then(json => {
         breeds = Object.keys(json.message);
         renderDogBreeds(breeds);
      });
}

function renderDogBreeds(breeds) {
   const ul = document.getElementById('dog-breeds');
   breeds.forEach(breed => {
      const li = document.createElement('li');
      li.innerText = breed;
      ul.appendChild(li);
      li.addEventListener('click', changeFontColor);
   });
}

// Challenge 3 - font color of a particular <li> changes on click
function changeFontColor(event) {
   event.target.style.color = 'red';
}

// Challenge 4 - filter breeds using dropdown
function breedDropdown() {
   const dropdown = document.getElementById('breed-dropdown');
   dropdown.addEventListener('change', () => {
      const breeds = document.querySelectorAll('li');
      breeds.forEach(breed => {
         if (breed.innerText[0] === dropdown.value) {
            breed.style.display = '';
         } else {
            breed.style.display = 'none';
         }
      });
   });
}
