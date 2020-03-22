console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    loadImages();
    loadDogBreeds();
    selectedLetter();
})


function loadImages() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(json => addImages(json.message))
}

function addImages(json) {
    for (const key in json) {
        element = document.createElement('img');
        element.src = json[key];
        document.querySelector("div#dog-image-container").appendChild(element);
    }
}

function loadDogBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    return fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => addBreeds(json.message))
}

function addBreeds(json) {
    for (const key in json) {
        li = document.createElement('li');
        ul = document.querySelector("ul#dog-breeds")
        li.innerHTML = key;
        ul.appendChild(li);
        li.addEventListener('click', changeColor)
    }
}

function changeColor(event) {
    event.target.style.color = 'purple';

}

function selectedLetter() {
    const dropdown = document.querySelector("#breed-dropdown");
    dropdown.addEventListener('change', function(event) {
        changeLetter(event.target.value);
    });
}

function changeLetter(letter) {
    items = document.getElementsByTagName('li')
    for (const li of items) {
        li.style.visibility = 'visible';
        if (li.innerText.startsWith(letter)) {
            li.style.visibility = 'visible'
        } else {
            li.style.visibility = 'hidden'
        }
        console.log(letter)
    }
}