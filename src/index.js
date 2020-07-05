// console.log('%c HI', 'color: firebrick')

const dogimgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogbreedsUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogPics() {
    fetch(dogimgurl)
    .then(resp => resp.json())
    .then(json = json.message.forEach(image => renderDogPics(image)));
}

function renderDogPics(image) {
    const dogImage = document.getElementById("dog-image-contrainer")
    const img = document.createElement("img")
    img.src = image
    dogImage.appendChild(img)
}

function fetchDogBreeds() {
    fetch(dogbreedUrl)
    .then(resp => resp.json())
    .then(json => {
        dogbreeds = Object.keys(json.message)
        renderDogBreeds(breeds)
        dropDownTool()
    })

}

function renderDogBreeds(breeds) {
    const breedList = document.getElementById("dog-breeds")
    removeBreeds(breedList);
    breeds.forEach(breed => addDogBreed(breed));
}

function dogColor(event) {
    event.target.style.color = 'pink';
}

function addDogBreed(breed) {
    const breedList = document.getElementById("dog-breeds")
    const li = document.createElement('li')
    li.innerText = breed
    breedList.appendChild(li)
    li.addEventListener("click", dogColor);
}

function removeBreeds(list){
    let child = list.lastElementChild;
    while (child) { 
        list.removeChild(child);
        child = list.lastElementChild;
    }
}

function selectBreed(char) { 
    renderDogBreeds(breeds.filter(breed => breed.startsWith(char))); 
}

function dropDownTool(){
    let dropdown = document.querySelector('#breed-dropdown');
    dropdown.addEventListener('change', function (event) { 
        selectBreed(event.target.value);
    });
}

function genCharArray(charA, charZ) { 
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) { 
        a.push(String.fromCharCode(i));
    }
    return a; 
}

function addCharToSelect(){
    const newLetters = genCharArray('e','z')

    for(const element of newLetters){ 
        let dropDown = document.querySelector('#breed-dropdown'); 
        const option = document.createElement('option') 
        option.innerText = element; 
        dropDown.appendChild(option); 
    }


}

document.addEventListener('DOMContentLoaded', function() { 
    fetchDogPics();
    fetchDogBreeds();
    addCharToSelect();
})