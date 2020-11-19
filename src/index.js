console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const imgContainer = document.getElementById("dog-image-container")

    fetch(imgUrl)
    .then( function(response) {
        return response.json();
    })
    .then(function(json) {
        for (const imgLink of json.message) {
            let newImage = `<img src="${imgLink}" width="250"></img>`
            imgContainer.innerHTML += newImage
        }
    })
})

document.addEventListener("DOMContentLoaded", function() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const breedContainer = document.getElementById("dog-breeds")

    fetch(breedUrl)
    .then( function(response) {
        return response.json();
    })
    .then(function(json) {
        for (const breedName in json.message) {
            let newBreed = `<li>${breedName}</li>`
            breedContainer.innerHTML += newBreed
        }

        const breedList = breedContainer.getElementsByTagName('li')

        for (const breed of breedList) {
            breed.addEventListener('click', function() {
                breed.style.color = "orange"
            })
        } 
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const breedSelector = document.getElementById('breed-dropdown')

    breedSelector.addEventListener('change', function() {
        let dropdown = breedSelector.value
        console.log(dropdown)
        const breedContainer = document.getElementById("dog-breeds")
        for (const breed of breedContainer.children) {
            console.log(breed.innerText)
            if (breed.innerText[0] != dropdown) {
                breed.style.display = "none";
            } else {
                breed.style.display = "block";
            }
        }
    })
})





