function addImage(imageLocation) {
  const newImage = document.createElement('p');
  newImage.innerHTML = `<img src="${imageLocation}" height="200" width="200">`
  document.querySelector("#dog-image-container").appendChild(newImage);
}

function parseDogs(dogsHash, filter) {
  const breedArray = [];
  for (breed in dogsHash) {
    if(!filter || (filter && breed[0] == filter)) {
      if(dogsHash[breed].length < 1) {
        breedArray.push(capitalizeFirstLetters(`${breed}`));
      } else {
        for(sub_breed of dogsHash[breed]) {
          breedArray.push(capitalizeFirstLetters(`${sub_breed} ${breed}`));
        }
      }
    }
  }
  addDogsList(breedArray);
}

function capitalizeFirstLetters(inputString) {
  const stringArray = inputString.split(" ");
  const returnArray = [];
  for(let i = 0; i < stringArray.length; i++) {
    returnArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].slice(1);
  }
  return returnArray.join(" ")
}

function addDogsList(dogs) {
  for (breed of dogs) {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = breed;
    document.querySelector("#dog-breeds").appendChild(newListItem);
  }
}

function clearBreedList() {
  document.querySelector("#dog-breeds").remove();
  const newUL = document.createElement("ul");
  newUL.id = "dog-breeds";
  document.querySelector("body").appendChild(newUL);
}

function filterBreeds() {
  const filter = document.querySelector("#breed-dropdown").value;
  clearBreedList();
  getBreedsFromAPI(filter);
}

function getBreedsFromAPI(filter = false) {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  fetch(breedUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      parseDogs(json.message, filter)
    })
}

document.addEventListener("DOMContentLoaded", function() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      for (i of json.message) {
        addImage(i);
      }
    })

  getBreedsFromAPI(false);

  document.addEventListener("click", function(e) {
    if(e.target.tagName == "LI") {
      if(e.target.style.backgroundColor != "yellow") {
        e.target.style.backgroundColor = "yellow";
      } else {
        e.target.style.backgroundColor = "white";
      }
    }
  });
});

/* {message: Array(4), status: "success"}
message: Array(4)
0: "https://images.dog.ceo/breeds/bulldog-french/n02108915_5667.jpg"
1: "https://images.dog.ceo/breeds/dalmatian/cooper2.jpg"
2: "https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg"
3: "https://images.dog.ceo/breeds/dingo/n02115641_7119.jpg"
length: 4
__proto__: Array(0)
status: "success"
__proto__: Object */
