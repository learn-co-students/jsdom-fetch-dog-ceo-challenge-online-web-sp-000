console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response){
    return response.json()
  })
  .then(function(json){
    let images = json.message
    for (const image of images){
      let newImage = document.createElement('img')
      newImage.src = image
      document.getElementById('dog-image-container').appendChild(newImage)
    }
  })
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(function(response){
    return response.json()
  })
  .then(function(json){
    let breeds = Object.keys(json.message)
    let breedsList = document.getElementById('dog-breeds')
    let menu = document.getElementById('breed-dropdown')
    for (const br of breeds){
    let breed = document.createElement('li')
    breed.innerText = br
    breedsList.appendChild(breed)
    breed.addEventListener('click', function(event){
      breed.style.color = 'red'
    })
    menu.addEventListener('change', function(){
      //for each li on dog breeds change display:none if first letter is not == menu.value
      for (element of document.querySelectorAll('li')){
        if (menu.value == element.innerText[0]){
        element.style.display = ""
      } else {
        element.style.display = "none"
      }
      }
    })
  }
  })

})
