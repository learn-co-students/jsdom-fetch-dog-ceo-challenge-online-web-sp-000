console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    addImages();
    addBreeds();
    addFilterEvent();
});

function addImages() {
    const imgJsonUrl = "https://dog.ceo/api/breeds/image/random/4"
    const imgContainer = document.getElementById('dog-image-container');

    fetch(imgJsonUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        const imgUrls = json.message;

        for (const imgUrl of imgUrls) {
            const imgElement = document.createElement('img');
            imgElement.setAttribute('src', imgUrl);
            imgContainer.appendChild(imgElement);
        }
    })
}

function addBreeds() {
    const breedJsonUrl = "https://dog.ceo/api/breeds/list/all"

    fetch(breedJsonUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        const breeds = json.message;

        for (const breed in breeds) {
            if (breeds[breed].length > 0) {
                for (const subBreed of breeds[breed]) {
                    const fullBreedName = `${subBreed} ${breed}`;
                    appendBreed(fullBreedName);
                }
            } else {
                appendBreed(breed);
            }
        }

        makeBreedsPinkable();
    })
}

function addFilterEvent() {
    const dropdown = document.getElementById('breed-dropdown');
    dropdown.addEventListener('change', filterBreeds);
}

function appendBreed(name) {
    const breedContainer = document.getElementById('dog-breeds');
    let newBreedElement = document.createElement('li');
    newBreedElement.innerText = name;
    breedContainer.appendChild(newBreedElement);
}

function makeBreedsPinkable() {
    const breeds = document.querySelectorAll('ul#dog-breeds li');

    for (const breed of breeds) {
        breed.addEventListener('click', function() {
            breed.style.color = 'pink';
        })
    }
}

function filterBreeds() {
    const dropdown = document.getElementById('breed-dropdown');
    let breeds = document.querySelectorAll('ul#dog-breeds li');
    let filter = dropdown.value;

    for (const breed of breeds) {
        if (breed.innerText[0] == filter) {
            breed.style.display = 'list-item';
        } else {
            breed.style.display = 'none';
        }
    }
}