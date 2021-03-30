console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
document.addEventListener("DOMContentLoaded", () => {
    let breeds = document.getElementById("dog-breeds")
    let imageChallenge = fetch(imgUrl).then(resp => resp.json()).then(function(json){
        for (const msg of json.message){
            let img = document.createElement('img')
            img.src = msg
            document.body.appendChild(img)
        }
    })
    let breedChallenge = fetch(breedUrl).then(resp => resp.json()).then(function(json){
        for (const i in json.message){
            let li = document.createElement('li')
            li.innerHTML = i
            breeds.appendChild(li)
        }
    })
});
