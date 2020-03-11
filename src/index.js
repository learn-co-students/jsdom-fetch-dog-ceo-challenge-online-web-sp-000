

let breeds = []

function grabImages(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(results => {
    results.message.forEach(imageUrl => addImage(imageUrl));
  });
}

function addImage(dogPicUrl) {
  let dogContainer = document.querySelector('#dog-image-container');
  let newImageElement = document.createElement('img');
  newImageElement.src = dogPicUrl;
  dogContainer.appendChild(newImageElement);
}



function loadBreedOptions() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(res => res.json())
    .then(results => {

      breeds = Object.keys(results.message);
      updateBreedList(breeds);
      addBreedSelectListener();
    });
}

function addBreed(breed){
  let breedUl = document.querySelector('#dog-breeds')
  let li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  breedUl.appendChild(li);
  li.addEventListener('click', updateColor);
}

function updateBreedList(breeds){
  let breedUl = document.querySelector('#dog-breeds')
  removeChildren(breedUl);
  breeds.forEach(breed => addBreed(breed))
}

function addBreedSelectListener() {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', function (event) {
    selectBreedsStartingWith(event.target.value);
  });
}

function selectBreedsStartingWith(letter) {
  updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function updateColor(event) {
  event.target.style.color = 'purple';
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}


grabImages()
loadBreedOptions()
