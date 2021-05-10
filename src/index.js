console.log('%c HI', 'color: firebrick');

document.addEventListener('DOMContentLoaded', callbackfunc () {
    loadImg();
});

// sets up functions to run as soon as the DOM is loaded 

function loadImg() {
    const imgURL = "https://dog.ceo/api/breeds/image/random/4"
    // URL to fetch
    fetch(imgURL).then(res=> res.json()).then(
    // Fetch the URL, turn the URL's contents into JSON, then do stuff to it
        results => { results.message.forEach(image => addImg(image)) }
        // For each image load it into the DOM using the "addImg" function
    );
};

function addImg(image) {
    let container = document.querySelector('#dog-image-container');
    // Remember the querySelector method needs the # in front of the class tag
    let newImg = document.createElement('img');
    // Remember to create the element before you stick something in it
    newImg.src = image; 
    // <img src="image">
    container.appendChild(newImg);
    // shove the <img src="image"> into the tag with the right class
};


