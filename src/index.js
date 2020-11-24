console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function(){
    fetchImages()
    fetchBreeds()
    
    const ul = document.querySelector('#dog-breeds')
    let breedDropdown = document.getElementById('breed-dropdown')
    let allBreeds = []
    // let selectedBreeds = []

    ul.addEventListener("click", (e) => e.target.style.color = "red")

    breedDropdown.addEventListener('change', (e) => {
        const letter = e.target.value //letter equals the target value of the function
        const selectedBreeds = allBreeds.filter((breed) => breed.startsWith(letter)) //filter the dog breeds
        ul.innerHTML = createBreedList(selectedBreeds) // create list using selected breeds
    })

    function fetchImages(){
        fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderImages(json));
    }

    function renderImages(json){
        const container = document.querySelector('#dog-image-container')
        json.message.forEach(image => {
            console.log(image)
            const div = document.createElement('div')
            div.innerHTML = `<img src= ${image}>`
            container.appendChild(div)
        })
    }

    function fetchBreeds(){
        fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => addBreeds(json));
    }



    function addBreeds(json){
        const body = document.querySelector('body')
        const ul = document.querySelector('#dog-breeds')
        for (const key in json.message) { 
        allBreeds.push(key)
        }
        console.log(allBreeds)
        ul.innerHTML = createBreedList(allBreeds)

    }

    function createBreedList(selectedBreeds){
        let array = []
        console.log(selectedBreeds)
        array = selectedBreeds.map(function(breed) {
            return `<li>${breed}</li>`
        })

        return array.join('')
    }
})