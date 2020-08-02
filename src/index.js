console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function() {

    function valueSelector() {
        let selector = document.getElementById("breed-dropdown").value
        console.log(selector)
    }

    function fetchImage() {
        return fetch(imgUrl)
        .then(response => response.json())
        .then(response => renderImages(response))
    }
    function renderImages(response) {
        let image_container = document.getElementById("dog-image-container")
        response.message.forEach(message => {
            let image = document.createElement('img')
            image.src = message
            image_container.appendChild(image)
        })
    }
    function fetchBreeds() {
        return fetch(breedUrl)
        .then(response => response.json())
        .then(response => renderBreeds(response))
    }
    function renderBreeds(response) {
        const myArray = Object.keys(response.message)
        const ul = document.getElementById("dog-breeds")
        for (const element of myArray) {
            let li = document.createElement('li')
            li.addEventListener("click", () => li.style.color = "red")
            // let selector = document.getElementById("breed-dropdown").value
            if (valueSelector() == element[0]) {
                li.innerText = element
                ul.appendChild(li)
            }
        }
    }

    fetchImage()
    fetchBreeds()
})


