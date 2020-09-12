const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


	


function fetchDogs() {
	fetch(imgURL)
	.then(response => {return response.json()})
	.then(json => addDogImages(json.message))
}

function addDogImages(json) {
	json.forEach(image => {
		const img = document.createElement("img")
		img.src = image
		document.getElementById("dog-image-container").appendChild(img)
	})
}

function fetchBreeds() {
	fetch(breedURL)
	.then(response => {return response.json()})
	.then (json => renderBreeds(json.message))
}

function addBreed(breed) {
	let li = document.createElement('li')
	li.id = breed
	li.textContent = breed

	const colors = ['red', 'yellow', 'blue', 'green', 'purple', 'orange']
	let randomColor = colors[Math.floor(Math.random() * colors.length)];

	li.addEventListener('click', () => {
		li.style=`color: ${randomColor}`
	});

}

function renderBreeds(json) {
	let breeds = Object.keys(json)

	breeds.forEach(function(element) {
		addBreed(element)
	})
}
document.addEventListener('DOMContentLoaded', () => {
	function filterBreeds() {
		let filter = document.getElementById('breed-dropdown')

		filter.addEventListener('change', (event) => {
			document.querySelectorAll('#dog-breeds li').forEach(breed => {
				if breed.textContent.charAt(0) == event.target.value {
					breed.style.display = "block";
				} else {
					breed.style.display = 'none';
				}
			})
		})
	}
	filterBreeds()
});

fetchDogs()
fetchBreeds()