console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('breed-dropdown').addEventListener('change', function (e) {
        filterBreeds(e.target.value);
    });
});

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
/* fetches json from variable imgURL */
.then(function(response) {
    /* receive APIs JSON*/
  return response.json();
  /* return JSON string */
}).then(function(json) {
    /** JSON String then passed to for...of iterator */
    for (const url of json.message) {
        /** saved in URL variable and passed to showDog function*/
      showDog(url);
    }
});

function showDog(a){
    b = document.getElementById('dog-image-container')
    c = document.createElement('img')
    c.height = 150
    c.width = 150
    c.src = a
    b.appendChild(c)
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(function(response) {
        /* receive APIs JSON*/
      return response.json();
      /* return JSON string */
    }) .then(function(json) {
        for (const breeds in json.message) {
            showBreeds(breeds)
        }
    });

function showBreeds(a){
    b = document.getElementById('dog-breeds')
    c = document.createElement('li')
    c.innerText = a
    b.appendChild(c)
    c.addEventListener('click', function() {this.style.color='blue'});
}

function filterBreeds(a){
    b = document.getElementById('dog-breeds')
    // console.log(b.children)
    let lis = b.children
        for (var i = 0; i < lis.length; i++) {
        var name = lis[i].innerHTML;
        if (name.indexOf(a) == 0) 
            lis[i].style.display = 'list-item';
        else
            lis[i].style.display = 'none';
    }
}


   
  