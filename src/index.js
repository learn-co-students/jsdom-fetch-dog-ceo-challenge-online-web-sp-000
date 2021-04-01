const breedDropdown = document.querySelector("#breed-dropdown")

document.addEventListener("DOMContentLoaded", function() {
    parseImages();
    parseBreeds();
});

breedDropdown.addEventListener("change", selectBreeds(target.value))

function parseImages()  {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp  => resp.json())
    .then(json => renderIMG(json["message"]))
}

function renderIMG(images)  {
    const imageContainer = document.querySelector('#dog-image-container')
    images.forEach(pic  => {
        const img = document.createElement('img')
        img.src =  pic
        imageContainer.appendChild(img)
    })
}

function parseBreeds() {
    return  fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp =>  resp.json())
    .then(json  => renderBreeds(Object.keys(json.message)))
}

function renderBreeds(dogs) {
    const listContainer = document.querySelector('#dog-breeds')
    dogs.forEach(breed => {
        const li = document.createElement('li')
        li.innerText = breed;
        listContainer.appendChild(li)
        li.addEventListener("click", changeFont)
    })

}

function changeFont(event) {
    event.target.style.color = "#FF69B4"
}

function selectBreeds(l)  {
    renderBreeds.breed.filter(br => br.startsWith(l))
}
//.console.log('%c HI', 'color: firebrick')