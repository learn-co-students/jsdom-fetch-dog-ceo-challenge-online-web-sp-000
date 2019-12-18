console.log('%c HI', 'color: firebrick')

let breeds = []

document.addEventListener('DOMContentLoaded', function() {
    loadImages();
    loadBreedOptions();
});

function loadImages() {
    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
    fetch(imgUrl)   //takes the above api URL and passes it as an argument for fetch()
    .then(res => res.json())    //converts the api info using json (js object notation)
    .then(results => {  //then, takes those results and sets it as the final outcome forEach image
        results.message.forEach(image => addImage(image))   //takes each image and sets it to the addImage function results
    });
}

function addImage(dogPicUrl) {
    let container = document.querySelector('#dog-image-container'); //sets the container equal to the querySelector (see index.html)
    let newImageEl = document.createElement('img'); //creating the element, img to show each image
    newImageEl.src = dogPicUrl; //sets each image src equal to the passed-in argument (see function above)
    container.appendChild(newImageEl);
  }

function loadBreedOptions() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl) //takes the above api URL and passes it as an argument for fetch()
    .then(res => res.json())    //converts the api info using json (js object notation)
    .then(results => {  //then, takes those results and sets it as the final outcome forEach image
        breeds = Object.keys(results.message);  //Object.keys puts the results into an array for the breeds array (at the top)
        updateBreedList(breeds);    //calls this function that passes breeds as an argument
        addBreedSelectListener();   //calls this function
    });
}

function updateBreedList(breed) {
    let ul = document.querySelector('#dog-breeds'); //setting ul equal to #dog-breeds (see index.html)
    removeChildren(ul); //calls this function that passes ul as an argument
    breeds.forEach(breed => addBreed(breed));   //takes each breed and sets it to the addBreed function results
}

function removeChildren(element) {
    let child = element.lastElementChild;   //sets child = lasElementChild JS property (retrieves the last element in the ul)
  while (child) {   //the while loop will run until each "last element" (which means every child) is removed
    element.removeChild(child); //removeChile is a JS property to physically remove the last child
    child = element.lastElementChild;   //spits out loop results
  }   
}

function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  } //filters the breeds using JS startsWith method (which will filter if true)

  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');  //grabbing the "dropdown" id from index.html
    breedDropdown.addEventListener('change', function (event) { //listening for a change in event
      selectBreedsStartingWith(event.target.value); //when change is made, runs this function (see above) to capture value
    });
  }
  
  function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds'); //grabbing ul from index.html
    let li = document.createElement('li');  //crating the li element for index
    li.innerText = breed;   //setting the li text to passed-in argument, which this function is used above
    li.style.cursor = 'pointer';    //styling the pointer
    ul.appendChild(li); //"appending" the li to ul
    li.addEventListener('click', updateColor);  //on click, the updateColor function will run
  }
  
  function updateColor(event) {
    event.target.style.color = 'palevioletred'; //changes the li color to "palevioletred" yuck.
  }