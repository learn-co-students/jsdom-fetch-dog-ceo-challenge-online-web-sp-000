const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let doggies = [];
let breeds = [];

fetch(imgUrl)
  .then((response) => {
    return response.json()
  }).then((img) => {
    doggies = img.message;
    doggies.forEach((el) => renderDoggo(el));
  });

fetch(breedUrl)
  .then((response) => {
    return response.json()
  }).then((text) => {
    breeds = Object.keys(text.message);
    breeds.forEach((el) => listBreeds(el));
  });

function renderDoggo(doggo) {
  let div = document.querySelector('#dog-image-container');
  let ul = document.createElement("ul")
  let li = document.createElement("li")
  div.append(ul);
  ul.appendChild(li);
  li.innerHTML = `<img src=\"${doggo}\" height=\"150px\">`
}

function listBreeds(breed) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement("li")
  ul.appendChild(li);
  li.innerText = breed;

  li.addEventListener('click', () => {
    li.style.color = '#00FF00'
  })
}

let filter = document.querySelector('#breed-dropdown');

filter.addEventListener('change', () => {
  let selected = filter.value;
  let filteredBreeds = breeds.filter(breed => {
    return breed[0] === selected
  });
  let ul = document.querySelector('#dog-breeds');
  ul.innerHTML = "";
  filteredBreeds.forEach((el) => listBreeds(el));
});