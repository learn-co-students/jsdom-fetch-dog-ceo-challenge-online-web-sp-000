function fetchImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImages(json))
}

function renderImages(json) {
  const main = document.querySelector('main')
  json.forEach(image => {
    const img = document.createElement('img')
    img.innerHTML = `<img src= ${img}>`
    main.appendChild(img)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchImages();
})
