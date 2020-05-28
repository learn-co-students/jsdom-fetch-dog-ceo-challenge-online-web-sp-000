console.log('%c HI', 'color: firebrick')

function fetchDogImages() {
  return fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
   renderDogImages(json);
  })
}

function renderDogImages(json) {
  let images = json.message;
  let imageContainer = document.getElementById('dog-image-container');
  for (const element of images) {
    let newImg = document.createElement('img');
    newImg.src = element;
    imageContainer.appendChild(newImg);
  }
}

function fetchDogBreeds() {
  return fetch('https://dog.ceo/api/breeds/list/all')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
   renderDogBreeds(json);
  })
}

function renderDogBreeds(json) {
  let breeds = json.message;
  let breedsList = document.getElementById('dog-breeds');
  console.log(json); // REMOVE THIS
  for (const key in breeds) {
    if (breeds[key].length > 0) {
      let newItem = document.createElement('li');
      newItem.innerText = `${key}: `;
      for (const element of breeds[key]) {
        newItem.innerText += `${element}, `;
      }
      newItem.innerText = newItem.innerText.slice(0, -2);
      breedsList.appendChild(newItem);
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  fetchDogImages();
  fetchDogBreeds();
})
