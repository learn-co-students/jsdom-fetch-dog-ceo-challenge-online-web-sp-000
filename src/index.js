console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/2"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// on page load, fetches the images using the url
// on page load, fetches all the dog breeds using the url

document.addEventListener('DOMContentLoaded', function() {

    fetch(imgUrl) 
        .then(resp => resp.json())
        .then(json => renderDogImages(json))
    fetch(breedUrl)
        .then(resp => resp.json()  )
        .then(json => renderBreeds(json))
})

// adds the breeds to the page in the <ul> provided in index.html

// adds image elements to the DOM for each image in the array
function renderDogImages(images) {
  const  dogImages = document.getElementById('dog-image-container');
  for (const image in images.message ) {
      const img = document.createElement("img")
      img.src = images.message[image]
      dogImages.appendChild(img)
    }
  }

  function renderBreeds(breeds) {
      const dogBreeds = document.getElementById("dog-breeds")
      for (const breed in breeds.message) {
          const li = document.createElement('li')
          li.textContent = breed
          dogBreeds.appendChild(li)
        //   when the user clicks on any one of the <li>s, the font color of that <li> changes
          li.addEventListener("click", function() {
              this.style.color = "red"
          })
      }
  }

//   JavaScript so that the user can filter breeds that start with a particular letter using a dropdown
function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function updateBreedList(breeds) {
  let ul = document.getElementById("dog-breeds");
  removeChildren(ul);
  breeds.forEach(breed => addBreed(breed));
}

function selectBreedsStartingWith(letter) {
  updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectListener() {
  let breedDropdown = document.getElementById("breed-dropdown")
  breedDropdown.addEventListener('change', function (event) {
    selectBreedsStartingWith(event.target.value)

  })
}