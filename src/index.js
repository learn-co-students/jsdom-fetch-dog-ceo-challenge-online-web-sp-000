console.log('%c HI', 'color: firebrick')

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
    return fetchDogs(urlToUse, whatToReturn)
}

// fetch('https://dog.ceo/api/breeds/list/all').then(function(response){return response.json()}).then(function(json){console.log(json.message)})

function renderDogBreeds(){
    let urlToUse = 'https://dog.ceo/api/breeds/list/all'
    let whatToReturn = function(json){for(const objectKey in json.message){
        let dogBreed = document.createElement('li'); 
        dogBreed.innerText = objectKey
        document.getElementById('dog-breeds').appendChild(dogBreed)
    }}
    fetchDogs(urlToUse, whatToReturn)
}

function colorChange() {
    console.log('hello')
    // this.style.color = '#7B68EE'
}

document.addEventListener('DOMContentLoaded', function(){renderDogImages(), renderDogBreeds()})
// document.getElementById('dog-breeds').forEach(listItem => {listItem.addEventListener('click', colorChange)})
// for(const listItem of document.getElementsByTagName('li')) {listItem.addEventListener('click', function(){console.log(listItem)})}
for(const listItem of document.getElementsByTagName('li')) {console.log(listItem)}
// for(const listItem in document.getElementsByTagName('li') {listItem.addEventListener('click', function(){console.log(listItem.innerText)})})
// for(const listItem in document.getElementsByTagName('li'){listItem.addEventListener('click', console.log('I did it'))})
// document.getElementsByTagName('li').foreach()addEventListener('click', colorChange())