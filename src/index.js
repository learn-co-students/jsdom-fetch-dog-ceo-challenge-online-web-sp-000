console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

  function displayTheseDogs(json) {
    let jsonArray = json.message
    for (const dog of jsonArray) {
      let newDogElem = document.createElement("img")
      newDogElem.src = dog
      document.querySelector("div#dog-image-container").appendChild(newDogElem)
    }
  }


  function fetchDogs(imgUrl) {
    return fetch(imgUrl)
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      displayTheseDogs(json)
    })
  }

  fetchDogs(imgUrl)

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  function displayTheseBreeds(json) {
    for (const breed in json) {
        let dogBreed = document.createElement("li")
        dogBreed.className = breed
        dogBreed.textContent = breed
        dogBreed.addEventListener("click", function(e) {
            this.style.color = "blue"
        })
        document.querySelector("ul").appendChild(dogBreed)
        if (json[breed].length > 0) {
            for (const type of json[breed]) {
                let breedType = document.createElement("li")
                breedType.id = `${breed}-${type}`
                breedType.textContent = `${breed}, ${type}`
                breedType.addEventListener("click", function(e) {
                    this.style.color = "blue"
                })
                document.querySelector(`ul`).appendChild(breedType)
            }
        }
    }
  }
  
  function fetchBreeds(breedUrl) {
    return fetch(breedUrl) 
    .then(function(response) {
        return response.json()
    })
    .then(function(json) {
        displayTheseBreeds(json.message)
    })
  }

  fetchBreeds(breedUrl)

  const selector = document.querySelector("select")

  function filterDogs() {
    const dogList = document.querySelector("ul").children
    for (const dog of dogList) {
        if (dog.textContent[0] == selector.value) {
            dog.hidden = false;
        }
        else {
            dog.hidden = true;
        }
    }
  }
  filterDogs()
})
