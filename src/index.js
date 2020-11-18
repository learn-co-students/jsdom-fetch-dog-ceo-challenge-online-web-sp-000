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
        
        selectBreed();
        filterBreedsByLetter();

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



  function filterBreedsByLetter(){

    const ul = document.getElementById("dog-breeds")
    const all_breeds = ul.getElementsByTagName("li")
    const filteredBreed = document.getElementById("breed-dropdown")

    filteredBreed.addEventListener('change', function(e) {
      for (let i = 0; i < all_breeds.length; i++){
        all_breeds[i].style.display = 'block'
        if (all_breeds[i].innerText[0] != e.target.value){
          all_breeds[i].style.display = 'none';
        }
      }      
    });
  }


  document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
  })
