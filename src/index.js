// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all" 


document.addEventListener("DOMContentLoaded", function () {
    loadImages();
});

function loadImages() {
    fetch(imgUrl)
    .then(results=> results.json())
    .then(results => {
       results.message.forEach(image => newImage(image))
});
}
function newImage() {
    let container = document.getElementById('dog-image-container');
    // console.log(container)
    let dogPicA = document.createElement('img');
    console.log(dogPicA)

    
}