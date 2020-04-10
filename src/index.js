let dogBreeds = []
function challenge1(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response){
    return response.json()
  })
  .then(function(json){
    imageContainer = document.getElementById('dog-image-container')
    for (const url of json.message){
      img = document.createElement('img')
      img.src = url
      imageContainer.appendChild(img)
    }
  })
}

fetch('https://dog.ceo/api/breeds/list/all')
  .then(function(response){
    return response.json()
  })
  .then(function(json){
    breeds = json.message
    listBreeds(breeds);
    dogBreeds = setBreedsArray();
    challenge3();
  })

  function makeBreedText(breed, subbreed){
    return `${subbreed} ${breed}`
  }

  function setBreedsArray(){
    let dogBreedArray = []
    dogBreedLi = document.getElementsByClassName('dog-breed-li')
    for(breedli of dogBreedLi){
      dogBreedArray.push(breedli.innerText)
    }
    return dogBreedArray
  }

  function listBreeds(breeds){
    dogBreedsUl = document.getElementById('dog-breeds')
    dogBreedsUl.innerHTML = ''
    for (breed in breeds) {
      if (breeds[breed].length != 0){
        for (subbreed of breeds[breed]){
          makeBreedLi(breed, subbreed, breeds)
        }
      } else {
        makeBreedLi(breed, '', breeds)
      }
    }
  }

  function listBreedsFromArray(breeds){
    dogBreedsUl.innerHTML = ''
    dogBreedsUl = document.getElementById('dog-breeds')
    for(breed of breeds){
      makeBreedLi(breed, '', breeds)
    }
  }

  function makeBreedLi(breed, subbreed, breeds){
    const li = document.createElement('li')
    if(breed == 'australian'){
      li.id = 'super-breed'
    }
    if(subbreed == ''){
      text = `${breed}`
    } else {
      text = makeBreedText(breed, subbreed);
    }
    li.innerText = text
    li.className = 'dog-breed-li'
    dogBreedsUl.appendChild(li);
  }

function challenge3(){
  let li = document.getElementById('super-breed')
  li.addEventListener('click', function(event){
    console.log('clicked')
    li.style.color = "red";
  })
}

function challenge4(){
  selector = document.querySelector('select')
  selector.addEventListener('change', function(event){
    newBreedsArray = [...dogBreeds]
    emptyBreedsArray = []
    selected = event.target.value
    for (breed of dogBreeds){
      if(breed.startsWith(selected)){
        emptyBreedsArray.push(breed)
      }
    }
    console.log(emptyBreedsArray)
    listBreedsFromArray(emptyBreedsArray)
  })
}

document.addEventListener("DOMContentLoaded", function() {
  challenge1();
  //challenge3(); CALLED IN challenge2
  challenge4();
});
