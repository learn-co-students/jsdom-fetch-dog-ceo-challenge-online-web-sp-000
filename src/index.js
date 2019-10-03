console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", function() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(function(response){
        return response.json();
    })
    .then(function(json) {
        addImagesToDom(json);
    })

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        addDogBreedsAsListToDom(json);
        addEventListenersForDogBreeds();
        addFilterEventListener();
    });

    
});

function addImagesToDom(json){
    const imageContainer = document.getElementById('dog-image-container')
    json.message.forEach( function(dogImageUrl){
        let newImage = document.createElement('img');
        newImage.src = dogImageUrl;
        imageContainer.appendChild(newImage);
    });
};

function addDogBreedsAsListToDom(json){
    const breedListContainer = document.getElementById('dog-breeds')
    console.log(json.message)
    let breedObject = json.message;

    for(const breed in breedObject){
        let newListItem = document.createElement('li');
        newListItem.innerHTML = breed;
        breedListContainer.appendChild(newListItem);
    }    
};

function addEventListenersForDogBreeds(){
    console.log(document.querySelectorAll("#dog-breeds"));
    document.querySelectorAll("ul#dog-breeds >li").forEach(function(element) {
        element.addEventListener('click', function(){
            this.style.color = 'blue';
        });
    })
}

function addFilterEventListener(){
    document.getElementById('breed-dropdown').addEventListener('change', function(){
        let firstLetter = document.getElementById('breed-dropdown').value;
        document.querySelectorAll("ul#dog-breeds >li").forEach(function(element) {
            element.innerHTML[0] == firstLetter ? element.style.display = 'block' : element.style.display = 'none';
        });
    });
}