console.log('%c HI', 'color: firebrick')

function fetchPics() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
  .then(response => response.json())
  .then(json => renderPics(json));
}


function renderPics(json) {
  const dogHolder = document.querySelector("#dog-image-container");
  const dogs = json.message;
  dogs.forEach(dog => {
    const img = document.createElement("IMG");
    img.src = dog;
    dogHolder.appendChild(img);
  })
}

function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  fetch(breedUrl)
  .then(response => response.json())
  .then(json => renderBreeds(json));
}

function renderBreeds(json) {
  const ul = document.querySelector("#dog-breeds");
  const breeds = json.message;
  for (breed in breeds) {
    const li = document.createElement("li");
    li.innerText = breed;
    li.id = `${breed[0]}`;
    ul.appendChild(li);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  fetchPics();
  fetchBreeds();
  const dogBreedsUl = document.querySelector("#dog-breeds");
  dogBreedsUl.addEventListener("click", function(element) {
    if (element.target && element.target.nodeName === "LI") {
      element.target.style.color = "white";
    }
  })
  const breedDropdown = document.querySelector("#breed-dropdown");
  breedDropdown.addEventListener("change", function() {
    const liItems = dogBreedsUl.getElementsByTagName("li");
    for (let i = 0; i < liItems.length; i++) {
      if (liItems[i].id !== breedDropdown.value) {
        liItems[i].style.display = "none";
      } else {
        liItems[i].style.display = "";
      }
    }
  })
});