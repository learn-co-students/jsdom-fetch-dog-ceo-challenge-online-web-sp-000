console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    const dogContainer = document.querySelector("div#dog-image-container")

    for(const image of json.message) {
      dogContainer.innerHTML += `<img src=${image}>`
    }
  });

fetch(breedUrl)
  .then(function(response){
    return response.json();
  })

  .then(function(json){
    const dogBreedList = document.querySelector("ul#dog-breeds")
    const dropDown =document.getElementById("breed-dropdown")
    const breeds = [];

    for(const breed in json.message) {
      dogBreedList.innerHTML += `<li>${breed}</li>`
      breeds.push(breed)
    }
    dogBreedList.addEventListener("click", function(event){
      event.target.style.color = "blue";
    })
    dropDown.addEventListener("change", function(event){
      const letter = event.target.value;
      const filteredList = breeds.filter((breed) => breed.startsWith(letter))
      dogBreedList.innerHTML = ''

      for(const filteredBreed of filteredList) {
        dogBreedList.innerHTML += `<li>${filteredBreed}</li>`
      }
    })
})
