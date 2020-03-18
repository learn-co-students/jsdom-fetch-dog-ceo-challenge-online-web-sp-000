console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){

  let dogUL = document.querySelector("#dog-breeds")


  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(handleImageAppending)

  makeFetchHappen()
  .then(response => {
    let dogBreedsArr = Object.keys(response.message)
    dogBreedsArr.forEach((breed) => addLI(breed))
  })
  dogUL.addEventListener("click", function(event){
    if (event.target.dataset.info === "breed") {
      event.target.style.color = "green"
    }
  })
  let dogSelect = document.getElementById('breed-dropdown')
  dogSelect.addEventListener("change", (event) => {
    makeFetchHappen()
    .then(res => {
      let dogBreedsArr = Object.keys(res.message)
      let filteredArray = dogBreedsArr.filter(breed => {
        return breed.startsWith(event.target.value)
      })
      dogUL.innerHTML = ""
      filteredArray.forEach(addLI)
    })
  })
})


function makeFetchHappen(){
  return fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
}

function handleImageAppending(jsonObject){
  let dogImageContainer = document.getElementById('dog-image-container')
  let arrOfDogURLs = jsonObject.message
  arrOfDogURLs.forEach(url => {
    dogImageContainer.innerHTML += makeImageTagString(url)
  })
}
function makeImageTagString(url){
  return `<img src="${url}"/>`
}

function addLI(breed){
  let dogUL = document.querySelector("#dog-breeds")
  dogUL.innerHTML += `<li data-info="breed">${breed}</li>`
}
