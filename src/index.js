console.log('%c HI', 'color: firebrick')
let breeds = [];

document.addEventListener("DOMContentLoaded", function() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    const dogDiv = document.getElementById("dog-image-container");
    for (const element of json['message']) {
      const imageElement = document.createElement("IMG");
      imageElement.src = element;
      dogDiv.appendChild(imageElement);
    }
  })

    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      breeds = Object.keys(json.message);

      updateBreedList(breeds);
      addBreedSelectListener();

    })
});


function updateBreedList(breeds) {
  const breedUl = document.querySelector("#dog-breeds");
  removeChildren(breedUl);
  breeds.forEach(breed => addBreed(breed))
};

function addBreedSelectListener() {
  let breedDropdown = document.querySelector("#breed-dropdown");
  breedDropdown.addEventListener("change", function(event) {
    selectBreedsStartingWith(event.target.value);
  })
};

function selectBreedsStartingWith(letter) {
  updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
};

function removeChildren(breedUl) {
  let child = breedUl.lastElementChild;

  while (child) {
    breedUl.removeChild(child);
    child = breedUl.lastElementChild;
  }
};

function addBreed(breed) {
  let ul = document.querySelector("#dog-breeds");
  let li = document.createElement("li");
  li.innerText = breed;
  li.style.cursor = "pointer";
  ul.appendChild(li);
  li.addEventListener("click", updateColor)
};

function updateColor(event) {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  this.style.color = "#" + randomColor;
}
