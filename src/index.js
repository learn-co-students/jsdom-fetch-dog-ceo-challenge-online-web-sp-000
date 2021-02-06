console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function() {
  fetchDogBreeds();
  fetchDogImages();
})


//fetch Dog Breeds using the following 2 functions:
function fetchDogBreeds() {
	fetch(breedUrl)
	  .then(resp => resp.json())
	  .then(json => renderDogBreeds(json));
}


function renderDogBreeds(json){
	const breedsUl = document.querySelector('#dog-breeds')
	for (const key in json.message){
	  	const li = document.createElement("li");
	  	li.innerHTML = key;
	  	breedsUl.append(li);
	  	li.addEventListener('click', function() {
	 		li.style.color = "green";
	 	});
	}
}


document.addEventListener("DOMContentLoaded", function() {
	const dropDown = document.querySelector('#breed-dropdown');

	dropDown.addEventListener('change', (event) => {
		const liList = document.querySelectorAll('li');
	    switch (event.target.value) {
	        case 'a':
	        	for(let i = 0; i < liList.length; i++){
		        	if(liList[i].innerHTML.charAt(0) != 'a'){
		        		liList[i].style.display = "none";
		        	} else {
		        		liList[i].style.display = "list-item";
		        	};
		        };
	            break;
	        case 'b':
	        	for(let i = 0; i < liList.length; i++){
		        	if(liList[i].innerHTML.charAt(0) != 'b'){
		        		liList[i].style.display = "none";
		        	} else {
		        		liList[i].style.display = "list-item";
		        	};
		        };
	            break;
	        case 'c':
	        	for(let i = 0; i < liList.length; i++){
		        	if(liList[i].innerHTML.charAt(0) != 'c'){
		        		liList[i].style.display = "none";
		        	} else {
		        		liList[i].style.display = "list-item";
		        	};
		        };
	            break;
	        case 'd':
	        	for(let i = 0; i < liList.length; i++){
		        	if(liList[i].innerHTML.charAt(0) != 'd'){
		        		liList[i].style.display = "none";
		        	} else {
		        		liList[i].style.display = "list-item";
		        	};
		        };
	    }
	});
});


//fetch Dog Images using the following 2 functions:
function fetchDogImages() {
	fetch(imgUrl)
	  .then(resp => resp.json())
	  .then(json => renderDogImages(json));
}

function renderDogImages(json){
	const imageContainer = document.querySelector('#dog-image-container')
	json.message.forEach(dogImageURL => {
	  	imageContainer.innerHTML += `<img src="${dogImageURL}" width="300" height="300">`
	})
}

