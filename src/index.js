let allBreeds = []

document.addEventListener('DOMContentLoaded', function() {
    fetchDog()
    fetchBreed()
    dropDownBreed()
})

function fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(json => fetchDogImage(json))
}

function fetchBreed() {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
        .then(json => fetchBreedList(json))
}

function fetchDogImage(json) {
    const imageDiv = document.getElementById('dog-image-container');
    json.message.forEach(image => {
    let newImageDiv = document.createElement('img');
    newImageDiv.src = image;
    imageDiv.appendChild(newImageDiv);
    })
}

function fetchBreedList(json) {
    const breedID = document.getElementById('dog-breeds');
    for (var breed in json.message) {
    let newBreed = document.createElement("li");
    newBreed.innerHTML = breed;
    newBreed.addEventListener('click', colorChange)
    breedID.appendChild(newBreed);
    }
}

function colorChange(event) {
    event.target.style.color = "blue"
}

function dropDownBreed() {
    const dropDown = document.getElementById('breed-dropdown')
    const dogBreed = document.getElementById('dog-breeds')
    dropDown.addEventListener('change', function (){
        while (dogBreed.firstChild)
        dogBreed.removeChild(dogBreed.firstChild);
        filterDog(this.value);
    })
}

function filterDog(letter) {
    filterDog = [];
    filterDog = allBreeds.filter(breed => breed[0] === letter);
    fetchBreedList(filterDog);
  }
  

