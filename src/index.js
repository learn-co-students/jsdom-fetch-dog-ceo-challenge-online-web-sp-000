document.addEventListener("DOMContentLoaded", e => {

    fetchDogImages()
    fetchDogBreeds()

    function fetchDogImages() {
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

        return fetch(imgUrl)
            .then(resp => resp.json())
            .then(dogs => renderDogImages(dogs["message"]))
    }

    function renderDogImages(dogs) {
        const main = document.getElementById('dog-image-container')
        dogs.forEach(dog => {
            let img = document.createElement("img")
            img.src = dog
            main.appendChild(img)
        })
    }

    function fetchDogBreeds() {
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'

        return fetch(breedUrl)
            .then(resp => resp.json())
            .then(breeds => renderDogBreeds(breeds["message"]))
    }

    function renderDogBreeds(breeds) {
        const breedDropdown = document.getElementById("dog-breeds")
        Object.keys(breeds).forEach(b => {
            let option = document.createElement("li")
            option.textContent = b
            breedDropdown.appendChild(option)
        })
        addColorize()
    }

    let dogBreedsList = document.getElementById('dog-breeds').querySelectorAll('li');

    function addColorize() {
        dogBreedsList.forEach(function(s)  {
            s.addEventListener('click', e => {
                s.style.color = "#ff0000"
            })
        })
    }

    filter()

    function filter() {
        let select = document.getElementById('breed-dropdown')
        select.addEventListener('change', ev => {
            let target = ev.target.value
            let breeds = document.getElementById('dog-breeds').querySelectorAll('li')
            for (let i = 0; i < breeds.length; i++) {
                let listItem = breeds[i]
                if (listItem.textContent.startsWith(target)) {
                    listItem.style.display = ''
                } else {
                    listItem.style.display = 'none'
                }
            }
        })
    }

})

