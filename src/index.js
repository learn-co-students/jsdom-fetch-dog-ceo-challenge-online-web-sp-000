console.log('%c HI', 'color: firebrick')

const breeds = []
// const dropDown = document.querySelector('select')
// Why doesn't this work??????????????????????
// const jfc = document.getElementById('breed-dropdown')
// I am so confused

function fetchDogImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => {
        json.message.forEach(image => renderDogImage(image))
    })
}

function fetchDogBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => {
        // json.message.forEach(breed => addBreed(breed))


        Object.keys(json.message).forEach(key => {
            if (json.message[key] == []) {
                breeds.push(`${key}`)
            } else {
                json.message[key].forEach(breedPrefix => {
                    breeds.push(`${key} - ${breedPrefix}`)
                })
            }
        })
        addBreedsToList(breeds)

        // Object.keys(json.message).forEach(key => {
        //     console.log(`${key}`)
        //     console.log(`${json.message[key]}`)

        // })
        
    })
    
}

function selectBreedsThatStartWith(letter) {
    let breedsThatStartWith = breeds.filter(breed => breed.startsWith(letter))
    addBreedsToList(breedsThatStartWith)
}

function addBreedsToList(breedList){
    const list = document.getElementById('dog-breeds')
    removeAllChildNodes(list)
    breedList.forEach(breed => {
        const listItem = document.createElement("li")
        listItem.innerText = breed
        list.appendChild(listItem)
        listItem.addEventListener("click", updateLiColor)
    })
    
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// dropdown.addEventListener("change", e => {
//     selectBreedsThatStartWith(e.target.value)
// })

function updateLiColor(e){
    e.target.style.color = "blue"
}

function renderDogImage(image) {
    const imageContainer = document.getElementById('dog-image-container')
    const newImage = document.createElement("img")
    newImage.src = [image]
    imageContainer.appendChild(newImage)
}

function setFilterListener(){
    let dropdown = document.getElementById('breed-dropdown')
    dropdown.addEventListener('change', e => {
        selectBreedsThatStartWith(e.target.value)
    })
}

document.addEventListener("DOMContentLoaded", function(){
    fetchDogImages()
    fetchDogBreeds()
    setFilterListener()
})