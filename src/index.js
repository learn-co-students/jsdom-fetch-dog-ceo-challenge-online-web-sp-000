console.log('%c HI', 'color: firebrick')

let images={};

document.addEventListener('DOMContentLoaded', function() {
  fetchDogs()
  fetchBreeds()
  clickBreeds()
  filterBreeds()
})


function fetchDogs() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(response => response.json())
  .then(data => {
    let arr = data.message
    arr.forEach(element => addImage(element));
  });
};

  function addImage(dogPicUrl) {
    let img = document.createElement("img");
    let div = document.getElementById('dog-image-container')
    img.src = dogPicUrl
    div.appendChild(img)
  }

function fetchBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    let obj = data.message
    for (const key in obj) {
      addBreeds(key)
    };
  });
};

function addBreeds(breed) {
  const ul = document.getElementById('dog-breeds')
  const li = document.createElement('li');
  li.innerText = breed
  ul.appendChild(li)
  clickBreeds()
}

function clickBreeds() {
  let lis= document.querySelectorAll('li')
  lis.forEach((element) => {
    element.addEventListener('click', function(event) {
      element.style="color:firebrick";  //maybe add code to make it change back upon another click?
    })
  })
}

//below I just need to replace the console.logs with methods that will only show the dogs of each letter.
function filterBreeds() {

  const drop = document.getElementById('breed-dropdown')
  drop.addEventListener('click', function(event) {
    if (drop.value === "a") {
     console.log("Hi There A")
     fetchABreeds()
    }
     if (drop.value === "b") {
     console.log("Hi There B")
     fetchBBreeds()
    }
   if (drop.value === "c") {
     console.log("Hi There C")
     fetchCBreeds()
    }
   if (drop.value === "d") {
     console.log("Hi There D")
     fetchDBreeds()
    }
  })
}

/// maybe like this ?

function fetchABreeds() {
  let letters = []
  const ul = document.getElementById('dog-breeds')
  ul.innerHTML = "" //clears list
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    let obj = data.message
    for (const key in obj) {
      if (key.startsWith("a")){
        letters.push(key)
      };
      for (const element of letters) {
      addBreeds(element)
    }
    };
  });
};

function fetchBBreeds() {
  let letters = []
  const ul = document.getElementById('dog-breeds')
  ul.innerHTML = "" //clears list
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    let obj = data.message
    for (const key in obj) {
      if (key.startsWith("b")){
        letters.push(key)
      };
    for (const element of letters) {
      addBreeds(element)
    }
    };
  });
};

function fetchCBreeds() {
  let letters = []
  const ul = document.getElementById('dog-breeds')
  ul.innerHTML = "" //clears list
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    let obj = data.message
    for (const key in obj) {
      if (key.startsWith("c")){
        letters.push(key)
      };
    for (const element of letters) {
      addBreeds(element)
    }
    };
  });
};

function fetchDBreeds() {
  let letters = []
  const ul = document.getElementById('dog-breeds')
  ul.innerHTML = "" //clears list
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    let obj = data.message
    for (const key in obj) {
      if (key.startsWith("d")){
        letters.push(key)
      };
    for (const element of letters) {
      addBreeds(element)
    }
    };
  });
};
