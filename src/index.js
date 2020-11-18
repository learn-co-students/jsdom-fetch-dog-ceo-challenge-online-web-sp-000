console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

const dogBreedStrings = [];

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
    for (let i = 0; i < dogBreedsList.children.length; i++) {
        dogBreedStrings.push(dogBreedsList.children[i].innerText);
    }
}

function changeBreedColorOnClick() {
    const breedList = document.querySelector("#dog-breeds");
    breedList.addEventListener("click", function(event) {
        event.target.style.color = "blue";
    })
}

function filterBreedsByName() {
    const breedDropdown = document.querySelector("#breed-dropdown");
    breedDropdown.addEventListener("change", function(event) {
        if (event.target.children[0].selected) {
            // Filter all breeds starting with 'a'
            displaySelectedBreeds(dogBreedStrings, "a");
        } else if (event.target.children[1].selected) {
            // Filter all breeds starting with 'b'
            displaySelectedBreeds(dogBreedStrings, "b");
        } else if (event.target.children[2].selected) {
            // Filter all breeds starting with 'c'
            displaySelectedBreeds(dogBreedStrings, "c");
        } else {
            // Filter all breeds starting with 'd'
            displaySelectedBreeds(dogBreedStrings, "d");
        }
    })
}

function displaySelectedBreeds(breeds, letter) {
    let filteredBreeds = [];
    for (let i = 0; i < breeds.length; i++) {
        if (breeds[i].startsWith(letter)) {
            filteredBreeds.push(breeds[i]);
        }
    }

    // Remove current dog breeds from the page
    let dogBreeds = document.querySelector("#dog-breeds");
    while (dogBreeds.lastElementChild) {
        dogBreeds.removeChild(dogBreeds.lastElementChild);
        child = dogBreeds.lastElementChild;
    }

    // Append filtered out dog breeds to the page
    let li;
    filteredBreeds.forEach(breed => {
        li = document.createElement("li");
        li.innerText = breed;
        dogBreeds.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    fetchImage();
    fetchBreed();
    changeBreedColorOnClick();
    filterBreedsByName();
})