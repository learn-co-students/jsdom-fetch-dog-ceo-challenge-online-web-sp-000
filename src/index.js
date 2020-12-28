console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", function(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    const breedList = document.getElementById('dog-breeds');
    const itemsArray = Array.from(document.getElementsByTagName('li'));

    fetch(imgUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        createImage(json);
    });

    fetch(breedUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        createBreedArray(json);
    });

    function createImage(json){
        const imgArray = json.message;
        for(const element of imgArray){
            let newImg = document.createElement('img');
            newImg.src = element;
            document.body.appendChild(newImg);
            let linebreak = document.createElement("br");
            document.body.appendChild(linebreak);
        }
    }

    function createBreedArray(json){
        const breeds = json.message;
        const breedArray = [];
        for (const key in breeds){
            breedArray.push(key);
        }

        createBreeds(breedArray);
    }

    function createBreeds(breedArray){
        breedList.innerText = "";
        for (const breed of breedArray){
            let breedItem = document.createElement('li');
            breedItem.innerText = breed;
            breedList.appendChild(breedItem);    
            breedItem.addEventListener("click", function(){
                breedItem.style.color ="red";
            });  
        }

        filterBreeds(breedArray);

    }

    function filterBreeds(breedArray){
        let dropdown = document.getElementById('breed-dropdown');
        let filterBreedsArray = [];
        dropdown.addEventListener("change", function(){
            letter = document.getElementById('breed-dropdown').value;
            for(const currentBreed of breedArray){
                if (letter == currentBreed[0]){
                    filterBreedsArray.push(currentBreed);
                }
            }
            createBreeds(filterBreedsArray);
        });
        
    }


});

