console.log('%c HI', 'color: firebrick')

let breedNameArray

document.addEventListener('DOMContentLoaded', function() { 
    fetchImages();
    fetchBreeds();
    breedSelectListener();
});

function fetchImages() { 
fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(resp => resp.json())
  .then(json => renderImages(json))

}

  function renderImages(images) { 
      images.message.forEach(image => { 
        let imageElement = document.createElement('img');
        imageElement.src = image;
        let div = document.getElementById('dog-image-container');
        div.appendChild(imageElement);
      });

  }

  function fetchBreeds() { 
      fetch('https://dog.ceo/api/breeds/list/all')
      .then(resp => resp.json())
      .then(json => {  
          renderBreeds(json)
            breedNameArray = Object.keys(json.message)
        })
  }


  function renderBreeds(breeds) { 
      let body = document.querySelector('body');
      for (const breed in breeds.message) { 
          let body = document.querySelector('body');
          let ul = document.getElementById('dog-breeds');
          let li = document.createElement('li');
          li.innerText = `${breed}`;
          ul.appendChild(li);
      }
      changeColor();
  }


  function changeColor() { 
    let breedList = document.querySelector("ul").children;

    let breedArray = [...breedList];

      breedArray.forEach(breed => {
          breed.addEventListener('click', () => { 
            breed.style.color = "green"
          });
      });

  }

  function breedSelectListener() {
  let dropdownBox = document.getElementById("breed-dropdown");
  dropdownBox.addEventListener("change", (e) => { 
      updateBreedList(e.target.value);
      //put out sorted breed array elements to the dom in the ul that holds dog breeds. make this ul have the sorted breeds instead. 
   } )
}

   function sortedBreeds(letter) { 
    return breedNameArray.filter((breed) => breed.startsWith(letter)); 
   }

   function updateBreedList(letter) { 
  sortedBreeds(letter);
  let body = document.querySelector('body');
  let ul = document.getElementById('dog-breeds');
  ul.innerHTML = "";
  sortedBreeds(letter).forEach(element => {
      let li = document.createElement("li")
      li.innerHTML = element; 
      ul.appendChild(li);
  })};



  //find document body 
  //grab the ul by it's id. 
  //ul.clear to clear that full list of breeds
  //iterating through an array and then for each element creating an li 
  //ul.appendChild(li)

//     for (const breed in ()) { 
//         let body = document.querySelector('body');
//         let ul = document.getElementById('dog-breeds');
//         let li = document.createElement('li');
//         li.innerText = `${breed}`;
//         ul.appendChild(li);
//    }
