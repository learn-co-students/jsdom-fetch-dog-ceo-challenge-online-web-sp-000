console.log('%c HI', 'color: firebrick')

function fetchImages(){
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const images = json["message"]
        addImages(images)
    })
}

function addImages(images){

}

document.addEventListener('DOMContentLoaded', function(){
    fetchImages()
})

