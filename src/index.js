const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let container = document.querySelector('#dog-image-container');

function grabImages(){
  fetch(imgUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    json.message.forEach(imageUrl => {
      addImage(imageUrl)
    });
  })
}

function addImage(dogPicUrl) {

  let newImageElement = document.createElement('img');
  newImageElement.src = dogPicUrl;
  container.appendChild(newImageElement);
}

grabImages()