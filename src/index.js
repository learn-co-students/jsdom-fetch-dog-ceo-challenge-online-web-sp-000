console.log('%c HI', 'color: firebrick')
let breed = [];

document.addEventListener('DOMContentLoaded', function (){
    loadImages();
    loadBreedOptions();
});

// Add JavaScript so that:

// on page load
// fetch the images using the url const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// parse the response as JSON
// add image elements to the DOM for each image in the array

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(response => response.json())
        .then(results => {
            results.message.forEach(image => addImage(image))
        });
}

function addImage(dogPicUrl) {
    let container = document.querySelector('#dog-image-container');
    let newImageEl = document.createElement('img');
    newImageEl.src = dogPicUrl;
    container.appendChild(newImageEl);
}

// on page load, fetch all the dog breeds using the url  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
// add the breeds to the page in an <ul> (take a look at the included index.html)

function loadBreedOptions() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(response => response.json())
        .then(results => {
            breeds = Objects.keys(results.message);
            updateBreedList(breeds);
            addBreedSelectListener();
        })
}



// Once we are able to load all of the dog breeds onto the page,
//  add JavaScript so that the user can filter breeds that start with a particular letter
//   using a dropdown.
// For example, if the user selects 'a' in the dropdown, only show the breeds with names
//  that start with the letter a. For simplicity, the dropdown only includes the letters 
// a-d.
//  However, we can imagine expanding this to include the entire alphabet

function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
}

function removeChildren(element) {
    let child = element.lastElement.Child;
    while(child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

function selectBreedStartingWith(letter) {
    updateBreedList(breeds.filter(bredd => breed.startsWith(letter)));
}

function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
        selectBreedStartingWith(event.target.value);
    });
}

// Once all of the breeds are rendered in the <ul>, add JavaScript so that the font color of a particular <li> changes on click.
// This can be a color of your choosing. When the user clicks any of the dog breed list items, the color the text should change.

function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li =document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
}

function updateColor(event) {
    event.target.color = 'palevioletred';
}

