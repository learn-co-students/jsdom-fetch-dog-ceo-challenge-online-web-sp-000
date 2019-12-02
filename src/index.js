console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let dogBreeds;
let dogPictures;

let imgContainer;
let ul;
let dropdown;


document.addEventListener("DOMContentLoaded", () =>{
  //takes dog Photos and places in DOM
  fetch(imgUrl)
  .then( response => {
    return response.json();
  })
  .then( json => {
    dogPictures = json.message;
    imgContainer = document.getElementById("dog-image-container")
    for (let i=0; i<dogPictures.length; i++) {
      let img = document.createElement("IMG");
      img.src = dogPictures[i];
      img.height = "200";
      imgContainer.appendChild(img);
    }
  });

  //takes dog Breeds and places in DOM
  fetch(breedUrl)
  .then(response => {
    return response.json();
  })
  .then(json => {
    dogBreeds = Object.keys(json.message);
    ul = document.getElementById("dog-breeds");
    ul.innerHTML = ""
    let newArray = changeList(dropdown.value, dogBreeds);
    for (let i=0; i<newArray.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = newArray[i];
      ul.appendChild(li);
    }
  })

  dropdown = document.getElementById("breed-dropdown")
  ul = document.getElementById("dog-breeds");

  dropdown.addEventListener("change", () =>{
    // call the function that add list to the ul in the dom
    // clear the ul first before adding a new
    ul.innerHTML = ""
    let newArray = changeList(dropdown.value, dogBreeds);
    for (let i=0; i<newArray.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = newArray[i];
      ul.appendChild(li);
    }
  });

  ul.addEventListener("click", e => {
    e.target.style.color = "pink"
  });
})

// this function returns an array given the dropdown value and array its iterating over.
function changeList(value, dogArrays) {
  let newArray = [];
  for (let i=0; i<dogArrays.length; i++) {
    if (dogArrays[i][0] === value) {
      newArray.push(dogArrays[i]);
    }
  }
  return newArray;
};
