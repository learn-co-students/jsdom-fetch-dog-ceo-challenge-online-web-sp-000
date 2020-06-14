const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogPics() {
    fetch(imgUrl) // Pass in the url to the fetch for our image url
    .then(resp => resp.json()) // Get the json
    .then(json => json.message.forEach(image => renderDogPics(image))); // Call the array for the image links and pass into renderDogPics
}

function renderDogPics(image) {
    const dogImage = document.getElementById("dog-image-container") // Set var as the div for our images
    const img = document.createElement("img") // Create an '<img>' tag
    img.src = image // Set the src attribute of the '<img>' tag equal to the argument, which will be the image link 
    dogImage.appendChild(img) // Add this variable to the div
}

function fetchDogBreeds() {
    fetch(breedUrl) // Pass in the url to the fetch for our breed url
    .then(resp => resp.json()) // Get the json
    .then(json => {
        breeds = Object.keys(json.message) // Create a variable and set it equal to the keys of json.messages (arrays of each dog breed based on letter)
        renderDogBreeds(breeds) // Pass in our 'breeds' variable into our renderDogBreeds function (see below), which creates our ul of dog breeds in alphabetical order
        dropDownTool() // Includes function for user to interact with drop down menu
    })
}

function renderDogBreeds(breeds) {
    const breedList = document.getElementById("dog-breeds") // Set var equal to our ul of dog breeds
    removeBreeds(breedList); // Pass in the list into our removeBreeds function, which clear out the li elements in our ul list. Basically a reset.
    breeds.forEach(breed => addDogBreed(breed)); // Take in the array of dog breeds, and for each breed we pass it into our addDogBreed function (see below), which inserts the breed in our ul as an li element
}

function dogColor(event) { // A function that accepts an event and modifies the color to green.
    event.target.style.color = 'green';
}

function addDogBreed(breed) {
    const breedList = document.getElementById("dog-breeds") // We set var equal to our ul of dog breeds
    const li = document.createElement('li') // We set var equal to an 'li' element
    li.innerText = breed // We set the text inside our 'li' element equal to the 'breed' argument passed into the function
    breedList.appendChild(li) // We then add this 'li' element into our 'ul'
    li.addEventListener("click", dogColor); // Finally, the functionality for changing the text color is added onto the 'li'
}

function removeBreeds(list){
    let child = list.lastElementChild; // Takes our dog breed list and selects the last element in that list
    while (child) { // While there is still a final child element in our breed list...
        list.removeChild(child); //...we will remove it from our ul...
        child = list.lastElementChild; // ...and then set our child var equal to the new last element, repeating the process until no element remains
    }
}

function selectBreed(char) { // A function that uses our renderDogBreeds function to take our breeds list and filter it...
    renderDogBreeds(breeds.filter(breed => breed.startsWith(char))); //...returning breed names that equal the argument provided in the function
}

function dropDownTool(){
    let dropdown = document.querySelector('#breed-dropdown'); // We set a var equal to our drop down list
    dropdown.addEventListener('change', function (event) { // We add an event listener that will utilize the selectBreed function...
        selectBreed(event.target.value);// ...to update according to the value the user selects from the drop down list.
    });
}

function genCharArray(charA, charZ) { // We create an empty array and two vars equal to the character code of the string's letter
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) { // We run a for comparing the code values, and if the first value is less than or equal to the second value...
        a.push(String.fromCharCode(i));// We push it into our array as a string. This is great for making an alphabet array.
    }
    return a; // After the cycle is broken, we return our array with its new values
}

function addCharToSelect(){
    const newLetters = genCharArray('e','z') // We set var equal to our function with the arguments of 'e' and 'z' (since we already have 'a'-'d' as options in our drop down)
    
    for(const element of newLetters){ // We iterate over the array created from our function above...
        let dropDown = document.querySelector('#breed-dropdown'); // Set var equal to our drop down menu
        const option = document.createElement('option') // Set var equal to an 'option' element
        option.innerText = element; // Pass in the current element of the array as our option's inner text
        dropDown.appendChild(option); // Finally, add this new option element to our drop down menu
    }


}

document.addEventListener('DOMContentLoaded', function() { // This event listen calls 3 functions to execute as soon as the DOM loads
    fetchDogPics();
    fetchDogBreeds();
    addCharToSelect();
})