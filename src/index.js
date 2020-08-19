console.log('%c HI', 'color: firebrick')
function changeColor(e) {
  e.target.style.color = "red";
}
function startsWith(word, letter) {
  return word.charAt(0) == letter;
}
function filterBreeds(e) {
  const listItems = document.querySelectorAll('li')
  letter = e.target.options[e.target.selectedIndex].text
  for (const li of listItems) {
    if (startsWith(li.textContent, letter)) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const dogBreeds = document.getElementById('dog-breeds');
  const dropdown = document.getElementById('breed-dropdown')
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => json['message'])
  .then(images => {
    images.forEach(element => {
      const img = document.createElement("img");
      img.setAttribute("src", element);
      document.body.appendChild(img);
    });
  })
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then(json => json['message'])
  .then(list => {
    for (const key in list) {
      const li = document.createElement('li');
      li.innerText = key;
      li.addEventListener('click', function(e) {
        changeColor(e)
      });
      dogBreeds.appendChild(li);
    }
});
dropdown.addEventListener("change", function(e) {
  filterBreeds(e)
});
});