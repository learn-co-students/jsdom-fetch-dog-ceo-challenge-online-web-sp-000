console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl)
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        for (const element of json.message) {
            const div = document.getElementById('dog-image-container');
            let img = document.createElement('img');
            img.src = element;
            div.append(img);
        }
    });

fetch(breedUrl)
    .then(function (response) {
        return response.json();
    }).then(results => {
        console.log(results.message);
        let breeds = Object.keys(results.message);
        makeBreeds(breeds);
        changeColor();
        changeDisplay();
    });

function makeBreeds(breed) {
    breed.forEach(element => {
        const ul = document.getElementById('dog-breeds');
        let li = document.createElement('li');
        li.innerText = element;
        ul.appendChild(li);

    });
}

function changeColor() {
    const listItems = document.querySelectorAll('li');
    listItems.forEach(function (listItem) {
        listItem.addEventListener('click', function () {
            this.style.color = 'red';
        });
    });
}

function changeDisplay() {
    selected = document.getElementById('breed-dropdown').selectedOptions[0].value
    const listItems = document.querySelectorAll('li');
    listItems.forEach(function (listItem) {
        if (listItem.innerText[0] != selected) {
            listItem.style.display = "none";
        };
    });
}

document.addEventListener('change', function () {
    selected = document.getElementById('breed-dropdown').selectedOptions[0].value
    const listItems = document.querySelectorAll('li');
    listItems.forEach(function (listItem) {
        if (listItem.innerText[0] != selected) {
            listItem.style.display = "none";
        } else {
            listItem.style.display = "";
        };
    });
});