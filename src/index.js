document.addEventListener('DOMContentLoaded', function () {
  challengeOne();
  challengeTwo();
  challengeFour()
});

  function challengeOne() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
      .then(function(response){
        return response.json();
      })

      .then(function(json){
        for(const elmt of json.message)
           insertImage(elmt);

      })
  }
  function insertImage(url) {
      let image=document.createElement('img');
      document.querySelector('#dog-image-container').appendChild(image);
      image.src=url;
  }

  function challengeTwo() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(function(response){
        return response.json();
      })

      .then(function(json){
        for(const key in json.message)
           loadDogs(key);

      })
  }

  function loadDogs(breed) {
    let dog=document.createElement('li');
    document.querySelector('#dog-breeds').appendChild(dog)
    dog.innerText=breed;
    dog.addEventListener('click', function (event) {
      this.style.color='red'
    })
  }

  function challengeFour() {
    let options=document.querySelector('#breed-dropdown')
    options.addEventListener('change', function (event) {
      let li=document.querySelectorAll('li')
        for(const i of li){
          i.style.display = "block"
          if (i.innerText.charAt(0)!=options.value) {
            i.style.display = "none"
          }
        }

    })
  }
