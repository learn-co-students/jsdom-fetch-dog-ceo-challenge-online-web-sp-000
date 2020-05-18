console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
let listUl = document.getElementById("dog-breeds");
let listLi = listUl.getElementsByTagName("li");
let filter = document.getElementById("breed-dropdown");

function dogsImageFetch(){
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderDogs(json));
}

function renderDogs(json) {
  json.message.forEach( function(obj) {
    const img = new Image();
    img.src = obj.bannerImg1;
    document.getElementById("dog-image-container").appendChild(img);
  });
}

function dogsListFetch(){
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => listDogs(json));
}

function listDogs(json) {
  for (const key in json.message){
    let li = document.createElement('li');
    li.innerHTML = key;
    document.getElementById("dog-breeds").appendChild(li);
      li.addEventListener("click", function(){
      li.style.color = 'blue';
      });
  }
}

filter.addEventListener('change', function(){
  alert(filter.value);
      for (let i = 0; i < listLi.lenght; i ++){
        let breed = listLi[i]
          if (breed.innerHTML.startsWith(filter.value)){
            listLi[i].style.display = "";
            console.log("ok");
          } else {
            listLi[i].style.display = "none";
            console.log('nope');
          }
      }
});

  dogsImageFetch()
  dogsListFetch()
})
