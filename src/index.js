console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const imageContainer = document.getElementById("dog-image-container");


function fetchDogs() {
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(resp => renderDogs(resp)); 
}

document.addEventListener('DOMContentLoaded', function() {
  fetchDogs();
});

// ["https://images.dog.ceo/breeds/spaniel-welsh/n02102177_1028.jpg", "https://images.dog.ceo/breeds/akita/Akita_Dog.jpg", "https://images.dog.ceo/breeds/groenendael/n02105056_4600.jpg", "https://images.dog.ceo/breeds/terrier-russell/jack2.jpg"]


function renderDogs(imageSourceArray) {
  for (const image of imageSourceArray) {
    let newImageEl = document.createElement('img');
    newImageEl.src = image;
    imageContainer.appendChild(newImageEl);
  }

}


  // const main = document.querySelector('main')
  // json.forEach(book => {
  //   const h2 = document.createElement('h2')
  //   h2.innerHTML = `<h2>${book.name}</h2>`
  //   main.appendChild(h2)
  // })

