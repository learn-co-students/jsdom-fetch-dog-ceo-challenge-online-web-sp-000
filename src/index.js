window.addEventListener('DOMContentLoaded', () => {
    fetchImage()
    fetchBreed()  
});

function fetchImage(){ 
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => showImage(json))
}

function showImage(json){
    const divImage = document.getElementById("dog-image-container")
    json.message.forEach(image => {
    const img = document.createElement('img')
    img.src = image
    divImage.appendChild(img)
    })     
}

function fetchBreed(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => addBreed(json))
}

function addBreed(json){
    const ul = document.getElementById("dog-breeds")
    debugger


}