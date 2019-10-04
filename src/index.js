console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function() {
  fetch(imgUrl).then(resp => resp.json()).then(json => {
    let container = document.querySelector('#dog-image-container');
    let imgs = json.message;

    imgList = imgs.map(img => {
      return `<img src="${img}" style="width: 600px"><br>`;
    }).join('');

    container.innerHTML = imgList;
  });

  fetch(breedUrl).then(resp => resp.json()).then(json => {
    let breeds = Object.keys(json.message);
    let list = document.querySelector('#dog-breeds');

    breedList = breeds.map(breed => {
      return `<li>${breed}</li>`;
    }).join('');

    list.innerHTML = breedList;
  });

});
