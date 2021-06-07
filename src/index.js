console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize element selectors
    const dogImages = document.getElementById("dog-image-container");
    const dogBreeds = document.getElementById("dog-breeds");
    const selectBreed = document.getElementById('breed-dropdown');

    // Create global object for all dog breed filters
    const dogFilter = {'a':[], 'b':[], 'c':[], 'd':[], 'e':[], 'f':[], 'g':[], 'h':[], 'i':[], 'j':[], 'k':[], 'l':[], 'm':[], 'n':[], 'o':[], 'p':[], 'q':[], 'r':[], 's':[], 't':[], 'u':[], 'v':[], 'w':[], 'x':[], 'y':[], 'z':[]};

    // Fetch code to load and display 4 random dog pictures from API
    fetch(imgUrl)
    .then(function(response) {return response.json()})
    .then(function(json) {
        const dogArray = json['message'];

        // Use for...of iteration to create <img> elements for all dog picture array elements
        for (const dogPic of dogArray) {
            const newDog = document.createElement("img");
            newDog.setAttribute("src", dogPic);
            dogImages.appendChild(newDog);
        }
    })

    // Fetch code to load and display all dog breeds from API
    fetch(breedUrl)
    .then(function(response) {return response.json()})
    .then(function(json){
        const dogArray = json['message'];

        // Use for...in iteration to create new <li> elements for all dog breed object properties
        for (const dogBreed in dogArray){
            const newDogBreed = document.createElement("li");
            newDogBreed.innerHTML = dogBreed;
            dogBreeds.appendChild(newDogBreed);

            // Add event listener for each <li> element created
            newDogBreed.addEventListener("click", function() {
                newDogBreed.style.color = 'red';
            })

            // Push each <li> element created into the proper key of the dog breed filter object
            const firstLetter = dogBreed.charAt(0);
            dogFilter[firstLetter].push(newDogBreed);
        }
    })

    // Event listener for select drop down filter menu
    selectBreed.addEventListener("change", function() {
        // Clears current list in order to display the filtered list
        dogBreeds.innerHTML = '';

        // Search for correct key from dog breed filter object and access the associated array value (array of <li> elements)
        const filter = selectBreed.value;
        const filteredDogArray = dogFilter[filter];

        // Recreate the <ul> list with <li> elements from the selected filtered array
        for (const dogBreed of filteredDogArray){
            dogBreeds.appendChild(dogBreed);
            // Below code is unnecessary since the <li> elements saved above in the original dog breed filter object (ie. elements in filteredDogArray) already have eventListeners coded into them
            // dogBreed.addEventListener("click", function() {
            //     dogBreed.style.color = 'red';
            // })
        }
        
    })

})