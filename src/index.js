// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';


function getImgs() {
	fetch(imgUrl)
	.then(resp => resp.json())
	.then(function(json) {
		const container = document.getElementById("dog-image-container")
		for (const imgSrc of json.message) {
			const img = document.createElement("img");
			img.src = imgSrc
			img.height = "150"
			img.width = "150"
			container.appendChild(img)
		}
	})
}

function getBreeds() {
	const dogBreeds = document.getElementById("dog-breeds")
	const breedDropdown = document.getElementById("breed-dropdown");
	fetch(breedUrl)
	.then(resp => resp.json())
	.then(function(json) {
		for (const breed in json.message) {
			const li = document.createElement("li");
			li.appendChild(document.createTextNode(breed));
			li.style.display = "block";
			dogBreeds.appendChild(li);
		}
	})

	dogBreeds.addEventListener("click", function(e) {
		e.target.style.color = "firebrick";
	})

	breedDropdown.addEventListener("input", function(e) {
		const letter = e.target.value;
		const allBreeds = dogBreeds.children;
		for (const breed of allBreeds) {
			breed.style.display = "block";
			if (!breed.innerText.startsWith(letter)) {
				breed.style.display = "none";
			}
		}
	})
}


document.addEventListener("DOMContentLoaded", function() {
	getImgs();
  getBreeds();
});
