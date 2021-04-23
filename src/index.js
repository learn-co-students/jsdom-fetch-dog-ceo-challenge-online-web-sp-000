console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function() { 
    fetchImages();
    fetchBreeds();
    breedSelectListener();
    loadBreedOptions();
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
      .then(json => renderBreeds(json))
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
      sortedBreeds(e.target.value);
      //put out sorted breed array elements to the dom in the ul that holds dog breeds. make this ul have the sorted breeds instead. 
   } )
}

   function sortedBreeds(letter) { 
    let breedList = document.querySelector("ul").children;
    let breedArray = [...breedList];

    let breedNameArray = breedArray.map(function(element) {
    return element.innerText;
    });
    breedNameArray.filter((breed) => breed.startsWith(letter)); 
   }

   function loadBreedOptions() { 
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => renderBreeds(json))

    for (const breed in breedSelectListener()) { 
        let body = document.querySelector('body');
        let ul = document.getElementById('dog-breeds');
        let li = document.createElement('li');
        li.innerText = `${breed}`;
        ul.appendChild(li);
   }
};