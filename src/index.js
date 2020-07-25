console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
function getImages(Url) {
  fetch(Url)
    .then(responce => responce.json())
    .then(data => data.message.forEach(item => appendImage(item)));
}
function appendImage(picSrc) {
    const newImage = document.createElement('img');
    newImage.src = picSrc;
    document.getElementById('dog-image-container').appendChild(newImage);
}

function getBreeds(url) {
  fetch(url)
    .then(responce => responce.json())
    .then(data => Object.keys(data.message).forEach(item => appendList(item)));
}
function appendList(item) {
    const newli = document.createElement('li');
    newli.innerText = item;
    document.getElementById('dog-breeds').appendChild(newli);
}

function start(){ 
    getImages(imgUrl);
    getBreeds(breedUrl);

}

document.addEventListener('DOMContentLoaded', start());
