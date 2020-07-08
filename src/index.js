console.log('%c HI', 'color: firebrick')

let breedDropdown = document.querySelector("#breed-dropdown")

document.addEventListener('DOMContentLoaded', () => {
    getDogs();
    allDogs();
    document.addEventListener('click', changeColor);
    breedDropdown.addEventListener('onChange', filterDogs);
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

const breeds = [];

function allDogs() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(data => {
            console.log('allDogs', Object.keys(data.message));
            breeds = Object.keys(data.message);
            for (const breed of breeds) {
                console.log('breed', breed);
                    addBreed(breed);
                    // let li = document.createElement("li");
                    // li.innerText = breed;
                    // let ul = document.getElementById("dog-breeds");
                    // ul.appendChild(li);
            }
        })
}

function changeColor(element) {
    if(element.target.tagName === 'LI') {
        element.target.style.color = "Purple";
    }
}

// function showBreeds(letter) {
//     // let dogs = ??;
//     for(let i = 0; i < //length of dog names array ; i++) {
//         if(dogs[i] === letter) {
//             // show dog name
//         }
//     }
// }

function addBreed(breed) {
    let li = document.createElement("li");
    li.innerText = breed;
    let ul = document.getElementById("dog-breeds");
    ul.appendChild(li);
}

function filterDogs(event) {
    console.log("hello");
    console.log(event.target.value);
}


