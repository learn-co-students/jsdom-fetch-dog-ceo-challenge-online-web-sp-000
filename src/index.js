window.addEventListener('DOMContentLoaded', () => {
    fetchImage()
    fetchBreed()
    
})


function fetchImage(){ 
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => showImage(json))
}

function showImage(json){
    const divImage = document.getElementById("dog-image-container")
    json.message.forEach(image => {
    const img = document.createElement('img')
    img.src = image
    divImage.appendChild(img)
    })     
}

function fetchBreed(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => addBreed(json))
}

function addBreed(json){
    for (const [key, value] of Object.entries(json.message)) {
        displayABreed(key, value)
      }

    const select = document.getElementById("breed-dropdown")
    select.addEventListener("change",(event)=>{
        const ul = document.getElementById("dog-breeds")
        ul.innerText = ""
        const letter = event.target.value
        for (const [key, value] of Object.entries(json.message)){
            if (key.charAt(0) === letter){
                displayABreed(key,value)
            }
        }
    })
}

function displayABreed(key, value){
    const ul = document.getElementById("dog-breeds")
    const li = document.createElement("li")
    li.addEventListener("mousedown",()=>{
        li.style.color = "red" 
    })  

    li.addEventListener("mouseup",()=>{
        li.style.color ="black" 
    })  

    li.innerText = key
    const subUl = document.createElement("ul")
    for(const element of value){
        const subLi = document.createElement("li")
         subLi.addEventListener("mousedown",()=>{
            subLi.style.color = "red" 
         })  

         subLi.addEventListener("mouseup",()=>{
              subLi.style.color = "black" 
         }) 
          subLi.innerText = element
          subUl.appendChild(subLi)
     }

      li.appendChild(subUl)
      ul.appendChild(li)

}