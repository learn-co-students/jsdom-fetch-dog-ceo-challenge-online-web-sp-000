console.log('%c HI', 'color: firebrick')

// let breedDropdown = document.querySelector("#breed-dropdown")

document.addEventListener('DOMContentLoaded', () => {
    getDogs();
    allDogs();
    let breedDropdown = document.querySelector("#breed-dropdown")
    dropDownArray = [...Array(26)].reduce(a => a + String.fromCharCode(i++), '', i = 97).split("");
    dropDownArray.shift();
    dropDownArray.shift();
    dropDownArray.shift();
    dropDownArray.shift();
    for(let i = 0; i < dropDownArray.length; i++) {
        let opt = document.createElement('option');
        opt.innerText = dropDownArray[i];
        breedDropdown.appendChild(opt);
    }

    document.addEventListener('click', changeColor);
    breedDropdown.addEventListener('change', filterDogs);
})


function getDogs(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(data => {
            for (const element of data.message) {
                let img = document.createElement("img");
                img.src = `${element}`;
                let src = document.getElementById("dog-image-container");
                src.appendChild(img);
            }
        })
}

let breeds = [];

function allDogs() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(data => {
            console.log('allDogs', Object.keys(data.message));
            breeds = Object.keys(data.message);
            for (const breed of breeds) {
                    addBreed(breed);
            }
        })
}

function changeColor(element) {
    if(element.target.tagName === 'LI') {
        element.target.style.color = "Purple";
    }
}

function addBreed(breed) {
    let li = document.createElement("li");
    li.innerText = breed;
    let ul = document.getElementById("dog-breeds");
    ul.appendChild(li);
}

function filterDogs(event) {
    let ul = document.getElementById("dog-breeds");
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }

    for(let i = 0; i < breeds.length; i++) {
        if (breeds[i].charAt(0) === event.target.value){
            addBreed(breeds[i])
        }
    }
}


