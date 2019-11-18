console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {

    let dogImageContainer = document.querySelector("#dog-image-container")
    let dogBreeds = document.querySelector("#dog-breeds")
    let breedDropDown = document.querySelector("#breed-dropdown")
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    function getDogImages() {
        fetch (imgUrl)
        .then(response => response.json())
        .then(json => {
            json.message.forEach(image => {
                let jpeg = document.createElement("li");
                jpeg.innerHTML = `<img src = "${image}" >`
                dogImageContainer.appendChild(jpeg)
            })
        });
    }

    getDogImages()

    function getDogBreeds() {
        fetch (breedUrl)
        .then(response => response.json())
        .then(json => {
            breeds = Object.keys(json.message)
            breeds.forEach(breed => {
                let type = document.createElement("li");
                type.innerHTML = breed
                dogBreeds.appendChild(type)
                dogBreeds.addEventListener("click", function changeColor() {
                    dogBreeds.setAttribute("style", "color:#159F6B")
                })
            })
        });
    }
    getDogBreeds()

    function search(breeds) {
        breedDropDownValue = document.querySelector("#breed-dropdown").value;
        let newBreeds = breeds.filter(breed => breed.charAt(0) === breedDropDownValue);
        dogBreeds.innerHTML = '';
        newBreeds.forEach(newBreed => {
            let newType = document.createElement("li");
            newType.innerHTML = newBreed
            dogBreeds.appendChild(newType)
        })
    }
    
    breedDropDown.addEventListener(`change`, (e) => {
        search(breeds)
    })
})
