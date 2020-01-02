document.addEventListener('DOMContentLoaded', function() {
    loadImages();
    addDogBreeds();
    let dogList = document.querySelector('#breed-dropdown');

    dogList.addEventListener('change', (event) => {
        removeDogs();
        listDogsWithLetter(event.target.value);
    });
    
});

function loadImages () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then(result => {
        return result.json();
    })
    .then(object => {
        for (i = 0; i < object.message.length; i++) {
            let image = document.createElement('img');
            image.src = object.message[i];
            let list = document.querySelector('#dog-image-container')
            list.appendChild(image)
        }
    })
}

function addDogBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
    .then(result => {
        return result.json();
    })
    .then(object => {
        breeds = (Object.keys(object.message));
        for (i = 0; i < breeds.length; i++) {
            let list = document.querySelector('#dog-breeds')
            let li = document.createElement('li');
            li.addEventListener('click', function() {
                this.style.color = 'purple';
            })
            li.innerText = breeds[i];
            list.appendChild(li)
        }  
    })
}

function listDogsWithLetter(letter) {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
    .then(result => {
        return result.json();
    })
    .then(object => {
        console.log(letter)
        breeds = (Object.keys(object.message));
        for (i = 0; i < breeds.length; i++) {
            if (breeds[i][0] == `${letter}`) {
                var list = document.querySelector('#dog-breeds');
                let li = document.createElement('li');
                li.addEventListener('click', function() {
                    this.style.color = 'purple';
                })
                li.innerText = breeds[i];
                list.appendChild(li)
            }
        }  
    })
}

const dogList2 = document.querySelector('#breed-dropdown');

dogList2.onchange = function() {
    console.log('hello!');
}

function removeDogs() {
    document.querySelector('#dog-breeds').innerHTML = '';
}

