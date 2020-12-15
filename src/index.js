console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    let dogUL = document.querySelector("#dog-breeds")

    fetch(https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(handleImageAppending)

    makeFetch()
    .then(response => {
        let dogBreedsArr = Object.keys(response.message);
        dogBreedsArr.forEach(addLI);
    });

    let dogSelect = document.getElementById('breed-dropdown');
    dogSelect.addEventListener("change", (event) => {
        makeFetch()
        .then(res => {
            let dogBreedsArr = Object.keys(res.message)

            let filteredArray = dogBreedsArr.filter(breed => {
                return breed.startsWith(event.target.value)
            })
            dogUL.innerHTML = ""

            filteredArray.forEach(addLI)
        });

    });

    //DOM CONTENT LOADED
});

function makeFetch() {
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
}

function handleImageAppending(jsonObject) {
    let dogImageContainer = document.getElementById('dog-image-container')
    let arrOfDogURLs = jsonOnject.message
    arrOfDogURLs.forEach(url => {
        dogImageContainer.innerHTML += makeImgTagString(url)
    })
}

function makeImgTagString(url) {
    return `<img src="${url}"/>`
}

function addLI(breed) {
    let dogUL = document.querySelector("#dog-breeds")
    dogUL.innerHTML += `<li data-info="breed">${breed}!</li>`
}