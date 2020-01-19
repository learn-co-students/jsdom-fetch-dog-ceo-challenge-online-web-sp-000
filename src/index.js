console.log('%c HI', 'color: firebrick')
let allBreeds

document.addEventListener("DOMContentLoaded", function() {
    let breedsCont = document.getElementById("dog-breeds");
    let drop = document.getElementById("breed-dropdown")

    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(resp => resp.json())
        .then(function(json) {
            let imgCont = document.getElementById("dog-image-container");
            imageURLs = json.message;
            for (let i = 0; i < imageURLs.length; i++) {
                let newImg = document.createElement("img");
                newImg.src = imageURLs[i];
                newImg.height = 150;
                imgCont.appendChild(newImg);
            }
        })

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(function(json) {
            allBreeds = json.message;
            for (let breed in allBreeds) {
                let newBreed = document.createElement("li");
                newBreed.innerText = breed;
                breedsCont.appendChild(newBreed);
                if (allBreeds[breed].length != 0) {
                    let newList = document.createElement("ul")
                    newBreed.appendChild(newList)
                    for (let i = 0; i < allBreeds[breed].length; i++) {
                        let subBreed = document.createElement("li")
                        subBreed.innerText = allBreeds[breed][i];
                        newList.appendChild(subBreed);
                    }
                }
            }
        })

    drop.addEventListener("change", function() {
        breedsCont.innerHTML = "";
        for (let breed in allBreeds) {
            if (breed[0] == drop.value) {
                let newBreed = document.createElement("li");
                newBreed.innerText = breed;
                breedsCont.appendChild(newBreed);
                if (allBreeds[breed].length != 0) {
                    let newList = document.createElement("ul")
                    newBreed.appendChild(newList)
                    for (let i = 0; i < allBreeds[breed].length; i++) {
                        let subBreed = document.createElement("li")
                        subBreed.innerText = allBreeds[breed][i];
                        newList.appendChild(subBreed);
                    }
                }
            }
        }
    });
});


