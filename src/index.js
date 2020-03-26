console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    fetchImages()
    fetchBreeds()
})


function fetchImages() {
    const imageUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imageUrl)
        .then(resp => resp.json())
        .then(json => {json.message.forEach(image => addImage(image))})
}

function addImage(dogImage) {
    let imageContainer = document.getElementById("dog-image-container")
    let newImageElement = document.createElement("img")

    newImageElement.src = dogImage
    imageContainer.appendChild(newImageElement)
}

function fetchBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => { 
            breeds = Object.keys(json.message)
            .forEach(breed => addBreed(breed))
        })
}

function addBreed(breeds) {
    let breedList = document.getElementById("dog-breeds")
    let breed = document.createElement("li")

    breed.innerHTML = breeds
    breedList.appendChild(li)
}
