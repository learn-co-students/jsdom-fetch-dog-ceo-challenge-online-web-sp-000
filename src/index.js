console.log('%c HI', 'color: firebrick')

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breedPromise = fetch(breedUrl)

const imgUrl = "https://dog.ceo/api/breeds/image/random/5"
let imgPromise = fetch(imgUrl)

let breeds =[]

document.addEventListener("DOMContentLoaded", e => {

  let dropDown = document.getElementById("breed-dropdown")
  let breedDiv = document.getElementById("dog-breeds")

  // ------------ Color Change --------------

  breedDiv.addEventListener("click", e => {
    if (e.target.tagName === "LI"){
      e.target.style.color = "blue"
    }
  })

  function colorChange(element){
    element.style.color = "pink"
  }

// ------------ Filter --------------

  dropDown.addEventListener("change", e => {
    console.log(e.target.value)
    let filteredBreeds = breeds.filter(breed => breed[0] === e.target.value)
    let breedContainerDiv = document.getElementById("dog-breeds")
    breedContainerDiv.innerHTML = ``
    filteredBreeds.forEach(breed => {
      displayBreed(breed)
    })
  })


// ------------ Breed Url --------------

  breedPromise
  .then(response => response.json())
  .then(json => {
    breeds = Object.keys(json.message)
    breeds.forEach(breed => {
    displayBreed(breed)
  })})



// ------------ Image Url --------------

  imgPromise
  .then(response => response.json())
  .then(json => json.message.forEach(img => {
    displayImage(img)
  }))
  })

  function filterBreeds(breeds){

  }


  function displayBreed(breed){
    let breedContainerDiv = document.getElementById("dog-breeds")
    breedContainerDiv.innerHTML +=
    `
    <li> ${breed} </li>
    `
  }

  function displayImage(img){
    let dogContainerDiv = document.getElementById("dog-image-container")
    dogContainerDiv.innerHTML +=
    `
    <div>
      <img src="${img}" height="42" width="42">
    </div>
    `
    // ------------ Image Url --------------
  }