console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function() {
    fetchDogs()
    fetchBreeds()
})
// first challenge
function fetchDogs() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderDogs(json));
}
// 2nd challenge
function fetchBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
}



function renderDogs(json) {
    const dogImageContainer = document.getElementById("dog-image-container")
    json.message.forEach(dog => {
        dogImageContainer.innerHTML += `<img src = "${dog}">`
    })
}

function renderBreeds(json) {
    const dogBreedContainer = document.querySelector("#dog-breeds")
    const dogObj = json.message
    Object.keys(dogObj).forEach(dog => {
        dogBreedContainer.innerHTML += `<li id="${dog.charAt(0)}">${dog}</li>`
    })
    makeColorful()
    //4th challenge
    let dropDown = document.querySelector("#breed-dropdown")
    
    dropDown.addEventListener("change", function(e){
    let breedChildren = document.querySelector("#dog-breeds").children
    let breedsArray = [...breedChildren]
    breedsArray.forEach(breed => {
        if (breed.id === e.target.value) {
            breed.style.display = null      
        } else {
            breed.style.display = "none"
        }
        }) 
    })
}
//3rd challenge
function makeColorful(){
    let dogBreedContainer = document.querySelector("#dog-breeds")
    dogBreedContainer.addEventListener("click", function(e){
        e.target.style.color = "#69ff7a"       
    })
}