console.log('%c HI', 'color: firebrick')


fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(json => displayImgs(json))