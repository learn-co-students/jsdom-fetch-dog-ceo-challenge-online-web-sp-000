console.log('%c HI', 'color: firebrick')


addEventListener('DOMContentLoaded', () => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  .then(image => image.message.forEach(image => addImage(image)))
   fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then(breed => take(breed))
}
)

function addImage(dogPicUrl) {
  let container = document.querySelector('#dog-image-container');
  let newImageEl = document.createElement('img');
  newImageEl.src = dogPicUrl;
  container.appendChild(newImageEl);
}

function take(br) {
  for (let n of br) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = n;
  li.style.cursor = 'pointer';
  ul.appendChild(li);
  li.addEventListener('click', updateColor);
  }
}

  function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
  }

  function ul(names, alph) {
    let add = document.querySelector('#dog-breeds')
    for (let n of names) {
      console.log("nasdfggs", n)
      if (n.startsWith("a")) {
        document.querySelector("#breed-dropdown")[0]
    let li = add.innerHTML += (`<li>${n}</li>`)
    }
    if (n.startsWith("b")) {
      document.querySelector("#breed-dropdown")[1]
      let li = add.innerHTML += (`<li>${n}</li>`)
  }
  }
    }



