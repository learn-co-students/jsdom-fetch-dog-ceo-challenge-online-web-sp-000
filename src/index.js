console.log('%c HI', 'color: firebrick');

document.addEventListener("DOMContentLoaded", function() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        // Use this data inside of `json` to do DOM manipulation
        const dogBreedArea = document.querySelector("#dog-breeds");
        for (const element of json["message"]) {
            const imgLi = document.createElement("li");
            const imgEl = document.createElement("img");
            imgEl.src = element;
            dogBreedArea.appendChild(imgLi).appendChild(imgEl);
        }
    });

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        // Use this data inside of `json` to do DOM manipulation
        const nextDogBreedArea = document.querySelector("#dog-breeds-two");
        for (const key in json["message"]) { 
            const li = document.createElement("li");
            li.innerText = key;
            nextDogBreedArea.appendChild(li);
            
            li.addEventListener("click", function() {
                li.style.color = "red";
            });
        }
        let drop = document.querySelector("#breed-dropdown");
        drop.addEventListener("click", function() {
            let dropVal = drop.options[drop.selectedIndex].value;
            let arr = nextDogBreedArea.getElementsByTagName("li");
            for (let i = 0; i < arr.length; i++) {
                let word = arr[i].innerText;
                if (word[0] === dropVal) {
                    let filtEl = document.createElement("h2");
                    filtEl.innerText = word;
                    document.body.appendChild(filtEl);
                }
            }
        });
    });
});