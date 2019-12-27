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
    if (Array.isArray(json.message[key]) && json.message[key].length > 0){
      for (let i = 0; i < json.message[key].length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `${json.message[key][i] + " " + key}`;
        li.id = json.message[key][i];
        addListener(li);
        listItems.push(li);
        }

    } else {
      const li2 = document.createElement('li');
      li2.innerHTML = `${key}`;
      li2.id = json.message[key];
      addListener(li2);
      //li2.addEventListener("click", changeColor);
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

function addListener(toHere){
  toHere.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
  text = target.textContent || target.innerText;
  changeColor(target);

  }, false);
}

function changeColor(target){

  if (target.style.color != "gold"){
    target.style.color = "gold";
  } else {
    target.style.color = "black";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  fetchImages();
  fetchBreeds();
})
