console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breeds = [];

function fetchImages(url) {
    return fetch(url) 
    .then(resp => resp.json())
    .then(json => {
        json.message.forEach(image => postImages(image)) 
    });
}

function postImages(image) {
    let div = document.getElementById("dog-image-container");
    let imgElem = document.createElement("img");
    imgElem.src = image
    div.appendChild(imgElem)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchImages(imgUrl);
    fetchBreeds();
});

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(list => { breeds = Object.keys(list.message);
        addBreedsToList(breeds);
    });
}

function addBreedsToList(breeds) {
    breeds.forEach(breed => {
        let breedList = document.getElementById("dog-breeds");
        let list = document.createElement("li");
        let breedClass = document.createAttribute("class");
        breedClass.value = "breed";
        list.setAttributeNode(breedClass);
        list.innerText = breed;
        removeChildren(breedList)
        breedList.appendChild(list);
        list.style.cursor = 'pointer'
        list.addEventListener("click", changeColor)
        addSelectListener();
    })
}

function changeColor(e) {
    e.target.style.color = "red";
}

function removeChildren(element) {
    let child = element.firstElementChild;
    while (child) {
      element.removeChild(child);
      child = element.firstElementChild;
    }
  }

function selectBreeds(letter) {
    addBreedsToList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
function addSelectListener() {
    let selectLetter = document.querySelector('#breed-dropdown');
    selectLetter.addEventListener('change', function () {
      selectBreeds(selectLetter.value);
    });
  }