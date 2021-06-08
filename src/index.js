console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const newImgTag = `<img id="img" src="#" />`

document.addEventListener("DOMContentLoaded", function() {
  console.log("Page has loded!");
  
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => addImgsToDOM(json));
  
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => addDogBreeds(json));
  
  let selectElement = document.getElementById("-dropdownbreed");
  selectElement.addEventListener('change', (event) => {
    const result = document.querySelector('#-dropdownbreed');
    document.getElementById("dog-breeds").innerHTML = ""
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => sortDogBreeds(json));
  });
  
});

function sortDogBreeds(breeds){
  
  let location = document.getElementById("dog-breeds");
  let breedObj = breeds.message
  let sortLetter = document.getElementById("-dropdownbreed").value
  
  for (const key in breedObj){
    if (key.charAt(0) == sortLetter){
      let newBreed = document.createElement("li")
      newBreed.onclick = function(){
        newBreed.style = "color: red;"
      }    
    //console.log(img)
    
    newBreed.innerHTML = key
    location.appendChild(newBreed)
    }
    
    
    
  }
}

function addDogBreeds(breeds){
  
  let location = document.getElementById("dog-breeds");
  let breedObj = breeds.message
  let sortLetter = document.getElementById("-dropdownbreed").value
  
  for (const key in breedObj){
    let newBreed = document.createElement("li")
    newBreed.onclick = function(){
      newBreed.style = "color: red;"
    }    
    //console.log(img)
    
    newBreed.innerHTML = key
    location.appendChild(newBreed)

    
    
    
  }
}

function changeColor(what){
  what.style = "color: red;"
}

function addImgsToDOM(imgObj){
  
  let imgArray = imgObj.message
  let container = document.getElementById("dog-image-container")
  
  //console.log(imgArray);
  
  for (const img in imgArray){
    let newImg = document.createElement("img")
    ///console.log(img)
    
    newImg.src = imgArray[img]
    container.appendChild(newImg)
  }
}