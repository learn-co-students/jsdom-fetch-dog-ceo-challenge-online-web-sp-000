document.addEventListener('DOMContentLoaded', function() {
	const select = document.querySelector("#breed-dropdown");
	select.addEventListener("change", function() {
		fetchBreeds()
	})

	function fetchImages() {
		return fetch("https://dog.ceo/api/breeds/image/random/4")
			.then(resp => resp.json())
			.then(json => renderImages(json));
	}

	function fetchBreeds() {
		return fetch("https://dog.ceo/api/breeds/list/all")
		.then(resp => resp.json())
		.then(json => renderBreeds(json));
	}

	function renderBreeds(json) {
		const ul = document.querySelector("#dog-breeds");

		const listedDogs = document.querySelectorAll(".dogBreed");
		for (node of listedDogs) {
			ul.removeChild(node);
		}

		for (breed in json.message) {
			if (json.message[breed].length == 0) {
				if (breed[0] == select.value) {
					const li = document.createElement("li");
					li.textContent = `${breed}`;
					li.classList.add("dogBreed");
					li.addEventListener("click", changeColor);
					ul.appendChild(li);
				}
			} else {
				for (const race of json.message[breed]) {
					if (race[0] == select.value) {
						const li = document.createElement("li");
						li.textContent = `${race} ${breed} `;
						li.classList.add("dogBreed");
						li.addEventListener("click", changeColor);
						ul.appendChild(li)
					}
				}
			}
		}	
	}

	let changed = false
	function changeColor() {
		if (changed == false) {
			event.target.style.color = "red";
			changed = true;
		} else {
			event.target.style.color = "green";
			changed = false;
		}
	}

	function renderImages(json) {
		const div = document.querySelector("#dog-image-container");
		
		for (const imageLink of json.message) {
			const span = document.createElement("span");

			span.innerHTML = `<img src="${imageLink}" height="100"/>`;

			div.appendChild(span)
			console.log(imageLink);
		}
	}	

  fetchImages()
  fetchBreeds()
})