console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    loadImages();
    loadBreeds();
    addBreedSelectListener();
})




function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(res=> res.json())
      .then(results => {
        results.message.forEach(image => addImage(image))
      });
  }

  function addImage(dogPicUrl) {
    let container = document.querySelector('#dog-image-container');
    let newImageEl = document.createElement('img');
    newImageEl.src = dogPicUrl;
    container.appendChild(newImageEl);
  }

function loadBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(res => res.json())
  .then(results => {
    breeds = Object.keys(results.message).forEach(breed => addBreed(breed));
  });
}

function addBreed(dogBreed) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerHTML = dogBreed;
  ul.appendChild(li);
  li.addEventListener('click', updateColor);
  //  addBreedSelectListener();
}

function updateColor(event) {
  event.target.style.color = 'purple';
}

function addBreedSelectListener() {
  let breedMenu = document.querySelector('#breed-dropdown');
  breedMenu.addEventListener('change', function (event) {
    removeBreeds();
    addSelectedBreeds(event.target.value);
  });
}

function removeBreeds() {
  let element =  document.querySelector('#dog-breeds');
  let child = document.querySelector('#dog-breeds').lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
  // console.log('test')
}

function addSelectedBreeds(letter) {
  removeBreeds();
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(res => res.json())
  .then(results => {
    breeds = Object.keys(results.message);

    let breedsFiltered = breeds.filter(breedsFiltered => breedsFiltered.startsWith(letter));
    //breeds.forEach(breed => addBreed(breed));
    console.log(breedsFiltered);
    let breed = breedsFiltered.forEach(breed => addBreed(breed));
    li.innerHTML = breed;
    ul.appendChild(li);
  });
}

// let x = document.getElementById("breed-dropdown");
// x.addEventListener("click", function(){
// addSelectedBreeds(event.target.value);
// });

