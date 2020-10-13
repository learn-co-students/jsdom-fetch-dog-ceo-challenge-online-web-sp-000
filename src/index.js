document.addEventListener('DOMContentLoaded', function() {
    console.log('%c HI', 'color: firebrick')

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl) 
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        // return console.log(json.message);
        createImages(json);
    })

    function createImages(json) {
        const images = json.message;
        let div = document.getElementById('dog-image-container');

        for (const link of images) {
            let img = document.createElement('img');
            img.src = link;
            div.appendChild(img)
        }
    }

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl) 
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createBreeds(json);
    })

    function createBreeds(json) {
        const breeds = json.message;
        let ul = document.getElementById('dog-breeds');

        for (const breedName in breeds) {
            // each element is an array...now what do i do? 
            if (breeds[breedName] != "") {
                for (const name of breeds[breedName]) {
                    let li = document.createElement('li');
                    let entry = name + ' ' + breedName;
                    li.textContent = entry;
                    li.setAttribute('id', entry);
                    ul.appendChild(li);
                    li.addEventListener('click', function(e) {
                        if (li.style.color == 'blue') {
                            li.style.color = 'black'; 
                        } else {
                        li.style.color = 'blue';
                        }
                    });
                }
            } else {
                let li = document.createElement('li');
                li.textContent = breedName;
                li.setAttribute('id', breedName);
                ul.appendChild(li);
                li.addEventListener('click', function(e) {
                    if (li.style.color == 'blue') {
                        li.style.color = 'black'; 
                    } else {
                    li.style.color = 'blue';
                    }
                });
            }
        }
    }

    let dropdown = document.getElementById('breed-dropdown');

    dropdown.onchange = function() {
        let x = dropdown.value;
        let allBreeds = document.getElementsByTagName('li')

        for (let i = 0; i < allBreeds.length; i++ ) {
            let newList = document.createElement('ul')
            if (allBreeds[i].textContent.startsWith(x)) {
                allBreeds[i].style.display = "list-item";
            } else {
                allBreeds[i].style.display = "none";
            }
        }
    }

});