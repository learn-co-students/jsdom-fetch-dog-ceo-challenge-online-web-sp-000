console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function() {
    const dogImages = document.getElementById('dog-image-container');
    const dogBreeds = document.getElementById('dog-breeds');
    

    function makeImages(arr) {
        for (const element of arr) {
            const img = document.createElement("img");
            img.src = element;
            img.alt = "random dog photo";
            dogImages.appendChild(img);
        }
    }

    function addBreeds(obj) {
        for (const key in obj) {
            const li = document.createElement("li");
            li.setAttribute("class", "breed-item")
            li.innerText = key;
            dogBreeds.appendChild(li);
        }
    }

    function changeColor() {
        document.querySelectorAll('.breed-item').forEach(breed => {
            breed.addEventListener('click', () => {
                breed.style.color = 'magenta';
            })
        }) 
    } 
    
        const breedDropdown = document.getElementById('breed-dropdown');
        breedDropdown.addEventListener("change", () => {
            const letter = breedDropdown.value;
            const breeds = document.querySelectorAll('.breed-item');
            for (const breed of breeds) {
                if (breed.innerText[0] === letter) {
                    breed.style.display = "";
                } else {
                    breed.style.display = "none";
                }
            }
        })


    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        makeImages(json.message)
    });
    
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        addBreeds(json.message);
        changeColor();
    });



  });