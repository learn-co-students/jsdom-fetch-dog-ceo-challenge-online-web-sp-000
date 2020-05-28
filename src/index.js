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
  for (const key in breeds) {
    if (breeds[key].length > 0) {
      let newItem = document.createElement('li');
      newItem.innerText = `${key}: `;
      for (const element of breeds[key]) {
        newItem.innerText += `${element}, `;
      }
      newItem.innerText = newItem.innerText.slice(0, -2);

      // If a user clicks on an LI, turn the text blue
      newItem.addEventListener('click', () => {
        newItem.style.color = "blue";
      });

      breedsList.appendChild(newItem);
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  fetchDogImages();
  fetchDogBreeds();
  let breedSelector = document.getElementById('breed-dropdown');
  breedSelector.addEventListener('change', () => {
    updateDogBreeds(breedSelector.value);
  })
})

function updateDogBreeds(firstLetter) {
  const breedsList = document.getElementById('dog-breeds');
  let breeds = breedsList.getElementsByTagName('li');
  
  // Go through each list item, and if the first letter in the
  // bullet does not match firstLetter, hide it
  for (let element of breeds) {
    if (element.innerText.charAt(0) != firstLetter) {
      element.style.display = 'none';
    }
  }
}
