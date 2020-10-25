// console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('breed-dropdown').addEventListener('change', function (e) {
        filterBreeds(e.target.value);
    });
});

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then(function(response) {
  return response.json();
}).then(function(json) {
    for (const url of json.message) {
      showDog(url);
    }
});

function showDog(a){
    b = document.getElementById('dog-image-container')
    c = document.createElement('img')
    c.height = 100
    c.width = 100
    c.src = a
    b.appendChild(c)
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
.then(function(response) {
  return response.json();
}).then(function(json) {
    console.log(json)
    for (const key in json.message) {
        // console.log(key);
        showBreeds(key)
    }
});

function showBreeds(a){
    b = document.getElementById('dog-breeds')
    c = document.createElement('li')
    c.innerText = a
    b.appendChild(c)
    c.addEventListener('click', function() {this.style.color='red'});
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
