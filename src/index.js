console.log('%c HI', 'color: firebrick')
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedsUrl = 'https://dog.ceo/api/breeds/list/all'
let type 
let breedList
let fetchedList

    document.addEventListener("DOMContentLoaded", () => {
        fetchImg()
        fetchDog()
        document.getElementById("breed-dropdown").addEventListener("change", findBreedByFirstLetter)
        breedList = document.getElementById("dog-breeds")
    })

    function fetchImg() {
        fetch(imgUrl)
        .then(response => response.json())
        .then(result => renderImg(result.message)); 
    }


  function renderImg(dogs) {
      console.log(dogs)
      dogs.forEach(dog => {
          console.log(dog)
          const dogImgContainer = document.querySelector('#dog-image-container')
          const dogImg = document.createElement('img')
          dogImg.src = dog
          dogImgContainer.appendChild(dogImg)
      })
  }

  function fetchDog() {
      fetch(breedsUrl)
      .then(response => response.json())
      .then(json => renderDog(json));
  }

    function renderDog(breeds) {
        const breedList= document.getElementById("dog-breeds")
    
        breedList.addEventListener("click", (e) => {
            if (e.target.tagName === "LI"){
                e.target.style.color = "red"
            }
        })
        fetchedList = Object.keys(breeds.message)
        createLiForBreeds(fetchedList)
    }   

    function createLiForBreeds(breeds){
        console.log(breeds)
        breeds.forEach(breed => {
            let type = document.createElement("LI")
            type.setAttribute('class','breed-list')
            type.innerText = breed
            breedList.appendChild(type)
        })
    }

    function findBreedByFirstLetter(e){
        const filteredBreeds = fetchedList.filter((breed) => breed[0] === e.target.value)
        breedList.innerHTML = " "
        createLiForBreeds(filteredBreeds)
    } 

