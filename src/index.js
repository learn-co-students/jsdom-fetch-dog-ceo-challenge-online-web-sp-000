//console.log('%c HI', 'color: firebrick')


let dogBreedArray = []


window.addEventListener('DOMContentLoaded', (event) => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    //let images = [];

    function getImages() {

        return fetch('https://dog.ceo/api/breeds/image/random/4')
            .then(function(response) {
            return response.json();
            })
            .then(function(json) {
                json["message"].forEach(element => {
                    let img = document.createElement("IMG")
                    img.src = element
                    document.getElementById('dog-image-container').appendChild(img)
                    //debugger;
                });
             
            });
    }

    getImages()
    
    

    function fetchDogBreeds() {
        return fetch('https://dog.ceo/api/breeds/list/all')
        .then(function(response) {
        return response.json();
        })
        .then(function(json) {
            for (const key in json["message"]) {
                let dogBreed = document.createElement("li")
                //debugger
                
                dogBreed.id = key
                dogBreed.innerText = key
                document.getElementById('dog-breeds').appendChild(dogBreed)
                dogBreedArray.push(key)
                //debugger;
                document.getElementById(key).addEventListener("click", function() {
                    document.getElementById(key).setAttribute("style", "color: green;")
                })
            }          
                //debugger; 
         
        });

        
    }

    fetchDogBreeds();
    
    

    
});

window.addEventListener("change", (event) => {

    let ul = document.getElementById('dog-breeds')

    function removeBreeds() {
        

        while(ul.firstChild) {
            ul.removeChild(ul.firstChild)

        }
    }

    removeBreeds()

    let breedOption = document.getElementById('breed-dropdown').value

    function selectDogBreeds() {

        if (breedOption  === 'all') {
            for (const el of dogBreedArray) {
                let dogBreed = document.createElement("li")
                dogBreed.innerText = el
                ul.appendChild(dogBreed)
                dogBreed.id = el
                document.getElementById(el).addEventListener("click", function() {
                    document.getElementById(el).setAttribute("style", "color: green;")
                })
            }
        }

        for (const el of dogBreedArray) {
            if (el.charAt(0) === breedOption) {
                let dogBreed = document.createElement("li")
                dogBreed.innerText = el
                ul.appendChild(dogBreed)
                dogBreed.id = el
                document.getElementById(el).addEventListener("click", function() {
                    document.getElementById(el).setAttribute("style", "color: green;")
                })
            }
        }
    }

    selectDogBreeds()

})


