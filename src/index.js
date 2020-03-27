console.log('%c HI', 'color: firebrick')

let breeds = []

document.addEventListener('DOMContentLoaded', function(){
    fetchImages()
    fetchBreeds()
})

function fetchImages() {
    const imageUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imageUrl)
        .then(resp => resp.json())
        .then(json => {json.message.forEach(image => addImage(image))})
}

function addImage(dogImage) {
    let imageContainer = document.getElementById("dog-image-container")
    let newImageElement = document.createElement("img")

    newImageElement.src = dogImage
    imageContainer.appendChild(newImageElement)
}

function fetchBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(results => { 
            breeds = Object.keys(results.message);
            updateBreedList(breeds);
            addBreedSelectListener();
        });
}

function updateBreedList(breeds) {
    let ul = document.getElementById("dog-breeds");
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
}

function removeChildren (element) {
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

function addBreed(breed) {
    let ul = document.getElementById("dog-breeds")
    let li = document.createElement("li")

    li.innerHTML = breed
    li.style.cursor = 'pointer'
    ul.appendChild(li)
    li.addEventListener('click', changeColor)
}

function changeColor(event) {
    event.target.style.color = "red";
}

function addBreedSelectListener() {
    let breedDropdown = document.getElementById("breed-dropdown")
    breedDropdown.addEventListener("change", function(event) {
        selectBreedsStartingWith(event.target.value)
    })
}

function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)))
}

function addValuesToDropdown() {
    let list = document.getElementById("breed-dropdown")
    for (i = 0; )
    let option = document.createElement("option")


}
