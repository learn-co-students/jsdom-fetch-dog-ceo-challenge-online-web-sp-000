console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const breedList = document.getElementById("dog-breeds")
const select = document.getElementById("breed-dropdown")


document.addEventListener('DOMContentLoaded', function() {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderDogs(json))
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => renderBreeds(json))
}) 

// adds image elements to the DOM *for each* image in array
function renderDogs(dogs) {
    const dogList = document.getElementById("dog-image-container")
    for (const dog in dogs.message ) {
        const img = document.createElement('img')
        img.src = dogs.message[dog]
        dogList.appendChild(img)
    }
} 

function renderBreeds(breeds) {
    const breedList = document.getElementById("dog-breeds")
    for (const breed in breeds.message ) {
        const li = document.createElement('li')
        li.textContent = breed
        breedList.appendChild(li) 
        li.addEventListener("click", function () {
            this.style.color = 'green'
        })
    }
}

document.addEventListener("select", function() {
    let breedFilter = document.getElementById("breed-dropdown")
    const breedList = document.getElementById("dog-breeds")
    filter = breedFilter.value
    for (const breed in breedList)
}) 