window.addEventListener('DOMContentLoaded', () => {
    fetchImage()
    fetchBreed()
    const lis= document.getElementsByTagName("li")
    
    lis.forEach(li=> {
        li.addEventListener("click",()=>{
            li.style.color = "red"
        })  
    })
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
    const ul = document.getElementById("dog-breeds")

    for (const [key, value] of Object.entries(json.message)) {
   
        const li = document.createElement("li")
        li.innerText = key
        const subUl = document.createElement("ul")
        for(const element of value){
            const subLi = document.createElement("li")
            subLi.innerText = element
            subUl.appendChild(subLi)
        }

        li.appendChild(subUl)
        ul.appendChild(li)
      }
     


}