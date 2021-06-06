console.log('%c HI', 'color: firebrick')
//Ayson puts global variables at the top, then event listeners second, then functions
const breedUl = document.querySelector('#dog-breeds');
const dropDown = document.querySelector('#breed-dropdown');
let breedsArray; //or breedsArray = []

//Do not ever copy and past using this code!!!
//All of the individual functionality should be run in its own function
//that way it can be reused, and I won't have the atrocious looking code below.

dropDown.addEventListener('change', (event) =>{
  const letter = event.target.value;
  console.log(breedsArray);
  const arrayB = breedsArray.filter(breed => breed.startsWith(letter));
  arrayB.forEach( element => {
    //breedUl.innerHTML = '';
    const list = document.createElement('li');
    list.innerText = element;
    breedUl.appendChild(list);
})

})

breedUl.addEventListener('click', (event) => {
  if (event.target.style.color === "red") {
    event.target.style.color = 'black';
  } else {
    event.target.style.color = 'red';
  }
})

function getImages(){
fetch("https://dog.ceo/api/breeds/image/random/4").then(function(response){
    return response.json()
  }) .then(function(json){
      json['message'].forEach(element => {
        const img = document.createElement('img');
        img.src = element;
        document.querySelector('#dog-image-container').appendChild(img); 
      });
  })
}
//getImages()

function getBreeds(){
  fetch('https://dog.ceo/api/breeds/list/all').then(function(response){
      return response.json()
  }) .then(function(json) {
    //this is not proper!!!
    breedsArray = Object.keys(json.message);
        for (const key in json['message']) {
            json['message'][key].forEach( element => {
                const list = document.createElement('li');
                list.innerText = element;
                breedUl.appendChild(list);
            })
        }
  })
}
getBreeds()


