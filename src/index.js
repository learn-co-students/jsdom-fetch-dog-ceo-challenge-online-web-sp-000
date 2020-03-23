function fetchData(url, callback) {
    fetch(url)
    .then(response => response.json())
    .then(function(json) {
      callback(json)
    });
  }
  
  function renderImages(json) {
    const div = document.getElementById('dog-image-container')
    let obj = json['message']
    for (const image in obj) {
      const img = document.createElement('img')
      img.src = obj[image]
      div.appendChild(img)
    }
  }

  function renderBreeds(json) {
    const ul = document.getElementById('dog-breeds')
    let obj = json['message']
    for (const breed in obj) {
        types = obj[breed]
        if (Array.isArray(types) && types.length > 0) {
            for (const type of types) {
                const li = document.createElement('li')
                li.innerHTML = `${type} ${breed}`
                ul.appendChild(li)
            }
        } else {
            const li = document.createElement('li')
            li.innerHTML = breed
            ul.appendChild(li)
        }
    }
  }
  function colorChangeFunc() {
    const list = document.querySelector('ul')
    const setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        return "#" + randomColor;
    }

    function colorChange(e) {
        e.target.style.color = setBg()
    }

    list.addEventListener('click', colorChange)
  }

  function filterList() {
    
    const letter = document.getElementById('breed-dropdown').value
    const list = document.querySelector('ul').children

    for (const el in list) {
        if (typeof list[el] == 'object') {
            if (list[el].innerText.charAt(0) != letter) {
                list[el].style.display = 'none'
            } else {
                list[el].style.display = ''
            }
        }
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetchData(imgUrl, renderImages)
    fetchData(breedUrl, renderBreeds)
    colorChangeFunc()
    // filterList()
    const dropDown = document.getElementById('breed-dropdown')
    dropDown.addEventListener('click', filterList)
    })
    
    
  