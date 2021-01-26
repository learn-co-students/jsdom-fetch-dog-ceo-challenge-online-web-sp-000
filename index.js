function parseImg(image) {
  image.forEach(element => { 
    <li>element</li><br>
  });
}

addEventListener(DOMContentLoaded, () => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json)
  .then(image => parseImg(image))
}
)