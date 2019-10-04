console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", function() {
  fetchImages();
});

function displayImages(json) {
  const imageDiv = document.getElementById("dog-image-container");
  for (let i = 0; i < json.message.length; i++) {
    const img = document.createElement("img");
    img.src = json.message[i];
    imageDiv.appendChild(img);
  }
}

function fetchImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => {displayImages(json);
                   getBreeds(json)});
}

function getBreeds(json) {
  const breedList = document.getElementById("dog-breeds");
  for (let i = 0; i < json.message.length; i++){
    const li = document.createElement("li");
    const breed = json.message[i].split("/");
    li.innerHTML = breed[4];
    li.addEventListener('click', function(e){
      this.style.color = "red";
    });
    breedList.appendChild(li);
  }
}
