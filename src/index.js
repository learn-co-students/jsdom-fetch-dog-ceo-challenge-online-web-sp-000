console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
  const imageContainer = document.querySelector('div#dog-image-container')
  const breedContainer = document.querySelector('ul#dog-breeds')
  const breedDropdown = document.querySelector('select#breed-dropdown')

  function parseImages(json) {
    for (const image of json.message) {
      imageContainer.innerHTML += `<img src="${image}">`
    }
  }

  function parseBreed(breedList) {
    for (const breed in breedList) {
      const breedElement = document.createElement('li');
      breedElement.innerText = breed;
      breedContainer.append(breedElement);
      breedElement.addEventListener('click', () => {
        breedElement.setAttribute('style', 'color:#FF008B');
      });
    }
  }

  function filterBreeds(breedList, letter) {
    while (breedContainer.lastChild) { breedContainer.removeChild(breedContainer.lastChild) }
    let filteredList = {};
    for (const breed in breedList) {
      if (breed[0] === letter ) { filteredList[breed] = breedList[breed]; }
    }
    parseBreed(filteredList);
  }

  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then((response) => { return response.json(); })
    .then((json) => { parseImages(json); });

  fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => { return  response.json(); })
    .then((json) => { parseBreed(json.message); });

  breedDropdown.addEventListener('change', (event) => { 
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => { return  response.json(); })
      .then((json) => { filterBreeds(json.message, event.target.value); });
   });

});