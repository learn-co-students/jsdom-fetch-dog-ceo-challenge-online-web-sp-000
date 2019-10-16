console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {

let dogUL = document.querySelector("#dog-breeds")
//on page load
//fetch the images using the url above
//parse the response as JSON
//add image elements to the DOM for each🤔 image in the array

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(json => displayImgs(json))

//add JavaScript so that
//on page load, fetch all the dog breeds using the url above ⬆️
//add the breeds to the page in an <ul> (take a look at the included index.html)

fetching()
.then(response => {
  let dogBreedsArr = Object.keys(response.message)
  dogBreedsArr.forEach(addList)
  })


//Once all of the breeds are rendered in the <ul>, add JavaScript so that the font color of a particular <li> changes on click. This can be a color of your choosing.
//When the user clicks any of the dog breed list items, the color the text should change.

dogUL.addEventListener("click", function(event) {
    if (event.target.dataset.info === "breed") {
      event.target.style.color = "red"
    }
  })


//Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.
//For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet
let dogSelect = document.getElementById("breed-dropdown")
      dogSelect.addEventListener("change", (event) => {
        fetching()
        .then(response => {
          let breedArray = Object.keys(response.message)
          let alphabetArray = breedArray.filter(breed => {
            return breed.startsWith(event.target.value)
          })
            dogUL.innerHTML = ""
            alphabetArray.forEach(addList)
        })
      })

})//close event

function fetching(){
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
}

function handleImageAppending(jsonObject){
    let dogImageContainer = document.getElementById("dog-image-container")
    let alphabetArray= jsonObject.message
    alphabetArray.forEach(url => {
      dogImageContainer.innerHTML += imageTag(url)
    })
}

function imageTag(url){
    return `<img src="${url}"/>`
}
 
function addList(breed){
    let dogUL = document.querySelector("#dog-breeds")
    dogUL.innerHTML += `<li data-info="breed">${breed}</li>`
}

    


  
    

  