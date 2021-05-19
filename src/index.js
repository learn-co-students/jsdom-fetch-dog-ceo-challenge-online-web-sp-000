// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


function addImage(image) {
    let img = document.createElement("img")
    img.src = image
    document.getElementById("dog-image-container").appendChild(img)

}

function addBreed(breed, sub_breeds = []) {
    let li = document.createElement("li")
    let list = document.getElementById("dog-breeds")
    li.innerText = breed
    list.appendChild(li)
    if (sub_breeds.length > 0) {
        for (sub of sub_breeds) {
            let ul = document.createElement("ul")
            let inner_li = document.createElement("li")
            inner_li.innerText = sub
            ul.appendChild(inner_li)
            li.appendChild(ul)
        }
    }
    changeTextColor(li)
}

function changeTextColor(element) {
    element.addEventListener("click", (e) => {
        e.preventDefault()
        e.target.style.color = "blue"
    })
}

function filterBreeds() {
    let search_val = document.getElementById("breed-dropdown").value
    let list = document.getElementById("dog-breeds").childNodes
    list.forEach(
        (current, index) => {
            if (index > 0) {
                if (current.innerText[0] !== search_val) {
                    current.style.display = "none"
                } else {
                    current.style.display = ""
                }
            }
        }
    )
}

window.onload = () => {
    fetch(imgUrl)
        .then(response => response.json())
        .then(json => {
            for (let image of json["message"]) {
                addImage(image)
            }
        })

    fetch(breedUrl)
        .then(response => response.json())
        .then(json => {
            for (breed in json["message"]) {
                addBreed(breed, json["message"][breed])
            }
        })
    document.getElementById("breed-dropdown").addEventListener("change", filterBreeds)
}