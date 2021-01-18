console.log('%c HI', 'color: firebrick')

//global variables

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
let allDogBreedsArray = [];


  

//go fetch


fetch(imgUrl)
.then(resp => resp.json())
.then(json => {
    let imageSourceArray = json.message;
    for(src of imageSourceArray){
        let img = document.createElement('img');
        img.src = src;
        img.style = "width: 250px; height: auto;"
        let dogImageContainer = document.getElementById("dog-image-container");
        dogImageContainer.appendChild(img);
    }
});



fetch(breedUrl)
.then(resp => resp.json())
.then(json => {
    findEachBreed(json.message);
})



function findEachBreed(obj){
        for(const category in obj){     
            if(obj[category].length == 0){
                allDogBreedsArray.push(category);
            } else {
                for(let x = 0; x < obj[category].length; x++){     
                    allDogBreedsArray.push(`${category}, ${obj[category][x]}`);     
                }
            };    
        }

        
        let breedList = document.getElementById("dog-breeds");

        for(const breed of allDogBreedsArray){
            let li = document.createElement('li');
            li.textContent = breed;
            breedList.appendChild(li);
            li.addEventListener("click", colorChange)
        }

        function colorChange(){
            if(this.style.color != "green"){
                this.style.color = "green";
            } else {
                this.style.color = "black";
            }
        }
        
}





function colorChange(el){
    el.style.color = "green";
}


document.addEventListener("DOMContentLoaded", () => {
    let dropdown = document.getElementById("breed-dropdown");
dropdown.addEventListener("click", () => {
    let select = dropdown.value;
    let allListItems = document.querySelectorAll('li');
    for(let x = 0; x < allListItems.length; x++){
        if(allListItems[x].textContent[0] == select){
            allListItems[x].style.display = "block";
        } else{
            allListItems[x].style.display = "none";
        };
    }

})




})

////justin in case


