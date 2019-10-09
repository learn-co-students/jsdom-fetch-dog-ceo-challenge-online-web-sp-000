console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
let breedArray = [];




function fetchImages() {
    return fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => renderImages(json.message))
  }

  function renderImages(json_array) {
    const target = document.querySelector('#dog-image-container') //id of
    json_array.forEach((url) => { 
        target.innerHTML = target.innerHTML + `<img src="${url}">` }) 
         
  }



  document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
  })










  
//   function renderBooks(json) {
//     const main = document.querySelector('main')
//     json.forEach(book => {
//       const h2 = document.createElement('h2')
//       h2.innerHTML = `<h2>${book.name}</h2>`
//       main.appendChild(h2)
//     })
//   }
  
 