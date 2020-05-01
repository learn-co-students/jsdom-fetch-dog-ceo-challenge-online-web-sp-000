console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const imageContainer = document.getElementById('dog-image-container');


function fetchDogs() {
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(resp => renderDogs(resp.message)); 
}

document.addEventListener('load', function() {
  fetchDogs();
});

// ["https://images.dog.ceo/breeds/spaniel-welsh/n02102177_1028.jpg", "https://images.dog.ceo/breeds/akita/Akita_Dog.jpg", "https://images.dog.ceo/breeds/groenendael/n02105056_4600.jpg", "https://images.dog.ceo/breeds/terrier-russell/jack2.jpg"]

function renderDogs(imageSourceArray) {
  debugger 

  let newImageEl = document.createElement('img');
  for (const image of imageSourceArray) { 
    newImageEl.src = image;
    imageContainer.appendChild(newImageEl);
  }

}


