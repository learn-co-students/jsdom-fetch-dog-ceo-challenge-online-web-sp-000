console.log('%c HI', 'color: firebrick');
  
document.addEventListener("DOMContentLoaded", () => {
  let allBreeds = [];
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  const dogContainer = document.getElementById('dog-image-container');
  const breedUl = document.getElementById('dog-breeds');
  const dropDown = document.getElementById('breed-dropdown')
  

  fetch(imgUrl)
  .then(res => res.json())
  .then(json => dogPics(json));
  
  fetch(breedUrl)
  .then(res => res.json())
  .then(result => {
    allBreeds = Object.keys(result.message);
    dogBreeds(allBreeds);
  })
  
  breedUl.addEventListener('click', (e) => {
    e.target.style.color = 'red';
  })
  
  dropDown.addEventListener('change', (e) => {
    let letter = event.target.value;
    let filteredDogs = allBreeds.filter(breed => breed.startsWith(letter));
    let child = breedUl.lastElementChild
    while (child){
      breedUl.removeChild(child);
      child = breedUl.lastElementChild;
    }
    dogBreeds(filteredDogs);
  })
    
  function dogPics(json){
    json.message.forEach(dog => {
      const dogImage = document.createElement('img');
      dogImage.src = dog;
      dogContainer.append(dogImage);
    });
  } 
  
  function dogBreeds(breeds){
    breeds.forEach(breed => {
      const breedLi = document.createElement('li');
      breedLi.innerHTML = breed;
      breedUl.appendChild(breedLi);
    });
  }
  
  
  
});