console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//fetch is a function that retrieves data, returns object that represents the data source 
  fetch(imgUrl)
  .then(response => response.json()) //returns content from response 
  .then(result => {
    dogImages(result.message)
  })

  function dogImages(dogs){  //calling function 
    console.log(dogs)  //printing the dog output 
   //forEach() method executes a provided function once for each array element 
    dogs.forEach(dog => {
      console.log(dog)
      //query selector takes one argument, a string of css selectors and returns the first element 
      const goodBoyContainer = document.querySelector('#dog-image-container')
      //createElement creates the html element by tagname 
      const goodBoy = document.createElement('img')
      goodBoy.src = dog
      //append child append the dog images node 
      goodBoyContainer.appendChild(goodBoy)
    });
  } 