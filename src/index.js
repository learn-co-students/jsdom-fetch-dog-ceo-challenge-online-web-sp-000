console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
    fetchDogBreeds();
  })

function fetchDogs() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(resp => resp.json())
      .then(results => {
        results.message.forEach(image => renderDogs(image))
    });
  }
  
  function renderDogs(imageUrl) {
    let container = document.querySelector('#dog-image-container')
    let img = document.createElement('img')
    img.src = imageUrl
    container.appendChild(img);
  }

function fetchDogBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(results => {
        breeds = Object.keys(results.message); 
        updateBreedList(breeds)
    });
}

function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    breeds.forEach(breed => addBreed(breed));
  }

function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
}