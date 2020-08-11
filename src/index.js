console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function loadImages() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {
        results.message.forEach(image => addImage(image))
    });
}

function addImage(picUrl) {
    const container = document.getElementById("dog-image-container");
    const newImage = document.createElement("img");
    newImage.src = picUrl;
    container.appendChild(newImage);
}

function loadBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(results => {
        const breeds = Object.keys(results.message);
        addBreeds(breeds);
    })
}

function addBreeds(breeds) {
    const ul = document.getElementById("dog-breeds");
    breeds.forEach(breed => {
        const li = document.createElement("li");
        li.innerText = breed;
        ul.appendChild(li);
        li.addEventListener('click', function(e) {
            e.target.style.color = "blue";
        });
    });
}