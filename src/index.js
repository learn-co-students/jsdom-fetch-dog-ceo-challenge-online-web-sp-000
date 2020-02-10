console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        Object.keys(json).forEach(function(key){
            let values = json[key]
            let container = document.getElementById("dog-image-container")

            for (const image of values) {
                if (image.includes("http")) {
                    container.innerHTML += `<img src=${image}>`
                }
            }
            
        })
    })
})

function getBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        // Use this data inside of `json` to do DOM manipulation
        console.log(json)

        Object.keys(json).forEach(function(key){
            let container = document.getElementById("dog-breeds")

            console.log(json[key])

            for (const breed in json[key]){
                container.innerHTML += `<li class="breed">${breed}</li>`
            }
            
        })
    })
}

getBreeds();