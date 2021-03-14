const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

console.log('%c HI', 'color: firebrick');

const testImg = "https://images.dog.ceo/breeds/spaniel-irish/n02102973_5052.jpg";

function test(x){
    let image = new Image();
    image.src = x.message[1];
    const main = document.querySelector("div")
    const img = document.createElement('img')
    img.innerHTML = image;
    main.appendChild(img);
}

function gFG_Fun() { 
    let img = document.createElement('img'); 
    img.src =  testImg; 
    document.getElementById('container').appendChild(img); 
}  

function fetchimgUrl() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => test(json))
}


function renderimgUrl(images) {
    let array = images.message
    let image = new Image();
    array.forEach(pic => {
        image.src = pic;
        const main = document.querySelector("div")
        const h2 = document.createElement('h2')
        h2.innerHTML = image;
        main.appendChild(h2);
    })
}

document.addEventListener('DOMContentLoaded', function() {
    fetchimgUrl();
    
})