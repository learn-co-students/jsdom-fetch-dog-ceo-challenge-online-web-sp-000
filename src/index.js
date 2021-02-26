
document.addEventListener('DOMContentLoaded', function () {
  addImages();
});

function addImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(response => response.json())
    .then(results => {
      results.message.forEach(image => addImage(image))
    });
}

function addImage(url) {
  let container = document.getElementById('dog-image-container');
  let imgElem = document.createElement('img');
  imgElem.src = url;
  container.appendChild(imgElem);
}
