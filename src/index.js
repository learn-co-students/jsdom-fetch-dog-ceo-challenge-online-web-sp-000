console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let doglist=[]

function fetchDog(){
  fetch(imgUrl)
  .then(res => res.json())
  .then(data => sog= data.message)
  .then(() => renderDog(sog))}


function renderDog(sog){
  console.log(sog)
  sog.forEach(image=>{
    console.log(image)
    let pictures=document.querySelector("#dog-image-container")
    let img = document.createElement("img")
    img.src=image
    pictures.append(img)
  })}

  function fetchBreed(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => dogtype=data.message)
    .then((data) => renderBreed(data))}

    function renderBreed(data){
      let theBreed=document.getElementById("dog-breeds")
      let snoopDogs=Object.keys(data)
      let canine=snoopDogs.map(num=>{
        let li = document.createElement("li")
        li.innerHTML=num
        return li})
        theBreed.append(...canine)}

        function getbreed(){
          fetch(breedUrl)
           .then(res => res.json())
           .then(data => dogType=data.message)
           .then((data) => newBreed(dogType))}
 
           function newBreed(dogType){
             let dropdown=document.getElementById("breed-dropdown").value
             let dogbreed=document.getElementById("dog-breeds")
             let snoopdog=Object.keys(dogType)
             breeds = snoopdog.filter(dog=>dog.startsWith(dropdown))
 
              let myDog = breeds.map(num=>{
                let li = document.createElement("li")
               li.innerHTML=num
               return li})
              dogbreed.append(...myDog)}
  


document.addEventListener('DOMContentLoaded', function() {
    fetchDog()
    //fetchBreed()
    let colorchange=document.getElementById("dog-breeds")
    colorchange.addEventListener("click", function(event){
      event.target.style.color="red"})
  
      let theBreed=document.getElementById("breed-dropdown")
      theBreed.addEventListener("change", getbreed)
    })

     
    
    
    
  
      
      //snoopdog.filter(dog=>dog.startsWith(a))
      //dropdown.addEventListener("change", (e)=>{
       // let doglist=[]
      //let letter=e.target.value
        //if (letter.value="d"){
         //let abcdfilter=doglist.filter(dog=>dog.startsWith(letter))
         //colorchange.innerHTML=fetchBreed(abcdfilter)}})})

       //function getbreed(){
        // fetch(breedUrl)
          //.then(res => res.json())
          //.then(data => dogType=data.message)
          //.then((data) => console.log(dogType))}

          //function newBreed(dogType){
            //let dropdown=document.getElementById("breed-dropdown").value
            //let dogbreed=document.getElementById("dog-breeds")
            //let snoopdog=Object.keys(dogType)
            //breeds = snoopdog.filter(dog=>dog.startsWith(dropdown))

             //let myDog = breeds.map(num=>{
               //let li = document.createElement("li")
              //li.innerHTML=num
              //return li})
             //dogbreed.append(...myDog)}
    
              
