document.addEventListener('DOMContentLoaded', () => {

    console.log('%c HI', 'color: firebrick')
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const ulContainer = document.querySelector('#dog-breeds')
    
    
    
    
    fetch(imgUrl)
    .then(response => response.json())
    .then(result => result.message.forEach(element => appendToDom(element)))
    
    function appendToDom(json) {
        const imageContainer = document.querySelector("#dog-image-container")
        let image = document.createElement('img')
        image.src = json
        imageContainer.appendChild(image)
    }
    
    
    fetch(breedUrl)
    .then(response => response.json())
    .then(result => pushToContainer(result))
    
    // result.message.forEach(element => pushToContainer(element))
    
    function pushToContainer(json) {
        let myArr = Object.keys(json.message)
        myArr.forEach(element => {
            let ulContainer = document.querySelector('#dog-breeds')
            let liElement = document.createElement('li')
            liElement.innerText = element
            liElement.className = 'doggy'
            ulContainer.appendChild(liElement)
            
        }) 
    }
    
    ulContainer.addEventListener('click', event => {
       
        if (event.target.className === 'doggy') {
            event.target.style.color = 'purple'
        }
    
    
    })



})







