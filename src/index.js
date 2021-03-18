console.log('%c HI', 'color: firebrick')

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';

    function fetchImages() {
        fetch(imgUrl)
            .then(resp => resp.json())
            .then(json => {
                dogImages(json.message)
            })
    }
        

    function dogImages(dogs) {
        console.log(dogs)
        dogs.forEach(dog => {
            console.log(dog)
            const dogContainer = document.querySelector('#dog-image-container')
            const dogInContainer = document.createElement('img')
            dogInContainer.src = dog
            dogContainer.appendChild(dogInContainer)
        });
    }


    