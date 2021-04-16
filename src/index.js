console.log('%c HI', 'color: firebrick')

let breeds = [];

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        getImages(json.message);
});

function getImages(images){
    images.forEach(function(image){
        addImage(image);
    });
};

function addImage(picUrl) {
    let container = document.querySelector("#dog-image-container");
    let dogImage = document.createElement("img");
    dogImage.src = picUrl;
    container.appendChild(dogImage);
}

const breedUrl = "https://dog.ceo/api/breeds/list/all"
fetch(breedUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        // console.log(json);
        breeds = Object.keys(json.message);
        updateBreeds(breeds);
        addBreedSelectListener();
});

function updateBreeds(breeds) {
    let ul = document.querySelector("#dog-breeds");
    removeChildren(ul);
    breeds.forEach(function(breed) {
        addBreed(breed);
    });
};

function removeChildren(e) {
    let child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

function filterBreedsBy(letter) {
    updateBreeds(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectListener() {
    let breedSelect = document.querySelector("#breed-dropdown");
    breedSelect.addEventListener("change", function(event) {
        filterBreedsBy(event.target.value);
    });
}

function addBreed(breed) {
    let ul = document.querySelector("#dog-breeds");
    let li = document.createElement("li");
    li.innerText = breed;
    ul.appendChild(li);
    li.addEventListener("click", changeColor)
}

function changeColor(event) {
    event.target.style.color = 'green';
}
