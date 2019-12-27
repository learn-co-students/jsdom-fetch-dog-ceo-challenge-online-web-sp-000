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
  let listItems = [];

  for (const key in json.message){
    if (Array.isArray(key)){
      for (let i = 0; i < key.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `${json.message[key][i] + " " + key}`;
        listItems.push(li);
      }

    } else {
      const li2 = document.createElement('li');
      li2.innerHTML = `${key}`;
      listItems.push(li2);
    }
  }

  for (let item of listItems) {
    ul.appendChild(item);
  }
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
  fetchBreeds();
})
