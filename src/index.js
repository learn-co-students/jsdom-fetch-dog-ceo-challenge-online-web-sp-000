console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchImage() {
   fetch(imgUrl)
   .then(response => response.json())
   .then(json => renderImages(json));
}

function renderImages(json) {
   const dogImgContainer = document.querySelector("#dog-image-container");
   Object.keys(json).forEach(dogImgKey => {
      if (dogImgKey == "message") {
         let imgCounter = 1;
         const img = document.createElement("img");
         img.src = json[dogImgKey][imgCounter];
         img.alt = "Image of a dog";
         dogImgContainer.appendChild(img);
         imgCounter++;
      }
   })
}

document.addEventListener("DOMContentLoaded", function() {
   fetchImage();
})