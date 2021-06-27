console.log('%c HI', 'color: firebrick')

let breedsArr = [];

document.addEventListener("DOMContentLoaded", function() {
  loadImages();
  loadBreeds();
  document.querySelector("select").addEventListener('change', function() {
    filterBreeds();
  });
})


function loadImages() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    for (const element of json.message) {
      let img = document.createElement('img');
      img.src = element;
      img.style.height = '200px';
      img.style.width = '200px';
      document.getElementById('dog-image-container').appendChild(img);
    }
  });
}

function loadBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    for (const key in json.message) {
      let li = document.createElement('li');
      li.innerText = key;
      li.addEventListener('click', function() {
        li.style.color = "#E51414";
      });
      breedsArr.push(li);
      document.getElementById('dog-breeds').appendChild(li);
    }
  });
}


function filterBreeds() {
  if (document.getElementById('breed-dropdown').value !== "") {
    const selectedBreeds = breedsArr.filter(li => li.innerText.startsWith(document.getElementById('breed-dropdown').value));
    document.getElementById('dog-breeds').innerHTML = " ";
    for (const breed of selectedBreeds) {
      let li = document.createElement('li');
      li.innerText = breed.innerText;
      document.getElementById('dog-breeds').appendChild(li);
    };
  } else if (document.getElementById('breed-dropdown').value === "") {
    document.getElementById('dog-breeds').innerHTML = " ";
    for (const breed of breedsArr) {
      let li = document.createElement('li');
      li.innerText = breed.innerText;
      document.getElementById('dog-breeds').appendChild(li);
    };
  }
}
