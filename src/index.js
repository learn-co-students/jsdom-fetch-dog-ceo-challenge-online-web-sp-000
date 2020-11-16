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
    let imgCounter = 0;
    debugger;
    Object.keys(json.message).forEach(dogImgKey => {
        if (dogImgKey == "message") {
            const img = document.createElement("img");
            img.src = json[dogImgKey][imgCounter];
            img.alt = "Image of a dog";
            dogImgContainer.appendChild(img);
            imgCounter++;
        }
    })
}

function renderBreeds(json) {
    const dogBreedsList = document.querySelector("#dog-breeds");
    let breedCounter = 0;
    //  debugger;
    Object.keys(json.message).forEach(dogBreedKey => {
        if (json.message[dogBreedKey].length > 0) {
            const li = document.createElement("li");
            li.innerText = json.message[dogBreedKey];
            dogBreedsList.appendChild(li);
            breedCounter++;
        }
    })
}

document.addEventListener("DOMContentLoaded", function() {
    fetchImage();
    fetchBreed();
})