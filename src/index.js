console.log('%c HI', 'color: firebrick');
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function fetchBreeds(){
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(function(response) {
    return response.json();
  })
  .then(function(json){
    renderBreeds(json);
    //console.log(json["message"]);
  });
}

function renderBreeds(json) {
  const ul = document.querySelector('ul');

  json.message.keys.forEach(breed => {
  const li = document.createElement('li');
  li.innerHTML = `<li>${breed} </li>`;
  ul.appendChild(li);
  });
}

function fetchImages(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response) {
    return response.json();
  })
  .then(function(json){
    renderImages(json);
  });
}

function renderImages(json) {
  const imageContainer = document.getElementById('dog-image-container');

  //for (const urlValue in json.message) {
    //
    json.message.forEach(image => {
//
    const imgSrc = document.createElement('div');
    imgSrc.innerHTML = `<img src=${image} />`;
    imageContainer.appendChild(imgSrc);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchImages();
})
