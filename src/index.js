console.log('%c HI', 'color: firebrick')
let breeds = []

document.addEventListener("DOMContentLoaded", function() {
	fetch("https://dog.ceo/api/breeds/image/random/4")
		.then(resp => {return resp.json()})
		.then(json => {
			console.log(json);
			addImagesToDOM(json.message)
		})
		.then(fetchBreeds)
});

function addImagesToDOM(urls) {
	for (const url of urls) {
		const img = document.createElement('img'); 
    img.src = url 
	  const body = document.getElementsByTagName('body')[0];
	  body.appendChild(img);
	}
}

function fetchBreeds() {
	fetch("https://dog.ceo/api/breeds/list/all")
		.then(resp => {return resp.json()})
		.then(json => {
			console.log(json);
			addBreeds(breeds = Object.keys(json.message))
			addBreedSelectListener()
		})
}

function addBreeds(arr) {
	const body = document.getElementsByTagName('body')[0];

	let ul = document.querySelector('ul');
  removeChildren(ul);

	for (const breed of arr) {
		const li = document.createElement('li');
		li.innerText = breed;
	  li.style.cursor = 'pointer';
	  ul.appendChild(li);

	  li.addEventListener('click', updateColor);
	}
}

function updateColor(event) {
  event.target.style.color = 'palevioletred';
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function selectBreedsStartingWith(letter, breeds) {
  addBreeds(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectListener() {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', function (event) {
    selectBreedsStartingWith(event.target.value, breed);
  });
}