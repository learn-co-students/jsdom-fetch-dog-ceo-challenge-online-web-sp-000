console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';


function createImgs(imgUrls) {
    const dogImageContainer = document.querySelector('#dog-image-container');
    // console.log(imgUrls)
    for (const imgUrl of imgUrls) {
        const imgNode = document.createElement('img')
        imgNode.setAttribute('src', imgUrl)
        imgNode.setAttribute('width', '25%')
        dogImageContainer.appendChild(imgNode)
    }
}


function fetchImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => createImgs(json['message']))
}

function changeColor(node) {
    node.style.color = 'blue';
}

function listBreeds(breeds) {
    const breedsList = document.querySelector('#dog-breeds');

    for (const key in breeds) {
        const liNode = document.createElement('li')
        liNode.innerText = key
        liNode.addEventListener('click', () => {
            changeColor(liNode);
        })
        const innerUl = document.createElement('ul')
        for (const breed in breeds[key]) {
            secondLevelLiNode = document.createElement('li')
            secondLevelLiNode.innerText = breed
            secondLevelLiNode.addEventListener('click', () => {
                changeColor(secondLevelLiNode)
            })
            innerUl.appendChild(secondLevelLiNode)
        }
        
        liNode.appendChild(innerUl)
        breedsList.appendChild(liNode)
    }
}

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => listBreeds(json['message']))
}

function filterBreeds(selectedOption) {
    const breedsList = document.querySelector('#dog-breeds');
}

document.addEventListener('DOMContentLoaded', () => {
    fetchImages()
    fetchBreeds()
    const selectNode = document.querySelector('#breed-dropdown');
    selectNode.addEventListener('change', (e) => {
        const selectedOption = e.target.value
        filterBreeds(selectedOption)
    });
})