const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const divDogs = document.getElementById("dog-image-container");

function fetchImages() {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderImages(json));
}

function renderImages(json) {

    Array.prototype.forEach.call(json, src => {
        const img = document.createElement('IMG');
        img.setAttribute("src", src);
        divDogs.appendChild(img);
    })

    // json.forEach(src => {
    //     console.log(src);
    //     const img = documnet.createElement('IMG');
    //     img.setAttribute("src", src);
    //     divDogs.appendChild(img);
    // })
}

document.addEventListener("DOMContentLoaded", fetchImages);