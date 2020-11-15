console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded",function(){
    // getDogPics();
    getBreed();
    dropDown();
})

function getDogPics(){
    return fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(json => { 
        let ul = document.getElementById('dog-image-container');
        for(let i = 0; i < json.message.length; i++){
            let image = document.createElement('img');
            let li = document.createElement('li');
            image.src = json.message[i];
            ul.appendChild(image);
        }
        }
        )
}

function getBreed(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    return fetch(breedUrl)
    .then(response => response.json())
    .then(results =>{
            let breedArray = (Object.keys(results.message));
            
            let ul = document.getElementById("dog-breeds");
            // console.log(breedArray.length)
            for (let i = 0; i < breedArray.length; i++){
                let li = document.createElement('li');
                li.innerHTML = breedArray[i];
                li.addEventListener("click", breedColor);
                ul.appendChild(li)
            }
        }   
        )
}

// if it starts with a certain letter, display that breed
// iterate through breedArray
// find a way to track the first letter of the breed
// create a select event
// match the the first letter with the value of that event

function breedColor(event){
        event.target.style.color = 'orange';
}








   

