console.log('%c HI', 'color: firebrick')




function colorChange(event) {
    event.target.style.color = '#7B68EE'
}

function find(array, criteraFn) {
    let current = array
    let next = []
    while (current || current === 0) {
        if (critereaFn(current)) {return current}
        if (Array.isArray(current)) {
            for (
                let i = 0; 
                i< current.length; 
                i++
                ) {
                    next.push(current[i])
                }
        }
        current = next.shift()

    }
    return null
}


function fetchDogs(urlToUse,whatToReturn){
    fetch(urlToUse).then(
        function(response){
            return response.json()
        }).then(whatToReturn)
}

function renderDogImages(){
    const urlToUse = 'https://dog.ceo/api/breeds/image/random/4'
    const whatToReturn = function(json){
        for(const arrayElement of json.message){
            let image = document.createElement('img'); 
            image.setAttribute('src', arrayElement); 
            document.getElementById('dog-image-container').appendChild(image);
        }
    }
    fetchDogs(urlToUse, whatToReturn)
}

// fetch('https://dog.ceo/api/breeds/list/all').then(function(response){return response.json()}).then(function(json){console.log(json.message)})

function renderDogBreeds(){

    const dogBreedUl = document.getElementById('dog-breeds')

    const urlToUse = 'https://dog.ceo/api/breeds/list/all'

    function removeDogBreeds(){
        // for(const dog of document.getElementsByTagName('li')){dog.remove()}
        // document.getElementsByTagName('li').forEeach(dog => console.log(dog))

    }
    
    // function addDogBreed(event) { 
    //     let dogBreed = document.createElement('li'); 
    //             dogBreed.innerText = event.target;
    //             dogBreedUl.appendChild(dogBreed);
    //             dogBreed.addEventListener('click', colorChange)
    // }

    // in an improved version i can add a function like this to make it DRY, but currently its not being called.  Will repeat to save time.

        const whatToReturn = function(json){
            for(const objectKey in json.message){
            // addDogBreed(objectKey)
            let dogBreed = document.createElement('li'); 
            dogBreed.innerText = objectKey;
            dogBreedUl.appendChild(dogBreed);
            dogBreed.addEventListener('click', colorChange)
        };
        const breedDropdown = document.getElementById('breed-dropdown')
        breedDropdown.onchange = function(){
             console.log(breedDropdown.value);
            //  removeDogBreeds();
             const filteredByLetter = document.getElementsByTagName('li').filter(item => item.innerText.startsWith(breedDropdown.value));
             for(const dog of filteredByLetter){
                //  addDogBreed(dog); 
                let dogBreed = document.createElement('li'); 
                dogBreed.innerText = dog;
                dogBreedUl.appendChild(dogBreed);
                dogBreed.addEventListener('click', colorChange);
            }
            }
        //I need to create an array for all Dogs and one for each drop down letter 
        // It needs to populate all dogs at first, then delete remove all children from the Ul and add the array by letter
}
    fetchDogs(urlToUse, whatToReturn)
}

document.addEventListener('DOMContentLoaded', function(){renderDogImages(); renderDogBreeds();})