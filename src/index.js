console.log('%c HI', 'color: firebrick')

const dogList = document.getElementsByTagName('li');

function getDogPhotos() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => loadDogPhotos(json.message))
};

function getDogBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => loadDogBreeds(json.message))
};

function loadDogPhotos(dogs) {
    const dogList = document.getElementById("dog-image-container");
    for (const element of dogs) {
        let img = document.createElement('img');
        img.src = element;
        dogList.appendChild(img);
    };
};

function loadDogBreeds(breeds) {
    const breedList = document.getElementById("dog-breeds");
    for (const key in breeds) {
        let li = document.createElement('li');
        li.innerText = key;
        if (breeds[key] !== []) {
            let subList = document.createElement('ul');
            for (const element of breeds[key]) {
                let subListItem = document.createElement('li');
                subListItem.className = 'sublist';
                subListItem.innerText = element;
                subList.appendChild(subListItem);
                li.innerHTML = key + subList.outerHTML;
            };
        }
        breedList.appendChild(li);
    };
    loadColorChanger();
}

function loadColorChanger() {
    for (const item of dogList) {
        item.addEventListener('click', () => {
            if (item.style.color == 'green') {
                item.style.color = 'black';
            } else {
                item.style.color = 'green';
            };
        });
    };
};

function dogSelector() {
    const breedSelector = document.getElementById('breed-dropdown');
    breedSelector.addEventListener('input', () => {
        for (item of dogList) {
            if (item.innerText[0] !== breedSelector.value && item.className !== 'sublist') {
                item.hidden = true;
            } else {
                item.hidden = false;
            };
        };
    });
};

document.addEventListener('DOMContentLoaded', () => {
    getDogPhotos();
    getDogBreeds();
    dogSelector();
});