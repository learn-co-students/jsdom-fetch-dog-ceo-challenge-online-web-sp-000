console.log('%c HI', 'color: firebrick')


const imgUrl = 'http://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'http://dog.ceo/api/breeds/list/all'

function renderImages(images) {
    const imgContainer = document.getElementById("dog-img-container")
    images.message.forEach(img => {
        let imgElement = document.createElement("img");
        imgElement.src = img;
        imgContainer.appendChild(imgElement)
    })
}

function colorChange(element) {
    element.style.color = "red"
}

function renderBreeds(images) {
    const dogBreeds = document.querySelector("#dog-breeds")
    Object.keys(images.message).forEach(breed => {
        if (images.message[breed].length !== 0) {
            images.message[breed].forEach(subBreed => {
                let breedElement = document.createElement("li");
                breedElement.innerText = subBreed;
                breedElement.addEventListener("click", (e) => colorChanger(e.target))
                dogBreeds.appendChild(breedElement)
            })
        }
    })
}


document.addEventListener("DOMContentLoaded", function() {
    const selectDropdown = document.querySelector("#breed-dropdown");
    selectDropdown.addEventListener("change", console.log(selectDropdown.value))
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderImages(json))

    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => renderBreeds(json))
});
