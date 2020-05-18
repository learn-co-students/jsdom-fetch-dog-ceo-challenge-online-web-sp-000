console.log('%c HI', 'color: firebrick')
function fetchDogImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json()
    })
    .then(function(json){
        json["message"].forEach(function(dog_image) {
            let image = document.createElement('img')
            image.src = dog_image
            document.querySelector('div#dog-image-container').appendChild(image)
        })
    })
}
function fetchDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
        return response.json()
    })
    .then(function(json){
        breeds_hash = json["message"]
        Object.keys(breeds_hash).forEach(function(breed) {
            if(breeds_hash[breed].length === 0) {
                console.log(breed)
                let li = document.createElement('li')
                li.innerText = breed
                button = document.createElement('button')
                button.className = "color_button"
                li.appendChild(button)
                document.querySelector("ul#dog-breeds").appendChild(li)
            } else {
            breeds_hash[breed].forEach(function(sub_breed) {
                console.log(`${sub_breed} ${breed}`)
                let li = document.createElement('li')
                li.innerText = `${sub_breed} ${breed}`
                button = document.createElement('button')
                button.className = "color_button"
                li.appendChild(button)
                document.querySelector("ul#dog-breeds").appendChild(li)
            })}
        })
    })
}
function clickToChangeColor() {
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    let color_buttons = document.querySelectorAll('button.color_button')
    color_buttons.forEach(function (button) {
        button.addEventListener("click", function() {
            button.parentElement.style.color = getRandomColor()
        })
    })
}
function filterBreeds() {
    let dropdown = document.querySelector('select#breed-dropdown')
    let selected_index = dropdown.selectedIndex
    let letters_options = dropdown.options
    first_letter = letters_options[selected_index].text.slice(0, 1)
    let lis = document.querySelectorAll('li')
    debugger
    filtered_lis = Array.from(lis).filter(function (li) {
        return li.innerText.slice(0, 1) === first_letter
    })
    document.querySelector('input#filter-submit').addEventListener("click", function() {
        ul = document.querySelector('ul#dog-breeds')
        ul.innerHTML = ""
        filtered_lis.forEach(li => ul.appendChild(li))
    })
}
document.addEventListener("DOMContentLoaded", function() {
    fetchDogImages()
    fetchDogBreeds()
    setTimeout(() => clickToChangeColor(), 2000)
    setTimeout(() => filterBreeds(), 2000)
});