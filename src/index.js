console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
 .then((response) => response.json())
 .then((data) => displayImages(data.message));

function displayImages(images) {
  imageContainer = document.getElementById('dog-image-container')
  let imgTag = ''
  images.forEach(image => {
    imgTag += `<img src="${image}" style="width: 200px; height: auto"/<br>`
  })
  imageContainer.innerHTML = imgTag
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedArray = []

fetch(breedUrl)
  .then((response) => response.json())
  .then((data) => displayBreeds(data.message));

function displayBreeds(breeds) {
  let breedList = document.getElementById('dog-breeds')

  for (let breed in breeds) {
    if (breeds[breed].length === 0) {
      breedArray.push(breed);
    } else {
      breeds[breed].forEach((subBreed) => {
        breedArray.push(`${breed} - ${subBreed}`)
      });
    };
  };

  let listItems = '';
  breedArray.forEach((breed) => {
    listItems += `<li>${breed}</li>`
  });

  breedList.innerHTML = listItems;
}

document.addEventListener("DOMContentLoaded", () => {
  let list = document.querySelector('#dog-breeds');
  list.addEventListener('click', (e) => {
    e.target.style.color = "red";
  });

  let filterValue = document.getElementById('breed-dropdown')

  filterValue.addEventListener('change', (e) => {
    let breedList = document.getElementById('dog-breeds')
    breedList.innerHTML = ''

    let filteredList = breedArray.filter((breed) => {
      return breed.charAt(0) === e.target.value
    });

    let listItems = '';
    filteredList.forEach((breed) => {
      listItems += `<li>${breed}</li>`
    });

    breedList.innerHTML = listItems;
  });
})
