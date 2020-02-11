console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImg() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => console.log(fetchImg(json))   
}

function renderImg(json){
    document.
}

document.addEventListener('DOMContentLoaded', function() {
    fetchImg()
  })