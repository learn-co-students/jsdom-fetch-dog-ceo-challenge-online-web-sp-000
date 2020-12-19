let breeds

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderImages(json.message));
};

function renderImages(json) {  
    const divDogs = document.getElementById("dog-image-container");
    
    json.forEach(src => {
        const img = document.createElement('IMG');
        img.setAttribute("src", src);
        divDogs.appendChild(img);
    })
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(function(json) {
            
            breeds = json.message;
            
            const dropDown = document.getElementById("breed-dropdown");
            dropDown.addEventListener('change', filter)

            for (const breed in json.message) {
                addBreed(breed);
            }
        });
}

function addBreed(breed) {
    const ulBreeds = document.getElementById("dog-breeds");
    const newLi = document.createElement("li");
    
    newLi.innerText = breed;
    newLi.addEventListener("click", changeColor);
    ulBreeds.appendChild(newLi);
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function filter(e) {
    const filterLetter = e.target.value;
    const ulBreeds = document.getElementById("dog-breeds");

    removeAllChildren(ulBreeds);

    for (const breed in breeds) {
        if (breed[0] == filterLetter) {
            addBreed(breed);
        }
    }
}

function changeColor(e) {
    e.target.style.color = 'red';
}

document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
});