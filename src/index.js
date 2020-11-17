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

function filterBreedsByName() {
    const breedDropdown = document.querySelector("#breed-dropdown");
    breedDropdown.addEventListener("change", function(event) {
        //   debugger;
        const breedList = document.querySelector("#dog-breeds");
        //   debugger;
        if (event.target.children[0].selected) {
            // Filter all breeds starting with 'a'
            displaySelectedBreeds(breedList, "a");
        } else if (event.target.children[1].selected) {
            // Filter all breeds starting with 'b'
            displaySelectedBreeds(breedList, "b");
        } else if (event.target.children[2].selected) {
            // Filter all breeds starting with 'c'
            displaySelectedBreeds(breedList, "c");
        } else {
            // Filter all breeds starting with 'd'
            displaySelectedBreeds(breedList, "d");
        }
    })
}

function displaySelectedBreeds(breeds, letter) {
    let filteredBreeds = [];
    for (let i = 0; i < breeds.children.length; i++) {
        if (breeds.children[i].innerText.startsWith(letter)) {
            filteredBreeds.push(breeds.children[i]);
        }
    }
    // Create new ul for filtered dog breeds
    const filteredList = document.createElement("ul");
    filteredList.id = "filtered-breeds";
    filteredBreeds.forEach (breed => {
        filteredList.appendChild(breed);
    });
    // Hide breeds list and show filtered breeds
    breeds.hidden = true;
    breeds.parentNode.insertBefore(filteredList, breeds);
    // breeds.parentNode.insertBefore(filteredList, breeds);
}

document.addEventListener("DOMContentLoaded", function() {
    //  fetchImage();
    fetchBreed();
    changeBreedColorOnClick();
    filterBreedsByName();
})