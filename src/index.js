document.addEventListener('DOMContentLoaded', () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedsUrl = "https://dog.ceo/api/breeds/list/all"

  const dogImgContainer = document.getElementById( 'dog-image-container' )
  const dogBreeds = document.getElementById( 'dog-breeds' )
  const dropdown = document.getElementById( 'breed-dropdown' )

  const switchColor = event => {
    let color = event.target.style.color
    if ( color == 'red' )
      event.target.style.color = 'black'
    else
      event.target.style.color = 'red'
  }

  const fetchBreeds = () => {
    let dropdown = document.getElementById( 'breed-dropdown' )
    while ( dogBreeds.firstChild ) {
        dogBreeds.firstChild.remove();
    }
    fetch( breedsUrl )
    .then( response => response.json() )
    .then ( json => {

      for ( breed in json.message ) {
        if ( breed[0] == dropdown.value ) {
          let newLi = document.createElement( 'li' )
          newLi.textContent = breed
          newLi.addEventListener( 'click', switchColor )
          dogBreeds.appendChild( newLi )
        }
      }
    })
  }


  fetch( imgUrl )
  .then( response => response.json() )
  .then( json => {
    json.message.forEach( url => {
      let newImg = document.createElement( 'img' )
      newImg.src = url
      dogImgContainer.appendChild( newImg )
    })
  })

  fetchBreeds()

  dropdown.addEventListener( 'change', event => {
    fetchBreeds( event.target )
  })
})
