console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    let dogUL = document.querySelector("#dog-breeds")

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(handleImageAppending)

    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(response => {
        let dogBreedsArr = Object.keys(response.message)
        dogBreedsArr.forEach(addLiToDOM)
    })

    dogUL.addEventListener("click", function(e){
        if (e.target.dataset.info === "breed") {
            e.target.style.color = "green"
        }
    })

    let dogSelect = document.getElementById("breed-dropdown")
    dogSelect.addEventListener("change", (e) => {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(res => {
            let dogBreedsArr = Object.keys(res.message)
            let filteredArray = dogBreedsArr.filter(breed => {
                return breed.startsWith(e.target.value)
            })

            dogUL.innerHTML = ""

            filteredArray.forEach((breed) => {
                dogUL.innerHTML += `<li data-info="breed">${breed}</li>`
            })
        })
    })


    function handleImageAppending(jsonObject){
        let dogImageContainer = document.getElementById("dog-image-container")
        let arrOfDogURLs = jsonObject.message;
        arrOfDogURLs.forEach(url => {
            dogImageContainer.innerHTML += makeImageTagString(url)
        })
    }

    function makeImageTagString(url){
        return `<img src="${url}"/>`
    }

    function addLiToDOM(breed){
        let dogUL = document.querySelector("#dog-breeds")
        dogUL.innerHTML += `<li data-info="breed">${breed}</li>`
    }
})


