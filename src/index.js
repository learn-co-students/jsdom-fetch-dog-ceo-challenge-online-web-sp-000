console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  fetch(imgUrl)
  .then(response => response.json())
  .then(result => {
    dogPics(result.message)
  })

  function dogPics(dogs){
    console.log(dogs)
    const newUl = document.createElement('ul')
    const dogContainer = document.querySelector('#dog-image-container')
    dogContainer.appendChild(newUl)
    dogs.forEach(dog => {
      console.log(dog)
      const picture = document.createElement('img')
      picture.src = dog
      dogContainer.appendChild(picture)
    });
  } 