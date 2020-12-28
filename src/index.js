console.log('%c HI', 'color: firebrick')

let breeds = [];


document.addEventListener("DOMContentLoaded", function() {
    fetchDogs();
    fetchDogBreeds();
})

function fetchDogs() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json));
}  

function renderImages(json) {
    const dogImageContainer = document.querySelector('#dog-image-container');
    Object.keys(json.message).forEach(dogImgKey => {
        const img = document.createElement('img');
        img.src = json.message[dogImgKey];
        img.alt = "Image of a dog";
        dogImageContainer.appendChild(img);
    })
}

function fetchDogBreeds() {
    const dogBreedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(dogBreedUrl)
    .then(resp => resp.json())
    .then(json => addDogBreeds(json));
}  

// I don't like how everything is in this one function. Would like to rework later
function addDogBreeds(json) {
    for (const key in json.message) {
        let li = document.createElement('li')
        let appendLi = document.querySelector('#dog-breeds').appendChild(li)
        document.querySelector('#dog-breeds').appendChild(li).innerText = key
    
        appendLi.addEventListener("click", function(e) {
            e.target.style.color = "green"
          })

          document.querySelector('#breed-dropdown').addEventListener('change', function(e) {
            letterFilter = document.querySelector("#breed-dropdown").value
      
            for (const key in json.message) {
              if (key[0] === letterFilter) {
                let ul = document.querySelector('ul')
                ul.removeChild(ul.querySelector('li'))
      
                let li = document.createElement('li')
                let appendLi = document.querySelector('#dog-breeds').appendChild(li)
                document.querySelector('#dog-breeds').appendChild(li).innerHTML = key
              }
            }
        })
    }
}