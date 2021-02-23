document.addEventListener('DOMContentLoaded', function() {

console.log('%c HI', 'color: firebrick')
const imgDiv = document.getElementById("dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breedSelector = document.getElementById('breed-dropdown')
dogBreedsUl = document.getElementById('dog-breeds')
let breedFirtsLetter = []
//only for test ############################################
  let breed = document.getElementById("dog-image-container")
const breedObject = {}

  function imgsUrl(){
   fetch(imgUrl)
   .then(function(response) {
     return response.json() 
  }) 
   .then(function(data) {
      renderImgs(data.message)
    })
 
  }

  function breeds(letter = ''){
     fetch(breedUrl)
    .then(function(response) {
      return response.json() 
   }) 
    .then(function(data) {
      renderBreeds(Object.assign(breedObject, data.message),letter);
     })
   }
   

   function renderBreeds(json,letter) {
      dogBreedsUl.innerHTML = ""


      for (const property in json) {
         if(letter === '' || letter === 'all'){
            if (json[property][0]){ 
               json[property].forEach(function(element){
                  if (!breedFirtsLetter.includes(property.split('')[0]) ){
                     breedFirtsLetter.push(property.split('')[0])
                     const newOption = document.createElement('option')
                     newOption.innerHTML = `${property.split('')[0]}`
                     newOption.value = property.split('')[0]
                     breedSelector.appendChild(newOption)
                  }
                  const newLi = document.createElement('li')
                  newLi.id = `${property}-${element}`
                  newLi.innerHTML = `${property}  ${element}`
                  dogBreedsUl.appendChild(newLi)
               })
            }else{
               if (!breedFirtsLetter.includes(property.split('')[0]) ){
                  breedFirtsLetter.push(property.split('')[0])
                  const newOption = document.createElement('option')
                  newOption.innerHTML = property.split('')[0]
                  newOption.value = property.split('')[0]
                  breedSelector.appendChild(newOption)
               }
               
               const newLi = document.createElement('li')
               newLi.innerHTML = `${property}`
               newLi.id = `${property}`
               dogBreedsUl.appendChild(newLi)
            }
         }else if(`${property.split('')[0]}` === letter){
            if (json[property][0]){
               json[property].forEach(function(element){
                  const newLi = document.createElement('li')
                  newLi.id = `${property}-${element}`
                  newLi.innerHTML = `${property}  ${element}`
                  dogBreedsUl.appendChild(newLi)
               })
            }else{    
               const newLi = document.createElement('li')
               newLi.innerHTML = `${property}`
               newLi.id = `${property}`
               dogBreedsUl.appendChild(newLi)
            }
         }
      }
   }
    
   function renderImgs(json){
      json.forEach(function(e){
            const newImg = document.createElement('img')
            newImg.src = `${e}`
            imgDiv.appendChild(newImg)
      })
   }


 
  breedSelector.addEventListener('change', (e) => {
        breeds(e.target.value )            
 }) 
console.log()
breeds()
imgsUrl()


 dogBreedsUl.addEventListener("click",function(e){
    e.target.style.color = "blue"
   
 })
 })


