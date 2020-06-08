document.addEventListener("DOMContentLoaded" , () => {
    console.log('%c HI', 'color: firebrick')

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    //Uses fetch to get the images from the above URL
    fetch(imgUrl)
    .then(function(response) {
        return response.json();
    })
    //Adds image elements to the DOM for each image in the array
    .then(function(json){
        for (const key in json.message) {
            let domImg = document.createElement("img");
            domImg.src = json.message[key];
            document.getElementById("dog-image-container").appendChild(domImg);
        }
    })

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        for(const key in json.message) {
            let list = document.createElement("li");
            let textnode = document.createTextNode(key);
            list.appendChild(textnode);
            document.getElementById("dog-breeds").appendChild(list);
        };
    })

    document.addEventListener('click', function(event){
        event.target.style.color = 'red';
    })

    document.getElementById('breed-dropdown').addEventListener('change', (event) => {
        const letter = event.target.value

        const filterBreeds = document.getElementById("dog-breeds").filter((breed) => breed.startsWith(letter))

        document.getElementById("dog-breeds").innerHTML = createDogList(filterBreeds);
    })



})

