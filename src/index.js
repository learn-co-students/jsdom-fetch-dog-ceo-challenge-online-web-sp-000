console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
  loadImages();
  loadBreed();
});

function loadImages(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      data.message.forEach(image => addImages(image))
    });
}

function addImages(dogUrl){
  const container = document.getElementById('dog-image-container');
  const img = document.createElement('img');
  img.src = dogUrl;
  container.appendChild(img);
}

function loadBreed(){
  const breedUrl = "https://dog.ceo/api/breeds/list/all"
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      breeds = Object.keys(data.message);
      breeds.forEach(breed => addBreeds(breed))
    });
}

function addBreeds(breed){
  const ul = document.getElementById('dog-breeds');
  const li = document.createElement('li');
  li.innerHTML = breed;
  ul.appendChild(li);
  li.addEventListener("click", function () {
    li.style.color = "magenta";
  });
}

// drop down function

function dropDown(){
  const menu = document.getElementById('breed-dropdown');
  menu.addEventListener('change', function(letter){
    updateBreeds(breeds.filter(breed => breed.startsWith(letter)))
  })
}

function updateBreeds(breeds){
  let ul = document.querySelector('#dog-breeds');
  removeChildren(ul);
  breeds.forEach(breed => addBreed(breed));
}

function removeChildren(ul) {
  let child = ul.lastElementChild;
  while (child) {
    ul.removeChild(child);
    child = ul.lastElementChild;
  }
}
