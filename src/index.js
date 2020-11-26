console.log('%c HI', 'color: firebrick')
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'


function fetchDogs() {
    fetch(imgUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
}

function statusDogs(json){
    console.log(json);
    console.log("Z");
    console.log(json);

    json.forEach(dog => {
        console.log("Bark2");
    })
    for (const doggie of hest) {
        doggie;
        console.log("Y");
        console.log(doggie);
    }
}



document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
})
