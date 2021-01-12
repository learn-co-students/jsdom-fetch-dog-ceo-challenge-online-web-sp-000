console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  
  

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function renderImages(images) {
    const imgContainer = document.getElementById("dog-image-container")
    images.message.forEach(img => {
        let imgElement = document.createElement("img");
        imgElement.src = img;
        imgContainer.appendChild(imgElement)
    })
}

function colorChanger(element) {
    element.style.color = "red"
}

  function dogImages(dogs){
    console.log(dogs)
    dogs.forEach(dog => {
      console.log(dog)
      const goodBoyContainer = document.querySelector('#dog-image-container')
      const goodBoy = document.createElement('img')
      goodBoy.src = dog
      goodBoyContainer.appendChild(goodBoy)
    });
  } 