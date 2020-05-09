document.addEventListener('DOMContentLoaded', function() {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let jsonFile = {}


function fetchImages() {
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => displayImages(json));
}

function fetchBreeds() {
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => displayBreeds(json));
}

function displayImages(json) {
  let images = json.message
  const dogImages = document.getElementById('dog-image-container')

  for (const url of images) {
    const img = document.createElement('IMG')
    img.className = 'responsive';
    img.style.width = "400px";
    img.style.height = "300px";
    img.style.marginLeft = "5px";
    img.setAttribute("src", url)
    dogImages.appendChild(img)
  }
}

function getSpecificBreeds(displayOnly){

  let breeds = Object.keys(jsonFile.message)

  specificBreeds = []

    for (const name of breeds) {
      if (name[0] == displayOnly){
        specificBreeds.push(name)
       }
    }
  return specificBreeds
}

function removeChildrenFromDiv(divs){
  for (const div of divs) {
    while (div.firstChild) {
      div.firstChild.remove();
    }
  }
}


function displayBreeds(json, displayOnly = null) {
  let breedsName = []
  jsonFile = json

  const dogBreedsCol1 = document.getElementById('dog-breeds1')
  const dogBreedsCol2 = document.getElementById('dog-breeds2')
  const dogBreedsCol3 = document.getElementById('dog-breeds3')
  let counter = 0

  if (displayOnly != 'All' && displayOnly != null){
    removeChildrenFromDiv([dogBreedsCol1, dogBreedsCol2, dogBreedsCol3])
    breedsName = getSpecificBreeds(displayOnly)
  }else{
    removeChildrenFromDiv([dogBreedsCol1, dogBreedsCol2, dogBreedsCol3])
    breedsName = Object.keys(json.message)
  }

  for (const name of breedsName) {
    const breed = document.createElement('li')
    breed.style.margin = "35px"
    breed.innerHTML = name
      breed.onmouseover = function() {
        breed.style.color = "blue"
      }
      breed.onmouseout = function() {
        breed.style.color = "black"
      }

      if(counter >= 0 && counter <=30){
        dogBreedsCol1.appendChild(breed)
      } else if(counter >= 31 && counter <= 61){
        dogBreedsCol2.appendChild(breed)
      } else{
        dogBreedsCol3.appendChild(breed)
      }
      counter++
  }

}

function populateDropDownMenu() {
  const alphabet ='abcdefghijklmnopqrstuvwxyz'
  const dropDown = document.getElementById('breed-dropdown')
  let option = document.createElement('option')
  option.id = Math.random().toString(36).substring(7);
  option.innerHTML = "All"
  dropDown.appendChild(option)

  for (const alpha of alphabet) {
    let option = document.createElement('option')
    option.id = Math.random().toString(36).substring(7);
    option.innerHTML = alpha
    dropDown.appendChild(option)
  }
}


  fetchImages()
  fetchBreeds()
  populateDropDownMenu()

  const dropdown = document.getElementById('breed-dropdown')
  dropdown.onchange = function(){
    let selectedOption = dropdown.options[dropdown.selectedIndex].text
    displayBreeds(jsonFile, selectedOption)
  }

})




