console.log('%c HI', 'color: firebrick')

function fetchImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(images => {
        images.message.forEach(image => appendImages(image))
    });
}

function appendImages(links){
    const container = document.querySelector("#dog-image-container");
    const dogImage = document.createElement("img");
    dogImage.src = links;
    container.appendChild(dogImage);
}

document.addEventListener('DOMContentLoaded', function(){
    fetchImages()
})

