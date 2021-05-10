console.log('%c HI', 'color: firebrick');

document.addEventListener('DOMContentLoaded', callbackfunc () {
    loadImg();
});

// sets up functions to run as soon as the DOM is loaded 

function loadImg() {
    const imgURL = "https://dog.ceo/api/breeds/image/random/4"
    // URL to fetch
    fetch(imgURL).then(res=> res.json()).then(
    // Fetch the URL, turn the URL's contents into JSON, then do stuff to it
        results => { results.message.forEach(image => addImg(image)) }
        // For each image load it into the DOM using the "addImg" function
    );
};

function addImg(image) {
    let container = document.querySelector('#dog-image-container');
    // Remember the querySelector method needs the # in front of the class tag
    let newImg = document.createElement('img');
    // Remember to create the element before you stick something in it
    newImg.src = image; 
    // <img src="image">
    container.appendChild(newImg);
    // shove the <img src="image"> into the tag with the right class
};

function loadBreeds() {
    const breedURL = "https://dog.ceo/api/breeds/list/all";
    // URL with the goods 
    fetch(breedURL).then(res => res.json()).then (
        results => {
            breeds = Object.keys(results.message);
            // assigns the results as keys in a new 'breeds' object

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

function addBreed(breed) {
// remember you have to do this the long way around. annoying, isn't it.
    let ul = document.querySelector('#dog-breeds');
    //choose the ul class tag that has all the breeds in it, it's the same as in update
    let li = document.createElement('li');
    li.innerText = breed;
    ul.appendChild(li);
    li.addEventListener('click', changeColor);
}

function removeChild(el) {
    let child = el.lastElementChild;
    while (child) {
        el.removeChild(child);
        child = el.lastElementChild;
        // As long as there is a child element, grab the next child of the element and bahleet it. 
    }
}

function changeColor(click) {
    click.target.style.color = 'lightblue';
}




