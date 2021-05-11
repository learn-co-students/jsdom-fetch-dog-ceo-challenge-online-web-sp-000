function loadImage(){

	const imgUrl= "https://dog.ceo/api/breeds/image/random/4"
	fetch(imgUrl) 
	.then(res=> res.json())
	.then(result=>{ result.message.forEach(image=>addImage(image))})
};

function addImage(dogPicUrl){

 let container= document.querrySelector(#dog-image-container);
 let newImageEl= document.createElement('img');
 newImageEl.src= dogPicUrl;
 container.appendChild(newImageEl);

}

function loadBreedOption() {
	// body...
	const breedUrl ='https://dog.ceo/api/breeds/list/all'
	fetch(breedUrl)
	.then(res=>res.json())
	.then(result=> { 

		breed= Object.key(result.message);

		 updateBreedList(breeds);
         addBreedSelectListener();

	});

	function updateBreedList(breeds) {
		let ul = document.querySelector('#dog-breeds');
		removeChildren(ul);
		breeds.forEach(breed=>addBreed(breed);
			
		// body...
	}
}
