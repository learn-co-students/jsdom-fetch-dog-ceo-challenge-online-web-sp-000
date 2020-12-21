 document.addEventListener('DOMContentLoaded', (event) => {

   const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
   const breedUrl = 'https://dog.ceo/api/breeds/list/all';

   let urlArray = [];
   urlArray.push(imgUrl, breedUrl);

   for (const ele of urlArray) {
  fetch(ele)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    if (ele == imgUrl) {
    json.message.forEach(dog => getImage(dog));
  } else if (ele == breedUrl) {
    let breeds = Object.keys(json.message);
    breeds.forEach(dog => allBreeds(dog));
  }
  });

    function getImage(url) {
      let li = document.createElement("IMG");
      document.getElementById('dog-image-container').appendChild(li);
      li.src = url;
    };

    function allBreeds(breed) {
      if (breed[0] == document.getElementById('breed-dropdown').value) {
      let li = document.createElement("li");
      let btn = document.createElement("button");
      let ulNode = document.createTextNode("");
      btn.addEventListener("click", function() {
        console.log("clicked");
        btn.style.color = "red";
      });
      btn.appendChild(ulNode);
      li.appendChild(btn);

      document.getElementById('dog-breeds').appendChild(li)
      btn.innerHTML = breed;
    }
   }
  }
  document.querySelector('select').addEventListener("change", function() {
    let currentBreedsShowing = document.getElementById("dog-breeds").querySelectorAll('li')
    for (const currentBreed of currentBreedsShowing) {
      document.getElementById("dog-breeds").innerHTML = "";
    }
    fetch(breedUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let breeds = Object.keys(json.message);
      breeds.forEach(dog => allBreeds(dog));
    });
  })

});
