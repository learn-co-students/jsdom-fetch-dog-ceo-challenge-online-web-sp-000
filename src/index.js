console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {

  let dogImageContainer = document.getElementById("dog-image-container");
  let dogBreeds = document.getElementById("dog-breeds");
  let dogBreedDropdown = document.getElementById("breed-dropdown");

  return fetch("https://dog.ceo/api/breeds/image/random/4");
    .then(resp => resp.json());
    .then(json => renderImages(json.message));

  return fetch("https://dog.ceo/api/breeds/list/all");
    .then(resp => resp.json());
    .then(json => allDogBreeds(json.message));

    function dogImage(image) {
      return `<img style="display:flex; width: 25%" class="dog-image" src=${image}>`
    }

    function renderImages(images) {
      dogImageContainer.innerHTML += images.map(dogImage).join("")
    }

})

/* challenge 1 */
