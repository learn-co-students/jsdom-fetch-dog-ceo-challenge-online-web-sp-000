console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchImage() {
   fetch(imgUrl)
   .then(response => response.json())
   .then(json => renderImages(json));
}

function renderImages(json) {
   const dogImgContainer = document.querySelector("#dog-image-container");
   Object.keys(json).forEach(dogImg => {
      const img = document.createElement("img");
      img.src = dogImg.src;
      img.alt = "Image of a dog";
      dogImgContainer.appendChild(img);
   })
}

document.addEventListener("DOMContentLoaded", function() {
   fetchImage();
})