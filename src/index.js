console.log('%c HI', 'color: firebrick')


function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => {
        json.message.forEach(image => renderImages(image))})        
  }
  
  function renderImages(image) {
    const main = document.getElementById('dog-image-container')
    const newImage = document.createElement('img')
    newImage.src = image;
    main.appendChild(newImage); 
  }
  

  function fetchBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl)
      .then(resp => resp.json())
      .then(json => {
        const breeds = [];
        for (const [key, value] of Object.entries(json.message)) {
            if (value.length){
                for (let i = 0; i < value.length; i++){
                    breeds.push(value[i] + ' ' + key );
                }
            } else {
                breeds.push(key); 
            }
        }
        breeds.forEach(breed => addBreed(breed))});

  }


  function addBreed(breed){
    const main = document.getElementById('dog-breeds')
    const newBreed = document.createElement('li')
    newBreed.innerHTML = breed;
    main.appendChild(newBreed); 
  }



  function selectBreed(){

    document.getElementById("dog-breeds").addEventListener("click", function(e) {
      if(e.target && e.target.nodeName == "LI") {
          e.target.style.color = "green";
      }
    });
}



  document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
    selectBreed();
  })
