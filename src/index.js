console.log('%c HI', 'color: firebrick')

document.addEventListener('load', (event) => {
  fetchImages()
})

function fetchImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => {
    json.message.forEach(image => addImg(image))
  });
}

function addImg(image) {
  let container = documentquerySelector('#dog-image-container')
  let newImage = document.createElement('img');
  newImage.src = image;
  container.appendChild(newImage);
  }
}

function fetchDogBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(res => res.json())
    .then(results => {
      breeds = Object.keys(results.message);
      updateBreeds(breeds);
      addBreedSelectListener();
    });
}

function addBreedSelectListener() {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', function (event) {
    selectBreedsStartingWith(event.target.value);
  });
}

function updateBreeds(breeds) {
  let ul = document.querySelector('#dog-breeds');
  breeds.forEach(breed => addBreed(breed));
}

function addBreed(breed) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  ul.appendChild(li);
  li.addEventListener('click', updateColor);
}
