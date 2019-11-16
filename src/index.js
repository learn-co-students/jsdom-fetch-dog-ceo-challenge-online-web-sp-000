document.addEventListener('DOMContentLoaded', function () {
  chalengeOne();
});

let arr=[];
  function chalengeOne() {
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
