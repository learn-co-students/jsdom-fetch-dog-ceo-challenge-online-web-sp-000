// First I need to initiate the functions upon loading the DOM
// loadImages()
    // I need to retrieve JSON that I can iterate over
    // I need to write a function that will create img tags for the retrieved images and append them to the div id="dog-image-container"
let breedArray = [];

document.addEventListener("DOMContentLoaded", function() {
    loadDogImages();
    loadDogBreeds();
})

function loadDogImages() {
    const imagesUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imagesUrl)
        .then(response => response.json())
        .then(results => {
            results.message.forEach(imgSrc => addImage(imgSrc))
        });
}

function addImage(url) {
    let dogDiv = document.getElementById("dog-image-container");
    let dogImg = document.createElement("img");

    dogImg.src = url;
    dogDiv.appendChild(dogImg);
}

function loadDogBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl)
        .then(response => response.json())
        .then(results => {
            breedArray = Object.keys(results.message);
            listBreeds(breedArray);
        })
    setDropDownListener();
}

function listBreeds(array) {
    breedUl = document.getElementById("dog-breeds");
    breedUl.innerHTML = ""; // start with an empty ul

    array.forEach(breed => {
        breedLi = document.createElement("li");
        breedLi.innerText = breed;
        breedLi.style.cursor = 'pointer';
        breedLi.addEventListener("click", changeColor)
        breedUl.appendChild(breedLi);
    })    
}

function changeColor(event) {
    event.target.style.color = "cornflowerblue";
}

// 1. capture select value from dropdown
// 2. send this value to a function that will filter the breedArray for breeds that start with that letter.
// 3. Update the ul with the new array

function setDropDownListener() {
    const breedDropDown = document.getElementById("breed-dropdown");
    breedDropDown.addEventListener("change", function(event){
        letter = event.target.value; 
        filterBreedList(letter);   
    })

}

function filterBreedList(letter) {
    filteredBreedArray = breedArray.filter(breed => breed.startsWith(letter));
    listBreeds(filteredBreedArray);
}


