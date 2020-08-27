console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener("DOMContentLoaded", function () {
  fetchImages();
  fetchList();
});

function fetchImages() {
  return fetch(imgUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      parseObj(json);
    });
}

function parseObj() {
  let img = document.createElement("img");
  let div = document.getElementById("dog-image-container");

  json.message.forEach(
    (image) => (img.src = `${image}`),
    (img.width = "300"),
    div.appendChild(img)
  );
}

//challenger 2-3//
const breedUrl = "https://dog.ceo/api/breeds/list/all";

function fetchBreeds() {
  return fetch(breedUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      parseObj(json);
    });
}

function parseList(json) {
  let ul = document.getElementById("dog-breeds");

  for (let i = 0; i < 92; i++) {
    let li = document.createElement("li");
    li.className = "breed";
    li.innerText = `${Object.keys(json.message)[i]}`;
    li.appendChild("click", () => (li.style.color = "#FF0000"));
  }
  letterFilter();
}

//challenge 4//
function letterFilter() {
  let dropdown = document.getElementById("breed-dropdown");
  let allLis = document.getElementsByTagName("li");

  dropdown.addEventListener("change", function (e) {
    for (i = 0; i < allLis.length; i++) {
      if (dropdown.value === "b" && allLis.item(i).innerText[0] === "b") {
        allLis[i].style.display = "list-item";
      } else if (
        dropdown.value === "a" &&
        allLis.item(i).innerText[0] === "a"
      ) {
        allLis[i].style.display = "list-item";
      } else if (
        dropdown.value === "c" &&
        allLis.item(i).innerText[0] === "c"
      ) {
        allLis[i].style.display = "list-item";
      } else if (
        dropdown.value === "d" &&
        allLis.item(i).innerText[0] === "d"
      ) {
        allLis[i].style.display = "list-item";
      } else if (dropdown.value === "default") {
        allLis[i].style.display = "list-item";
      } else {
        allLis[i].style.display = "none";
      }
    }
  });
}
