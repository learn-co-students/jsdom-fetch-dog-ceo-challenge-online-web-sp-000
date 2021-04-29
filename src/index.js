console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    loadImages();
    loadBreeds();
});

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(result => {
            result.message.forEach(element => addNewImage(element))
    })
}

function addNewImage(url) {
    let container = document.getElementById("dog-image-container")
    let newImage = document.createElement('img');
    newImage.setAttribute('src', url);
    container.appendChild(newImage);
}

function loadBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(response => response.json())
        .then(result => {
            let keys = Object.keys(result.message);
            addToBreedList(keys);
            breedDropDownListener();
        })
}

function addToBreedList(breeds) {
    let list = document.getElementById("dog-breeds")
    list.innerHTML = ""
    breeds.forEach(breed => createBreedLi(breed))
}

function createBreedLi(breed) {
    let list = document.getElementById("dog-breeds");
    let li = document.createElement("li");
    li.innerText = breed;
    li.addEventListener("click", changeColor)
    list.appendChild(li);
}

function changeColor(click) {
        click.target.style.color = "red";
}


function getBreedsListByLis() {
    const list = document.getElementsByTagName("li")
    const breedList = []
    for (const item of list) {
    breedList.push(item.innerText)
    }
    return breedList
}

function selectBreedsByLetter(letter) {
    const breeds = getBreedsListByLis();
    const newList = []
    for (const name of breeds) {
        if (name.charAt(0) == letter) {
            newList.push(name);
        }
    }
    addToBreedList(newList);
}

function  breedDropDownListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsByLetter(event.target.value);
    });
}