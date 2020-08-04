// console.log("%c HI", "color: firebrick");

const randomDogsUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

function fetchAndLoadData(url, fn) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => fn(json.message));
}

function addImagesToPage(arrayOfImages) {
  const dogImageContainer = document.getElementById("dog-image-container");

  for (const imageUrl of arrayOfImages) {
    const newImage = document.createElement("img");
    newImage.src = imageUrl;

    dogImageContainer.appendChild(newImage);
  }
}

function addBreedsToPage(breedObjects) {
  const dogBreedsList = document.getElementById("dog-breeds");

  for (const breed in breedObjects) {
    const newListItem = document.createElement("li");
    newListItem.innerText = breed;
    newListItem.style.cursor = "pointer";
    newListItem.addEventListener("click", function () {
      changeColor(newListItem, "#FF6666");
    });

    dogBreedsList.appendChild(newListItem);
  }
}

function changeColor(element, hexColor) {
  element.style.color = hexColor;
}

function filterBreedsList(selectElement) {
  const dogBreedsListItems = document.getElementById("dog-breeds").children;

  for (const listItem of dogBreedsListItems) {
    if (listItem.innerText.charAt(0) != selectElement.value) {
      listItem.style.display = "none";
    } else {
      listItem.style.display = "block";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  fetchAndLoadData(randomDogsUrl, addImagesToPage);
  fetchAndLoadData(breedUrl, addBreedsToPage);

  const selectBreed = document.getElementById("breed-dropdown");

  selectBreed.addEventListener("change", function (e) {
    e.preventDefault();
    filterBreedsList(selectBreed);
  });
});
