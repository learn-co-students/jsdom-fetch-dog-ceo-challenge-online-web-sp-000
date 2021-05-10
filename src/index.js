console.log('%c HI', 'color: firebrick');

let breeds = [];

document.addEventListener('DOMContentLoaded', function () {
    //remember, that 'function' is an actual command, not an arbitrary name
    loadImg();
    loadBreeds();
});

// sets up functions to run as soon as the DOM is loaded 

// ###### IMAGE FUNCTIONS FOLLOW ######

function loadImg() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    // URL to fetch
    fetch(imgUrl)
    .then(res=> res.json())
    .then(results => {
    // Fetch the URL, turn the URL's contents into JSON, then do stuff to it
         results.message.forEach(image => addImg(image))    
        // For each image load it into the DOM using the "addImg" function
    });
};

function addImg(doggo) {
    let container = document.querySelector('#dog-image-container');
    // Remember the querySelector method needs the # in front of the class tag
    let newImg = document.createElement('img');
    // Remember to create the element before you stick something in it
    newImg.src = doggo; 
    // <img src="image">
    container.appendChild(newImg);
    // shove the <img src="image"> into the tag with the right class
};

// ###### BREED LIST FUNCTIONS FOLLOW ######

function loadBreeds() {
    const breedURL = "https://dog.ceo/api/breeds/list/all";
    // URL with the goods 
    fetch(breedURL).then(res => res.json()).then (
        results => {
            breeds = Object.keys(results.message);
            // assigns the results as keys in a new 'breeds' object
            updateBreeds(breeds);
            addBreedSelectListener();
        });
}

function updateBreeds(breeds) {
    let ul = document.querySelector("#dog-breeds");
    // select the right element, remember the # for the class tag
    //ul.children.forEach(child => child.delete?)
    //no
    removeChildren(ul);
    // clear out the list
    breeds.forEach(breed => addBreed(breed));
    // iterate over teh array and add each one again
}

function addBreedSelectListener() {
    let breedMenu = document.querySelector("#breed-dropdown");
    // Grab the class id again
    breedMenu.addEventListener('change', function (event) {
        selectBreedLetter(event.target.value);
    });
    // on change (which is code speak for picking the menu item in the dropdown) do the thing Zhu Li
    //In this case the thing is the function selectBreedLetter with an argument of whatever the target value is.
}

function selectBreedLetter(letter) {
    updateBreeds(breeds.filter(breed => breed.startsWith(letter)));
    // 
}

// function updateBreeds(breeds) {
//     let ul = document.querySelector("#dog-breeds");
//     // select the right element, remember the # for the class tag
//     //ul.children.forEach(child => child.delete?)
//     //no
//     removeChildren(ul);
//     // clear out the list
//     breeds.forEach(breed => addBreed(breed));
//     // iterate over teh array and add each one again
// }

function addBreed(breed) {
// remember you have to do this the long way around. annoying, isn't it.
    let ul = document.querySelector('#dog-breeds');
    //choose the ul class tag that has all the breeds in it, it's the same as in update
    let li = document.createElement('li');
    li.innerText = breed;
    ul.appendChild(li);
    li.addEventListener('click', changeColor);
}

function removeChildren(el) {
    let child = el.lastElementChild;
    while (child) {
        el.removeChild(child);
        child = el.lastElementChild;
        // As long as there is a child element, grab the next child of the element and bahleet it. 
    }
}

function changeColor(click) {
    click.target.style.color = 'hotpink';
}




