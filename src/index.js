console.log('%c HI', 'color: firebrick')

let breeds = [];

document.addEventListener('DOMContentLoaded', function () {
	loadImages();
	loadBreedOptions();
});

const loadImages = () => {
	const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
	fetch(imgUrl)
		.then(res => res.json())
		.then(results => {
			results.message.forEach(image => addImage(image))
		});
}

const addImage = (dogPicUrl) => {
	let container = document.querySelector('#dog-image-container');
	let newImageEl = document.createElement('img');
	newImageEl.src = dogPicUrl;
	container.appendChild(newImageEl);
}

const loadBreedOptions = () => {
	const breedUrl = 'https://dog.ceo/api/breeds/list/all'
	fetch(breedUrl)
		.then(res => res.json)
		.then(results => {
			breeds = Object.keys(results.message)
			updateBreedList(breeds)
			addBreedSelectListener()
		})
}

const updateBreedList = () => {
	let ul = document.querySelector('#dog-breeds')
	removeChildren(ul)
	breeds.forEach(breed => addBreedSelectListener(breed))
}

const removeChildren = (element) => {
	let child = element.lastElementChild
	while (child) {
		element.removeChild(child)
		child = element.lastElementChild
	}
}

const selectBreedsStartingWith = (letter) => {
	updateBreedList(breeds.filter(breed => startsWith(letter)))
}

const addBreedSelectListener = () => {
	let breedDropdown = document.querySelector('#breed-dropdown')
	breedDropdown.addEventListener('change', (event) => {
		selectBreedsStartingWith(event.target.value)
	})
}

const addBreed = (breed) => {
	let ul = document.querySelector('#dog-breeds')
	let li = document.createElement('li')
	li.innerText = breed
	li.style.cursor = 'pointer'
	ul.appendChild(li)
	li.addEventListener('click', updateColor)
}

const updateColor = () => {
	event.target.style.color = 'palevioletred'
}