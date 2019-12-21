console.log('%c HI', 'color: firebrick')

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogPictures(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json =>addDogtoDOM(json.message))
}


function addDogtoDOM(array){
    let div = document.createElement('div')
    for (const element of array){
        div.innerHTML += `<img src=${element}>`
    }
    
    document.body.appendChild(div)
}


function fetchDogBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json=>listDogBreeds(Object.keys(json.message)))
}

function listDogBreeds(array){
    let ul = document.querySelector('ul#dog-breeds')
  
    for (const element of array){
        ul.innerHTML += `<li onclick= "this.style.color ='blue'" >${element}</li>`
      }
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }

function filterDog(value){
    let ul = document.querySelector('ul#dog-breeds')
    removeChildren(ul)

    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json=>{
        let breeds = Object.keys(json.message);
        breeds = breeds.filter(breed=>breed.startsWith(value));
        listDogBreeds(breeds);
})
}

function addSelectListener(){
    let dog = document.querySelector("select")
    dog.addEventListener("change",()=>{
        filterDog(dog.value)
    })
}





document.addEventListener("DOMContentLoaded",()=>{
  fetchDogPictures()
  fetchDogBreeds()
  addSelectListener()
})

