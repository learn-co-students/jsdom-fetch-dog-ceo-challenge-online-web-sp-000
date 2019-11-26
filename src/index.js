console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogsContainer = document.getElementById("dog-image-container")

function addDog(dog) {
    const tr = document.createElement('tr')

    tr.innerHTML = `<img src = ${dog.message} >`

    dogsContainer.append(tr)
}

function addDogs(dogs) {
    dogs.message.forEach((dog) => addDog(dog))
}

function getDogs() {
    fetch(imgUrl)
        .then((response) => response.json())
}

getDogs()
.then((dogs) => addDogs(dogs))