//console.log('%c HI', 'color: firebrick')

function grabImages() {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
.then((response) => {
    return response.json();
    
  })
  .then((json) => {
    for (const key of json.message){
    let box = document.getElementById("dog-image-container");
    let newImg = document.createElement("IMG")
    newImg.src = key 
    box.appendChild(newImg)
    }
   })
}

function displayBreeds() {
const breedUrl = "https://dog.ceo/api/breeds/list/all"

fetch(breedUrl)
.then((response) => {
    return response.json();
})
.then((json) => {
    for (const element in json.message){
        let breeds = document.getElementById('dog-breeds')
        let newEle = document.createElement("LI")
        newEle.innerText = element 
        breeds.appendChild(newEle)

        newEle.addEventListener('click', function(e){
            e.target.style.color = 'blue'
        })
    }
})

}


function alphaOrder(){
    let dropdwn = document.getElementById("breed-dropdown")
    let all = document.getElementsByTagName("LI")  
    let getBreedList = document.getElementById('dog-breeds')

    dropdwn.addEventListener('change', function(event) {
       let removeThese = []

        for (const key of all){
            
            if (!key.innerText.startsWith(dropdwn.value)){
                removeThese.push(key)
               
                
            }
         }
        for (const key of removeThese){
            getBreedList.removeChild(key)
        } 
     })
}

document.addEventListener('DOMContentLoaded', function(event) {
    grabImages();
    displayBreeds();
    alphaOrder();
});





