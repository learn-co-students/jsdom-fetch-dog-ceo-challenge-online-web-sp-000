let breeds = 

document.addEventListener("DOMContentLoaded", function() {
    loadImages()
    loadBreeds()
});

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {
        results.message.forEach(image => addImage(image))
    });
};

function addImage(url) {
    const container = document.getElementById('dog-image-container');
    const newImage = document.createElement('img');
    newImage.src = url;
    container.appendChild(newImage);
};

function loadBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(results => {
        for (const breed in results.message)
        addBreed(breed)
    });
};

function addBreed(breed) {
    const breedContainer = document.getElementById('dog-breeds');
    const newBreed = document.createElement('li');
    newBreed.innerText = breed;;
    breedContainer.appendChild(newBreed);
    newBreed.style.cursor = 'pointer';
    newBreed.addEventListener('click', changeColor);
};

function changeColor(event) {
    event.target.style.color = "rgb(83, 114, 84)";
};

function updateBreedList(breeds) {
    let breedContainer = document.getElementById('dog-breeds');
    clearList(breedContainer);
    breeds.forEach(breed => addBreed(breed));
}

function clearList(element) {
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

function filterByBreedFirstLetter(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function selectFilter() {
    const dropdown = document.getElementById('breed-dropdown');
    dropdown.addEventListener('change', function (event) {
        filterByBreed(event.target.value);
    });
};


console.log('%c HI', 'color: firebrick') 