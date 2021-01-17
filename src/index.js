console.log('%c HI', 'color: firebrick')

window.onload = function () {
    fetchDogImages();
};

function fetchDogImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    
    fetch(imgUrl)
        .then(function(response) {
            return response.json();
        })
        .then(json => {
            let dogUrls = json["message"];
            for (let dogUrl of dogUrls) {
                let dogDiv = document.getElementById("dog-image-container");
                let dogImgElement = document.createElement("img");
                dogImgElement.src = dogUrl;
                dogImgElement.style.width = "200px";
                dogImgElement.style.height = "auto";
                dogDiv.append(dogImgElement);
            }
        });

}

function fetchBreedList(breedFilter = null) {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
      .then(resp => resp.json())
      .then(json => {
        let breeds = Object.keys(json["message"]);
  
        if (breedFilter) {
          let filteredBreeds = breeds.filter(breed => breed[0] === breedFilter);
          document.getElementById("dog-breeds").innerHTML = "";
          fetchBreeds(filteredBreeds);
        } else {
          fetchBreeds(breeds);
        }
      });
  }

function fetchBreeds(breeds) {
    for (let breed of breeds) {
      let breedLi = document.createElement("li");
      breedLi.innerText = breed;
      document.getElementById("dog-breeds").appendChild(breedLi);
      breedLi.onclick = function() {
        this.style.color = getRandomColor();
      };
    }
  }

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function filterDogs() {
    let selection = document.getElementById("breed-dropdown").value;
    fetchBreedList(selection);
  }