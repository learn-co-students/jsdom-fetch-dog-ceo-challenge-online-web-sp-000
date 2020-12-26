// challenge 1

document.addEventListener('DOMContentLoaded', function () {

  fetchDogPics()
  fetchDogBreeds()

  function fetchDogPics() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl) // Pass in the url to the fetch for our image url
    .then(resp => resp.json()) // convert the url to a json object
    .then(json => { // call then again to ensure the promise works and then
      //iterate over each element of the key 'message' on the json response.
      json.message.forEach(link => {
        let dogImageContainer = document.querySelector('#dog-image-container')
        let imgTag = document.createElement('img')
        
        imgTag.src = link
        dogImageContainer.appendChild(imgTag)
      })
    })
  };

// challenge 2

  function fetchDogBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => { 
      Object.keys(json.message).forEach(key => {
        let dogBreedList = document.querySelector('#dog-breeds')
        let liTag = document.createElement('li')
        
        liTag.innerHTML = key
        liTag.addEventListener('click',changeColorOnClick) // part of challenge 3
        dogBreedList.appendChild(liTag)
      })
    })
  };

  // challenge 3

  function changeColorOnClick(clickEvent) {
    clickEvent.target.style.color = 'red';
  }

  // challenge 4

  function addDropDownEventListener() {
    let dropDown = document.getElementById('breed-dropdown')
    dropDown.addEventListener('change',filterDogBreeds(event.target.value))
  }

  function filterDogBreeds(selectedLetter) {
    // finish later
  }


});

