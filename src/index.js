
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';



document.addEventListener('DOMContentLoaded', function() {
  const breedList = document.getElementById('dog-breeds');
  fetchDogs();
  fetchBreeds();
});

function addEventListenerToLetterSelect(){
  const letterSelectEl = document.getElementById("breed-dropdown");
  //! below will have to not just load breeds
  letterSelectEl.addEventListener('change', loadBreeds);
};

function loadBreeds (breeds) {
  // get all breeds object
  //let breedsObject = fetchBreeds();
  //debugger
  // set variable for value of dropdown id (letter)
  const dropdownLetter = document.getElementById("breed-dropdown").value;
  console.log(dropdownLetter);
  // remove elements that are not filtered
  let parent = document.getElementById('dog-breeds');
  removeChildElements(parent);

  for (const key in breeds) {
    let childLi = document.createElement('li');
    childLi = document.createElement('li');
    debugger
    childLi.value = key;
    //! Why in debugger is key the breed name, but it cannot be be assigned to childLi. 
    //! Once it is appended, the value is "0"
    parent.appendChild(childLi);
  }
  // filter all breeds object
  // let filteredObj = function filterByLetter(breeds) {
  //   for (const key in breeds)
  //   debugger
  //     if ((key.startsWith(dropdownLetter)) == false) {
  //       delete breeds.key
  //     };
  //   return breeds;
  // };
  //renderBreeds(filteredObj(breeds));

  console.log(breeds);
  return breeds;
};

// function filterBreeds(loadBreeds(event)) {
  // use event target value
  // grab letter value

  //update list
//   console.log(breeds);
// }

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
    .then(resp => { 
      renderBreeds(resp.message);
      loadBreeds(resp.message);
    });  
    
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
