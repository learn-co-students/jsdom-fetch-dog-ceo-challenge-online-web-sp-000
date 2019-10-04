console.log('%c HI', 'color: firebrick')

window.addEventListener('DOMContentLoaded', (event) => {
    fetchImages();
    fetchBreeds();
    document.getElementById("dog-breeds").addEventListener("click", styleBreed);
    document.getElementById('breed-dropdown').addEventListener("change", filterBreed);
});

function fetchImages() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => addImages(json["message"]))
}

function addImages(json) {
  const div = document.getElementById('dog-image-container')
  for (let i = 0; i < json.length; i++) {
    const img = document.createElement('img')
    img.setAttribute("src", json[i])
    const node = document.createElement('div')
    node.appendChild(img)
    div.appendChild(node)
  }
}

function fetchBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => addBreeds(json["message"]))
}

function addBreeds(json) {
  const ul = document.getElementById('dog-breeds')
  for (breed in json) {
    if (json[breed].length > 0) {
      for (let i = 0; i < json[breed].length; i++) {
        const li = document.createElement('li');
        li.innerHTML = json[breed][i] + " " + breed;
        li.setAttribute("data-breed", li.innerHTML)
        ul.appendChild(li);
      }
    }
  }
}

function styleBreed(event) {
  event.target.style.color = "#DB7093";
}

function filterBreed() {
  var val = document.getElementById('breed-dropdown').value;
  const ul = document.getElementById('dog-breeds');
  const li = document.getElementsByTagName('li');

  for (let i = 0; i < li.length; i++) {
    if (li[i].dataset.breed[0] === val) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
