console.log('%c HI', 'color: firebrick')

// Add JavaScript so that:
// on page load
// fetch the images using the url above ⬆️
// parse the response as JSON
// add image elements to the DOM for each🤔 image in the array

document.addEventListener("DOMContentLoaded", () => {
  // fetchImages();
  fetchDogBreed();
});

function fetchImages() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then (resp => resp.json())
  .then (json => renderImages(json))
}

function renderImages(json) {
  for (const element of json.message) {
    let img = document.createElement('img')
    document.querySelector('#dog-image-container').appendChild(img).src = element
  }
}

// After the first challenge is completed, add JavaScript so that:
// on page load, fetch all the dog breeds using the url above ⬆️
// add the breeds to the page in an <ul> (take a look at the included index.html)

// Once all of the breeds are rendered in the <ul>, add JavaScript so that the font color of a particular <li> changes on click. This can be a color of your choosing.
// When the user clicks any of the dog breed list items, the color the text should change.

function fetchDogBreed() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then (resp => resp.json())
  .then (json => renderDogBreed(json))
}

function renderDogBreed(json) {
  for (const key in json.message) {
    let li = document.createElement('li')
    let appendLi = document.querySelector('#dog-breeds').appendChild(li)
    document.querySelector('#dog-breeds').appendChild(li).innerHTML = key

    appendLi.addEventListener("click", function(e) {
      e.target.style.color = "green"
    })

    document.querySelector('#breed-dropdown').addEventListener('change', function(e) {
      letterFilter = document.querySelector("#breed-dropdown").value

      for (const key in json.message) {
        if (key[0] === letterFilter) {
          let ul = document.querySelector('ul')
          ul.removeChild(ul.querySelector('li'))

          let li = document.createElement('li')
          let appendLi = document.querySelector('#dog-breeds').appendChild(li)
          document.querySelector('#dog-breeds').appendChild(li).innerHTML = key
        }
      }
    })

  }
}

// Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.
// For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet
