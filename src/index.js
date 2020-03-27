console.log('%c HI', 'color: firebrick')

window.addEventListener('DOMContentLoaded', (event) => {

  const dogImagesContainer = document.getElementById('dog-image-container');
  const dogBreedsList= document.getElementById('dog-breeds');

  function displayImages(arr, node) {
    for (const element of arr) {
      const newImage = document.createElement('img');
      newImage.src = element;
      newImage.height = '200';
      node.appendChild(newImage);
    }
  }

  function displayListItem(arr, node) {
    for (const breed in arr) {
      const newBreedHeading = document.createElement('li');
      newBreedHeading.innerText = breed;
      node.appendChild(newBreedHeading);
    }
  }

  function changeListItemColorOnClick(color) {
    const elementsArr = document.getElementsByTagName('li');

    for (const element of elementsArr) {
      element.addEventListener("click", function() {
        element.style.color = color;
      })
    }

  }

  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      displayImages(json.message, dogImagesContainer);
    });


  fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      displayListItem(json.message, dogBreedsList);
      changeListItemColorOnClick('purple');
    });

  function filterByLetter(letter) {
    const breedsListed = document.getElementsByTagName('li');

    for (const breed of breedsListed) {
      breed.style.display = breed.textContent[0] == letter ? "" : "none";
    }
  }

  const filterForm = document.getElementById('breed-dropdown');

  filterForm.addEventListener("change", function() {
    const letter = filterForm.value
    filterByLetter(letter);
  });

});
