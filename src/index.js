function renderImages(json) 
{        
    const imageContainer = document.getElementById('dog-image-container');
    json.forEach(imgUrl => {  
      const img = document.createElement('img');
      img.setAttribute("src", imgUrl);
      imageContainer.appendChild(img);
    })
} 

function renderBreeds(json) 
{        
    const breedUL = document.getElementById('dog-breeds');

    for (const key in json) {
        let li = document.createElement("li");
        li.setAttribute("id", `${key}`);
        li.setAttribute("onClick", `colorChange('${key}')`);
        li.appendChild(document.createTextNode(key));
        breedUL.appendChild(li);
        if (json[key].length > 0)
        {
            let childLI = document.getElementById(key);
            let ul = document.createElement('ul');
            childLI.appendChild(ul);
            json[key].forEach(subBreed => {  
                let liSecondLevel = document.createElement("li");
                let subID = `${key}_${subBreed}`
                liSecondLevel.setAttribute("id", subID);
                liSecondLevel.setAttribute("onClick", `colorChange('${subID}')`);                
                liSecondLevel.appendChild(document.createTextNode(subBreed));
                ul.appendChild(liSecondLevel);
              })            
        }
      }
}

function fetchImages()
{
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json.message)); 
}

function fetchBreeds()
{
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json.message));
}

function colorChange(clicked_id)
{
    let id = document.getElementById(clicked_id);
    id.style.color = "green";
}

function filterBreed(value)
{
    const breedUL = document.getElementById('dog-breeds'); 
    for (let i = 0; i < breedUL.children.length; i++) {
        if (breedUL.children[i].id.slice(0,1) == value) 
        {
            breedUL.children[i].style.display = "block";
        }
        else 
        {
            breedUL.children[i].style.display = "none";
        }
      }    
}

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {  
  fetchImages();
  fetchBreeds();  
});

