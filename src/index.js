// console.log('%c HI', 'color: firebrick')
breeds = []
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all" 


document.addEventListener("DOMContentLoaded", function () {
    loadImages();
    loadBreeds();
});

function loadImages() {
    fetch(imgUrl)
    .then(results=> results.json())
    .then(results => {
       results.message.forEach(image => newImage(image))
});
}
function newImage(image) {
    let container = document.getElementById('dog-image-container');
    // console.log(container)
    let dogPicA = document.createElement('img');
    // console.log(dogPicA)
    dogPicA.src = image
    // console.log(image)   
}
 function loadBreeds(){
    fetch(breedUrl)
    .then(results=> results.json())
    .then(results => {
        breeds = Object.keys(results.message);
        console.log(breeds)
});
 }