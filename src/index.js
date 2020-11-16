console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

function fetchImage() {
    fetch(imgUrl)
        .then(response => response.json())
        .then(json => renderImages(json));
}

function fetchBreed() {
    fetch(breedUrl)
        .then(response => response.json())
        .then(json => renderBreeds(json));
}

function renderImages(json) {
    const dogImgContainer = document.querySelector("#dog-image-container");
    //  debugger;
    Object.keys(json.message).forEach(dogImgKey => {
        const img = document.createElement("img");
        img.src = json.message[dogImgKey];
        img.alt = "Image of a dog";
        dogImgContainer.appendChild(img);
    })
}

function renderBreeds(json) {
    const dogBreedsList = document.querySelector("#dog-breeds");
    //  debugger;
    Object.keys(json.message).forEach(dogBreedKey => {
        if (json.message[dogBreedKey].length > 0) {
            const li = document.createElement("li");
            li.className = "breed";
            li.innerText = json.message[dogBreedKey];
            dogBreedsList.appendChild(li);
        }
    })
}

function changeBreedColorOnClick() {
    const breedList = document.querySelector("#dog-breeds");
    breedList.addEventListener("click", function(event) {
        event.target.style.color = "blue";
    })
}

document.addEventListener("DOMContentLoaded", function() {
    fetchImage();
    fetchBreed();
    changeBreedColorOnClick();
})