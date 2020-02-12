console.log('%c HI', 'color: firebrick')

function fetchImg() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {results.message.forEach(img => renderImg(img))})
}

function renderImg(img){
    const image = document.getElementById("dog-image-container")
    let tag = document.createElement('img')
    tag.src = img
    image.appendChild(tag)
}

document.addEventListener('DOMContentLoaded', function() {
    fetchImg()
})

function fetchBreed() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(result => {
        for (const breed in result.message) {
            console.log(breed)
            renderBreed(breed)
        }
    })
}

function renderBreed(breed) {
    const breeds = document.getElementById("dog-breeds")
    let tags = document.createElement('li')
    tags.innerHTML = breed
    breed.appendChild(tags)

}

document.addEventListener('DOMContentLoaded', function() {
    fetchBreed()
})