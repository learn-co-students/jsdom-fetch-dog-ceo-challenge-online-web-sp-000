console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded",function() {
  fetchDogImages();
  fetchDogBreeds();
  
  //  Challenge #1
  function fetchDogImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    return fetch(imgUrl)
      .then(resp => resp.json())
      .then(dogs => renderDogImages(dogs["message"]))
  }

  function renderDogImages(dogs) {
    const main = document.getElementById('dog-image-container');
    dogs.forEach( dog => {
      let img = document.createElement("img");
      img.src = dog;
      main.appendChild(img);
    })
  }

  //  Challenge # 2
  function fetchDogBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    return fetch(breedUrl)    
      .then(resp => resp.json())
      .then(json => renderDogBreeds(json["message"]))
  }

  function renderDogBreeds(breeds) {
    let list = document.getElementById("dog-breeds");
    Object.keys(breeds).forEach( breed => {
      let li = document.createElement("li");
      li.innerText = breed;
      list.appendChild(li);
    })
    addColorToBreed()
  }

  // Challenge # 3
  function addColorToBreed() {
    let a = document.getElementById("dog-breeds").querySelectorAll("li");
    a.forEach( function(b) {
      b.addEventListener("click", () => {
        b.style.color = "#ff0000"
      })
    })
  }
  
  filter();

  // Challenge # 4
  function filter () {
    let select = document.getElementById("breed-dropdown");
    select.addEventListener("change", function(e) {
      let a = document.getElementById("dog-breeds").querySelectorAll('li')
      a.forEach( b => {1
        if (b.textContent.charAt(0) !== e.target.value && e.target.value !== " " ) {
          // Any of the two below lines work also
        // if (b.textContent.charAt(0) !== select.value && select.value !== " " ) {
        // if (b.textContent.charAt(0) !== this.value && this.value !== " " ) {
          b.style.display = "none"
        } else {
          b.style.display = ""
        }
      })
    })
  }

})


