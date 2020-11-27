console.log('%c HI', 'color: firebrick')
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


function fetchDogs() {
    fetch(imgUrl)
        .then(
            function(response) {
                return response.json();
            })
        .then(
            function(json) {
                statusDogs(json);
            });
}

function statusDogs(json){
    json["message"].forEach(dog => {
        var img = document.createElement('img');
        img.src = dog;
        document.getElementById('dog-image-container').appendChild(img);
    })
}

function breedDogFetch() {
    fetch(breedUrl)
        .then(
            function(response) {
                return response.json();
            })
        .then(
            function(json) {
                dogBreeds(json);
            });
}

function dogBreeds(json){
    Object.keys(json["message"]).forEach(breed => {
        var ele = document.createElement('li');
        ele.innerHTML = breed;
        document.getElementById('dog-breeds').appendChild(ele);
        ele.addEventListener('click', changeColor => {
            ele.style.color = "red";
        })
    })
}

function filterBreeds(){
    document.getElementById('breed-dropdown').addEventListener('selectionchange', filtering => {
        console.log("pre");
    })
        // var eID = document.getElementById("colors");
        // var colorVal = eID.options[eID.selectedIndex].value;
        // var colortxt = eID.options[eID.selectedIndex].text;
        // document.getElementById('colorDiv').style.background=colortxt;
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
    breedDogFetch();
})


