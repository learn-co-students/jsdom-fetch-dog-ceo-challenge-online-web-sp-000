document.addEventListener("DOMContentLoaded", () => {
    console.log('%c HI', 'color: firebrick')
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const dogImgContainer = document.getElementById("dog-image-container");
    const breedList = document.getElementById("dog-breeds");
    const breedFilter = document.getElementById("breed-dropdown");

fetch(imgUrl)
.then(response => response.json())
.then(data => displayDogs(data['message']));

function displayDogs(data) {
        data.forEach(element => {
            dogImg = document.createElement('img')
           dogImg.setAttribute('src', element)
           dogImgContainer.appendChild(dogImg);
        });
}


fetch(breedUrl)
.then(response => response.json())
.then(data => displayBreeds(data['message']));

function displayBreeds(data) {
Object.keys(data).forEach(breedName => {

if (data[breedName]['length'] > 0) {

for (const nameVariant of data[breedName]) {
    let li = document.createElement('li');
    li.innerText = `${breedName}(${nameVariant})`
    breedList.appendChild(li);
    li.addEventListener('click', () => {

        li.style.color = "blue";
        
        })
}
}
else {
    let li = document.createElement('li');

    li.innerText = `${breedName}`
    breedList.appendChild(li);
    li.addEventListener('click', () => {

        li.style.color = "blue";
        
        })
}
})
}



breedFilter.addEventListener('change', () => {

    
let filterLetter = breedFilter[breedFilter.selectedIndex].value

document.querySelectorAll('#dog-breeds > li').forEach( element => {
    if (filterLetter == "") {
        element.style.display = 'block';
    }
    else if (element.innerText[0] != filterLetter) {
        element.style.display = 'none';
    }
    else {
        element.style.display = 'block';
    }
}

)
    
})






})


