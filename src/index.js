console.log('%c HI', 'color: firebrick');

let x = () => document.querySelector("#dog-image-container");

function testFunction() {
    let abcd = document.querySelector("#dog-image-container");
    console.log(abcd);
};

function addImage(dogPicUrl) {
    let abccontainer = document.querySelector('#dog-image-container');
    let newImageEl = document.createElement('img');
    newImageEl.src = dogPicUrl;
    abccontainer.appendChild(newImageEl);
  };

  testFunction() //will not work out here


document.addEventListener('DOMContentLoaded', function () {
    addImage(["https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"])
    testFunction() //will work in here
    fetchPictures()

    console.log(x()); //
    //because putting it in a DOMCONTENTLOADED is not enough. the div will be found, but any time you change the div#dogimage container in any way/shape/form, u deleted the div and created a new one. the variable x is referred to the old deleted div. hence null
    //to solve the problem, turn x into a a function. onel ine is enough that return ưhat you want. it will retrieve it in real time everytime u call x(), íntead of geting a a record saved in memory that was deleted. 
      });
  
function fetchPictures() {
    fetch("https://dog.ceo/api/breeds/image/random/4").
    then( function(resource) { return resource.json() }).
    then( function(json) { displayPictures(json.message)});
};

function displayPictures(picturesArray) {

    for ( const url of picturesArray) {
        const imageElement = document.createElement("img");
        imageElement.src = url;
        let imageContainer = document.querySelector("#dog-image-container");

        imageContainer.appendChild(imageElement);
    }

};



//-------------------------

let theBreedsArray = [];
//initalize for global access

function fetchDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all').
    then( function(resource) { return resource.json() }).
    then( function(json) { 
        theBreedsArray = Object.keys(json.message);
        displayDogBreeds(theBreedsArray);
        displayBreedsStartingWith();
     });
};

function displayDogBreeds(breedsArray) {
    // console.log(breedsArray);
    const breedList = document.querySelector("ul#dog-breeds");
    breedList.innerHTML = ""; //clear becuase we use this function several times. 
    //warning: since wour event listner listen to "change", a load is a change, it trigger many things including thsi function. so thats why your entire list is not loaded at first
    //if u want it another way, gotta listen differently. 

    for ( const breedName of breedsArray) {
        const liElement = document.createElement("li");
        liElement.innerText = breedName;
        breedList.appendChild(liElement);
        liElement.addEventListener( "click", function() { liElement.style.color = "blue" }); //apparently u dont have to add listenre AFTER added to DOM, but it makes more sense to do so

    }

    //after ALL breeds loaded
    loadBreedDropdown();
    activateDropDownListener();
};

fetchDogBreeds();

function loadBreedDropdown() {
    let dropdownElement = document.querySelector("select#breed-dropdown");
    let restOfAlphabet = ['e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for ( const letter of restOfAlphabet) {
        const optionElement = document.createElement("option");
        optionElement.value = letter;
        optionElement.innerText = letter;
        dropdownElement.appendChild(optionElement);
    }
}

function activateDropDownListener() {
    let dropdownElement = document.querySelector("select#breed-dropdown");
    dropdownElement.addEventListener("change", function(event) { displayBreedsStartingWith(event.target.value)});
}
function displayBreedsStartingWith(letter) {
    console.log(`user wants breeds starting with ${letter}`);
    //get the array and filter it
    // console.log(theBreedsArray)
    let filteredList = theBreedsArray.filter(function(name) { 
        return name.charAt(0).toLowerCase() === letter 
    });
    displayDogBreeds(filteredList);

}




