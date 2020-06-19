console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl).then(resp => resp.json()).then(json => fourDogs(json))
fetch(breedUrl).then(resp => resp.json()).then(json => getBreeds(json))
let breeds = []

function fourDogs(json){
    container = document.getElementById("dog-image-container")

    for (let image of json.message){
        
        let img = document.createElement("img")
        img.src = image
        container.appendChild(img)
    }
}

function getBreeds(json){
breeds = Object.keys(json.message)
showBreeds(breeds)
}


function showBreeds(breeds){
    console.log(breeds)
   container = document.getElementById("dog-breeds")
container.innerHTML = ""
   for (let breed of breeds){
      let li = document.createElement("li")
      li.setAttribute("class", "breed")
      
      let breedNode = document.createTextNode(breed);
      li.appendChild(breedNode)
      container.appendChild(li)
   }
   let allBreeds = document.querySelectorAll(".breed")
   allBreeds.forEach(breedLi => {
       breedLi.addEventListener("click", function(breedLi){
           
           breedLi.target.style.color = "pink"
       })
   })
}

function filterBreed(){
    container = document.getElementById("dog-breeds")
    container.innerHTML = ""
    let rubbishObject = {}
    breedLetter = document.getElementById("breed-dropdown").value
    let filteredArray = breeds
    // let breedsArray = Object.values(breeds)
    console.log(breedLetter)
    if (breedLetter == "a"){
         filteredArray = breeds.filter(breed => breed[0] === "a" )    
    }
    if (breedLetter == "b"){
         filteredArray = breeds.filter(breed => breed[0] === "b" )    
    }
    if (breedLetter == "c"){
        filteredArray = breeds.filter(breed => breed[0] === "c" )    
    }
    if (breedLetter == "d"){
        filteredArray = breeds.filter(breed => breed[0] === "d" )    
    }
    showBreeds(filteredArray)
}



