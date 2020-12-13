const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let dogImageContainer = document.getElementById('dog-image-container')
let imgTag = document.createElement('img')


document.addEventListener('DOMContentLoaded', function () {
  fetchDogPics
//    fetch("urlToDataSource")
//    .then(function(response) { return response.json();})
//   .then(function(json) { console.log(json) })
});

function fetchDogPics() {
    fetch(imgUrl) // Pass in the url to the fetch for our image url
    .then(resp => resp.json()) // Get the json
    .then(function(json) {
      for (const elements of json) {
        dogImageContainer.imgTag()
      }
    })
} 

function renderDocPictures(image) {

}
