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
    
    // function addDogBreed(event) { 
    //     let dogBreed = document.createElement('li'); 
    //             dogBreed.innerText = event.target;
    //             dogBreedUl.appendChild(dogBreed);
    //             dogBreed.addEventListener('click', colorChange)
    // }

    // in an improved version i can add a function like this to make it DRY, but currently its not being called.  Will repeat to save time.

        const whatToReturn = function(json){
            const breedDropdown = document.getElementById('breed-dropdown');
            for(const objectKey in json.message){
                // addDogBreed(objectKey)
                let dogBreed = document.createElement('li'); 
                dogBreed.innerText = objectKey;
                dogBreedUl.appendChild(dogBreed);
                dogBreed.addEventListener('click', colorChange)
            };

            function removeDogBreeds(){
                let curretList = Object.values(document.getElementsByTagName('li'))
                curretList.map(dog => dog.remove())
                // for(const dog of document.getElementsByTagName('li')){dog.remove()};
                // document.getElementsByTagName('li').forEeach(dog => console.log(dog));
            };
            
            const lis = document.getElementsByTagName('li');
            const allDogs = Object.values(lis);
            breedDropdown.onchange = function(){
                removeDogBreeds();
                const filteredByLetter = allDogs.filter(item => item.innerText.startsWith(breedDropdown.value));
                for(const dog of filteredByLetter){
                    //  addDogBreed(dog); 
                    let dogBreed = document.createElement('li'); 
                    dogBreed.innerText = dog.innerText;
                    dogBreedUl.appendChild(dogBreed);
                    dogBreed.addEventListener('click', colorChange);
                }
            }
        }
    fetchDogs(urlToUse, whatToReturn)
}

document.addEventListener('DOMContentLoaded', function(){renderDogImages(); renderDogBreeds();})