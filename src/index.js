console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    fetchBreeds()
    fetchDogs()
})

const imgURL = "https://dog.ceo/api/breeds/image/random/4"
const breedURL = 'https://dog.ceo/api/breeds/list/all'

function fetchDogs() {
    return fetch(imgURL)
        .then(resp => resp.json())
        .then(json => renderDogs(json))
}

function fetchBreeds() {
    return fetch(breedURL)
        .then(resp => resp.json())
        .then(json => renderBreeds(json))
}

function renderDogs(json) {
    const dogImageContainer = document.getElementById('dog-image-container')
    json.message.forEach(dog => {
        dogImageContainer.innerHTML += `<img src = '${dog}'>`
    })
}

function renderBreeds(json) {
    const dogBreedContainer = document.querySelector('#dog-breeds')
    const dogObj = json.message
    Object.keys(dogObj).forEach(dog => {
        dogBreedContainer.innerHTML += `<li id='${dog.charAt(0)}'>${dog}</li>`
    })
    textColor()

    let dropDown = document.querySelector('#breed-dropdown')

    dropDown.addEventListener('change', (e) => {
        let breedChildren = document.querySelector('#dog-breeds').children
        let breedsArray = [...breedChildren]
        breedsArray.forEach(breed => {
            if (breed.id === e.target.value) {
                breed.style.display = null
            } else {
                breed.style.display = 'none'
            }
        })
    })
}

function textColor() {
    let dogBreedContainer = document.querySelector('#dog-breeds')
    dogBreedContainer.addEventListener('click', (e) => {
        e.target.style.color = '#69b9ff'
    })

}


