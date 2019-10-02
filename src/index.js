console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
  fetchImages();
});

function displayImages(json){
  console.log(json);
}
function fetchImages(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  let returnString = "";
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => displayImages(json));
}