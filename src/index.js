document.addEventListener('DOMContentLoaded', function () {
    loadImages();
  });

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(resp => resp.json())
      .then(results => {
        results.message.forEach(image => addImage(image))
      });
  }

function addImage(dogPicUrl) {
  let container = document.querySelector('#dog-image-container');
  let newImageElement = document.createElement('img');
  newImageElement.src = dogPicUrl;
  container.appendChild(newImageElement);
}