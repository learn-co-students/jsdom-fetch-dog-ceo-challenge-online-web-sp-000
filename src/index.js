console.log('%c HI', 'color: firebrick')
const imgUrlc1 = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
window.onload = () => { 
    fetchDogImg()
    fetchDogBreeds()
    onClick()
};

let fetchDogImg = () => {
    fetch(imgUrlc1)
        .then((resp) => resp.json())
        .then((data) => postImg(data.message) )
      };

let postImg = (message) => {
    const div = document.querySelector('div#dog-image-container');
    message.forEach((link, index) => {
        const img = document.createElement('img')
        img.src = link
        img.height = "150"
        img.width = "180"
        img.hspace = "20"
        div.appendChild(img)
    })
};

let fetchDogBreeds = () => {
    fetch(breedUrl)
    .then((resp) => resp.json())
    .then((data) => listBreeds(data.message))
   };

let listBreeds = (breeds) => {
    const dog = document.querySelector('#dog-breeds');
    
    Object.keys(breeds).forEach((breed, index) => {
         const li = document.createElement('li');
         
         li.innerHTML = breed
         dog.appendChild(li);
    })
};

let onClick = () => {
    const someList = document.querySelectorAll('li')
    someList.forEach((list,index) => {
        document.addEventListener("click", () => list.innerHMTL.fontcolor("red"))
    })
    
}