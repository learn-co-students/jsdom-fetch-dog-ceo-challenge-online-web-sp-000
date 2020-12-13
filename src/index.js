// challenge 1

document.addEventListener('DOMContentLoaded', function () {

  fetchDogPics()

  function fetchDogPics() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl) // Pass in the url to the fetch for our image url
    .then(resp => resp.json()) // convert the url to a json object
    .then(json => { // call then again to ensure the promise works and then
      //iterate over each element of the key 'message' on the json response.
      json.message.forEach(link => {
        let dogImageContainer = document.querySelector('#dog-image-container')
        let imgTag = document.createElement('img')
        
        let tag = imgTag
        tag.src = link
        dogImageContainer.appendChild(tag)
      })
    })
  };

});

