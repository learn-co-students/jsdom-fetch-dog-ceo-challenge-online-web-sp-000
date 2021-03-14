console.log('%c HI', 'color: firebrick')
let breeds = [];
document.addEventListener('DOMContentLoaded', function () {
    loadImages();
    loadBreedOptions();
});
function loadImages() {
    let imageUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imageUrl)
    .then(resp => resp.json())
    .then(json => addImages(json))
    
}
function addImages(json) {
    
    let container = document.querySelector('#dog-image-container');
    json.message.forEach(image => {
        let newImageEl = document.createElement('img'); 
        newImageEl.src = image;
        container.appendChild(newImageEl);
    });
}
function loadBreedOptions() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => addBreeds(json))
}
function addBreeds(json) {
    let ul = document.querySelector('#dog-breeds');
    
    
    for (const key in Object.keys(json.message)) {
        //console.log(Object.keys(json.message)[key]);
        let li = document.createElement('li');
        li.innerText = Object.keys(json.message)[key];
        ul.appendChild(li);
        li.addEventListener('click', updateColor);
        breeds.push(Object.keys(json.message)[key])
    }
    
    
}
function updateColor(event) {
    event.target.style.color = 'blue';
}

    let breedMenu = document.getElementById('breed-dropdown')
    let showingDogs = document.getElementById('dog-breeds')
    let dogsArray = showingDogs.getElementsByTagName('li')
    let selection;
    let dogsOfCertainLetter = [];
    breedMenu.addEventListener('change', function () {
        selection = this.value
        dogsOfCertainLetter = [];
        for (const element of breeds){
            if (element.charAt(0) === selection) {
                dogsOfCertainLetter.push(element)
                console.log(element)
            }
        }
        showingDogs.innerHTML = ""
        for (const element of dogsOfCertainLetter){
            let li = document.createElement('li')
            li.innerHTML = element
            showingDogs.appendChild(li)
            
        }

    })
    
    
    