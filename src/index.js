console.log('%c HI', 'color: firebrick')

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(res=> res.json())
    .then(results => {
        results.message.forEach(image => addImage(image))
    });
}