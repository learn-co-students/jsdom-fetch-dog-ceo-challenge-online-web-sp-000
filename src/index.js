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

    // Know I have to iterate over each breed to determine whether breed starts with selected letter in id(breed dropdown)

    // Since I know I have to iterate through the entire ul (dog-breeds), I need to create and array/list which contains each breed
      
    // Create a variable ul which selects id dog-breeds

    // Then create variable which captures each li element nested in dog-breeds respresenting a different breed
        // Is each li element already loaded at this point or do I need to create li elements

    // Add EventListener to id breed-dropdown for when user changes starting letter

    // Once starting letter is changed/clicked, need to traverse through entire list of breeds held in all_breeds (list variable)

    // For each element (loop) all-breeds (list variable), compare first letter of each element to letter selected in breed-dropdown

    // If element starting letter inside all-breeds does not match, then switch style.display of element to 'none'

    // fetchBreeds();

    const ul = document.getElementById("dog-breeds")
    const all_breeds = ul.getElementsByTagName("li")
    const filteredBreed = document.getElementById("breed-dropdown")


    filteredBreed.addEventListener('change', function(e) {
      for (let i = 0; i < all_breeds.length; i++){
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
