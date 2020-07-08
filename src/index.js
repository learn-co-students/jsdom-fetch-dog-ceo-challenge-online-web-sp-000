console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', () => {
    getDogs();
    allDogs();
    document.addEventListener('click', changeColor);
    document.addEventListener('change', showBreeds(letter));
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


function allDogs() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(data => {
            console.log('allDogs', Object.keys(data.message));
            const breeds = Object.keys(data.message);
            for (const breed of breeds) {
                console.log('breed', breed);
                    let li = document.createElement("li");
                    li.innerText = breed;
                    let ul = document.getElementById("dog-breeds");
                    ul.appendChild(li);
            }
        })
}

function changeColor(element) {
    if(element.target.tagName === 'LI') {
        element.target.style.color = "Purple";
    }
}

// function showBreeds(letter) {
//     let dogs = ??;
//     for(let i = 0; i < //length of dog names array ; i++) {
//         if(dogs[i] === letter) {
//             // show dog name
//         }
//     }
// }


