document.addEventListener("DOMContentLoaded", function() {
  afterLoad()
  addListClick();
  addOptionSelect();
});

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breedArray = {};

function afterLoad(){
  console.log('%c HI', 'color: firebrick');
  fetchImages();
  fetchBreeds();
}

function fetchImages() {
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImages(json));
}

function fetchBreeds() {
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => renderBreedList(json));
}

function renderImages(json){
  let imageArray = json.message;
  console.log("Will render Images");
  for (const key in imageArray) {
    addImage(imageArray[key]);
  }
}

function addImage(imageURL){
  let img = document.createElement('img');
  img.src = imageURL;
  let imgContainer = document.getElementById('dog-image-container');
  imgContainer.appendChild(img);
}

function renderBreedList(json){
  breedArray = json.message;
  let breedList = document.getElementById('dog-breeds');
  let myCounter = 0;
  for (const key in breedArray){
    let newOption = document.createElement('li');
    newOption.id = "breedlist" + myCounter;
    newOption.textContent = key;
    breedList.appendChild(newOption);
    myCounter += 1;
  }
}

function renderFilteredBreedList(letter){
  let breedList = document.getElementById('dog-breeds');
  while(breedList.firstChild) breedList.removeChild(breedList.firstChild);  
  let myCounter = 0;
  for (const key in breedArray){
    if (key.charAt(0) == letter){
      let newOption = document.createElement('li');
      newOption.id = "breedlist" + myCounter;
      newOption.textContent = key;
      breedList.appendChild(newOption);
      myCounter += 1;
    }    
  }
}

function addListClick(){
  document.querySelector("#dog-breeds").addEventListener("click", function(event) {
    let listItem = event.target;
    listItem.style.color = "#" + randomColor();  
  }, false);
}

function randomColor(){
  return Math.floor(Math.random()*16777215).toString(16);
}

function addOptionSelect(){
  document.querySelector("#breed-dropdown").addEventListener("change", function(event) {
    let optionItem = event.target.value;
    console.log(optionItem);
    renderFilteredBreedList(optionItem);
  }, false);
}

