console.log('%c HI', 'color: firebrick')


function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => {
        json.message.forEach(image => renderImages(image))})        
  }
  
  function renderImages(image) {
    const main = document.getElementById('dog-image-container')
    const newImage = document.createElement('img')
    newImage.src = image;
    main.appendChild(newImage); 
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
  })
