console.log('%c HI', 'color: firebrick')
addbreedJson()
addImgJson()
function addImgJson() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImgs(json))
}
function renderImgs(json) {
  const main = document.querySelector('body')
  for(let i=0; i<json.message.length; i++)
  {
    const img = document.createElement('img')
    img.src = json.message[i]
    main.appendChild(img)
  }
}
function addbreedJson() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderbreeds(json))
}
function renderbreeds(json) {
  const ul = document.getElementById('dog-breeds')
  console.log(ul)
  for(const key in json.message)
  {
    const li = document.createElement('li')
    li.onclick = function(){
      li.style.color = "red"
    }
    li.appendChild(document.createTextNode(key))
    ul.appendChild(li)
  }
  const selectBox = document.getElementById('breed-dropdown');
  selectBox.addEventListener('change', (event) => {
    const ul = document.getElementById('dog-breeds')
    const children = ul.children
    console.log(ul.children)
    for(let i=0; i < children.length; i++) {
        console.log(children[i].innerHTML)
        if(children[i].innerHTML.charAt(0) != event.target.value)
        {
          children[i].style.display = "none"
        }
        else
        {
          children[i].style.display = "block"
        }
    }

  }, false)

}
