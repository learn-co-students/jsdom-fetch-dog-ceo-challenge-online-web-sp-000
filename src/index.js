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
    let dogPicA = document.createElement('img');
    dogPicA.src = image
    container.append(dogPicA)
}

function loadBreeds(){
    fetch(breedUrl)
    .then(results=> results.json())
    .then(results => {
        breeds = Object.keys(results.message);
        updateBreedList(breeds);
        selectListener();
    });
}

function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    ul.querySelectorAll('*').forEach(n => n.remove());
    breeds.forEach(breed => addBreed(breed));    
   }
 

function addBreed(breed){
    
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    ul.appendChild(li)
    li.addEventListener('click', () => {li.style.color='red'});
    // console.log(breed)
 }

 function filterBreeds(letter){
     
    updateBreedList(breeds.filter(breed => breed.startsWith(letter))
    );
}
 
function selectListener() {
let breedDropDown = document.getElementById('breed-dropdown');
    breedDropDown.addEventListener('change', (event) => {
    
        filterBreeds(event.target.value);
        // console.log(event.target.value)
         });

}
    

