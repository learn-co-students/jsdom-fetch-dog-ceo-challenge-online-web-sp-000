console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    loadImages();
})

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(res=> res.json())
      .then(results => {
        results.message.forEach(image => addImage(image))
      });
  }

function addImage(json) {
  let images = document.getElementById('dog-image-container');
  let newObject = document.createElement('img');
  json.forEach(newObject =>
      images.appendChild(newObject)
)}
