console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    let breedList = document.getElementById('dog-breeds')
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(function(response) {
    return response.json();
    })
    .then(function(json){
    // Use the data inside of `json` to do DOM manipulation
    let dogImages = document.createElement("div")
    document.body.appendChild(dogImages)
    for (const image of json["message"]) {
        let p = document.createElement('p');
        p.innerHTML = `<img src="${image}" alt="Girl in a jacket" width="500" height="600">`
        dogImages.appendChild(p)
    }
    
    })
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(function(response) {
    return response.json();
    })
    .then(function(json){
    // Use the data inside of `json` to do DOM manipulation
    for (const breed in json["message"]) {
        let li = document.createElement('li');
        li.innerHTML = `${breed}`
        breedList.appendChild(li)
        li.addEventListener('click', function(event) {
            li.style.color = "lightblue";;
        });
        document.getElementById("breed-dropdown").onchange = drop;
    }
    })
    function drop() {
        for (breed of breedList.childNodes){
            if (breed.textContent[0] === this.value) {
                breed.style.display = "list-item";
            }
            else if (breed != breedList.childNodes[0]) {
                breed.style.display = "none";
            }
        }
        console.log(this.value)
    }
});
