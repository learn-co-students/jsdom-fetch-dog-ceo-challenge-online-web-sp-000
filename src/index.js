Skip to content
Search or jump to…

Pulls
Issues
Marketplace
Explore
 
@sjcondon 
chayadeaver
/
jsdom-fetch-dog-ceo-challenge-online-web-pt-090919
forked from learn-co-students/jsdom-fetch-dog-ceo-challenge-online-web-pt-090919
0
016
Code
Pull requests
Actions
Projects
Security
Insights
jsdom-fetch-dog-ceo-challenge-online-web-pt-090919/src/index.js /
@chayadeaver
chayadeaver Done.
Latest commit 02ca513 on Mar 29
 History
 2 contributors
@chayadeaver@realAndrewCohn
96 lines (80 sloc)  2.41 KB
  
console.log('%c HI', 'color: firebrick')



document.addEventListener("DOMContentLoaded", (e) => {
    fetchImages();
    fetchBreeds();
})

let imageContainer;
let imageTag;
let breedList;
let breedLiTag;
let allBreeds;
let selectBox;

function fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => {
        return res.json();
    })
    .then(json => {
        renderImages(json);
    })

    function renderImages(json) {
        imageContainer = document.querySelector("div#dog-image-container");
        json.message.forEach(image_url => {
            imageTag = document.createElement("img");
            imageTag.setAttribute("src", `${image_url}`);
            imageContainer.appendChild(imageTag);
        });
    }
}

function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => {
        return res.json();
    })
    .then(json => {
        renderBreeds(json);
        filterBreeds();

    })

    breedList = document.querySelector("ul#dog-breeds");

    function renderBreeds(json) {
        for (let value of Object.keys(json.message)) {
            breedLiTag = document.createElement("li");
            breedLiTag.addEventListener("click", textColorChange);
            breedLiTag.textContent = value;
            if (breedLiTag.textContent === "") {
                continue;
            } else {
                breedList.appendChild(breedLiTag);
            }
        }
        function textColorChange() {
            this.style.color = "#5E79C6";
        }
    }

    function filterBreeds() {
        allBreeds = breedList.querySelectorAll("li");
        selectBox = document.querySelector("select#breed-dropdown");

        selectBox.addEventListener("change", setFilter);

        function setFilter(e) {
            let option = e.target.value;
            let i = 0;
            while (i < allBreeds.length) {
                let thisLi = allBreeds[i];
                if (option === "all") {
                    showBreedIn(thisLi);
                } else if (thisLi.textContent[0] === option) {
                    showBreedIn(thisLi);
                } else {
                    hideBreedIn(thisLi);
                }
                i++
            }
            function showBreedIn(arg) {
                arg.style.display = "block";
            }

            function hideBreedIn(arg) {
                arg.style.display = "none";
            }
        }
    }
}


