console.log('%c HI', 'color: firebrick')

// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// fetch (imgUrl)
// .then(resp => resp.json())
//   .then(resp => {
//       renderDogs(resp.message)

// })


// function renderDogs(dogs) {
//     console.log(dogs)
//     dogs.forEach(dog => {
//         console.log(dog)
//       const goodDogContainer = document.querySelector('#dog-image-container')
//       const goodBoy = document.createElement('img')
//       goodBoy.src = dog
//       goodDogContainer.appendChild(goodBoy)
//     });
//   }
  
document.addEventListener('DOMContentLoaded', () => {
    let breedMenu = document.querySelector('#breed-dropdown');
    fetchDogs();
    fetchAllDogs();
    document.addEventListener('click', changeBreedColor);
    breedMenu.addEventListener('change', filterBreeds)
  })
  
  const fetchDogs = () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(res => res.json())
    .then(showDogs);
  }
  
  const showDogs = dogs => {
    let dogDiv = document.querySelector('#dog-image-container');
    dogs.message.forEach(dogURL => {
      dogDiv.innerHTML += `
        <img src="${dogURL}"><br>
      `
    })
  }
  
  const fetchAllDogs = (filter = "") => {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl).then(res => res.json()).then(breeds => {showBreeds(breeds, filter)});
  }
  
  const showBreeds = (breeds, filter) => {
    ul = document.querySelector('#dog-breeds');
    if (filter === "") {
      for(const breed in breeds.message) {
      ul.innerHTML += `
        <li id="${breed}">${breed}</li>
      `
    }} else {
      ul.innerHTML = ''
      for(const breed in breeds.message) {
        if (breed[0] === filter) {
          ul.innerHTML += `
            <li id="${breed}">${breed}</li>
          `
        }
      }
    }
  }

  const changeBreedColor = e => {
    if (e.target.tagName === 'LI') {
      e.target.style.color = "Blue"
    }
  }
  
  const filterBreeds = e => {
    let filter = e.target.value;
    fetchAllDogs(filter);
  }