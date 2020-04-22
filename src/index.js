console.log('%c HI', 'color: firebrick')

function fetchDogImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderDogImages(json));
}

function fetchDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => renderDogBreeds(json));
}

function renderDogImages(json) {
    const div = document.querySelector('div')
    json.message.forEach(image => {
        const img = document.createElement('img')
        img.src = image
        div.appendChild(img)
    })
}

function renderDogBreeds(json) {
    const ul = document.querySelector('ul')
    const keys = Object.keys(json.message)
    keys.forEach(breed => {
        const li = document.createElement('li')
        li.innerHTML = breed
        li.id = 'breed'
        li.type = 'button'
        ul.appendChild(li)
    })
    let listItems = document.querySelectorAll('li#breed')
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            if(item.classList.contains('lime') == false) {
                item.classList.add('lime')
                item.setAttribute('style', 'color: lime;')
            } else {
                item.classList.remove('lime')
                item.removeAttribute('style')
            }
        })
    })

    listItems.forEach(breed => {
        let letter = breed.innerText.charAt(0).toLowerCase()
        let fil = document.getElementById('breed-dropdown')
        fil.addEventListener('change', function() {
            let L = this.value
            if(L == "") {
                breed.removeAttribute('hidden')
            }
            else if(letter != L) {
                breed.setAttribute('hidden', 'true')
                window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
            }
            else {
                breed.removeAttribute('hidden')
                window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
            }
        }, false );
    })
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDogImages()
    fetchDogBreeds()
})
