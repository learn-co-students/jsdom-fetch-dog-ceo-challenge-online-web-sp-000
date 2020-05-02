
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';


document.addEventListener('DOMContentLoaded', function() {
  const breedList = document.getElementById('dog-breeds');
  fetchDogs();
  fetchBreeds();
});

function addEventListenerToLetterSelect(){
  const letterSelectEl = document.getElementById("breed-dropdown");
  letterSelectEl.addEventListener('change', filterBreeds);
};

function filterBreeds () {
  // get all breeds object
  let breedsObject = fetchBreeds();
  // set variable for value of dropdown id (letter)
  const dropdownLetter = document.getElementById("breed-dropdown").value;
  console.log(dropdownLetter);
  // remove elements that are not filtered
  let parent = document.getElementById('dog-breeds');
  removeChildElements(parent);
  //! not removing from browser, but removes all children in debugger --- whyyyyy?
  // filter all breeds object
  filteredObj = function filterByLetter(breedsObject) {
    for (const key in breedsObject)
      if ((key.startsWith(dropdownLetter)) == false) {
        delete result.key
      };
    return breedsObject;
  };
  renderBreeds(filteredObj);
  console.log('In filterBreeds function');
};

function removeChildElements(parent) {
  while (parent.hasChildNodes()) {  
    parent.removeChild(parent.firstChild);
  };
}

function addEventListenerToBreedList() {
  let ul = document.getElementById('dog-breeds');
  let listItems = ul.children;
  for (const item of listItems){
    item.addEventListener('click', function(){
      item.style.color = 'blue';
    });
  }
}

function fetchDogs() {
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(resp => renderDogs(resp.message)); 
}

function fetchBreeds() {
  return fetch(breedUrl)
    .then(resp => resp.json())
    .then(resp => renderBreeds(resp.message)); 
}

function renderDogs(imageSourceArray) {
  const imageContainer = document.getElementById('dog-image-container');
  for (const image of imageSourceArray) {
    let newImageEl = document.createElement('img');
    newImageEl.src = image;
    imageContainer.appendChild(newImageEl);
  }
}

 function renderBreeds(breedObj) {
   const breedContainer = document.getElementById("dog-breeds");
   for (const key in breedObj) {
     let newBreedEl = document.createElement('li');
     newBreedEl.innerHTML = key;
     breedContainer.appendChild(newBreedEl);
   }
   addEventListenerToBreedList();
   addEventListenerToLetterSelect();
 }
