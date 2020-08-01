console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
        fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(resp => resp.json())
        .then(function(json) {
            function makeImage (img) {
                element = document.createElement('IMG');
                element.src = img;
                document.getElementById('dog-image-container').appendChild(element);
            } 
            json['message'].forEach(makeImage);
        })

    
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(function(json) {
            const ul = document.createElement('ul');
            document.getElementById('breed-dropdown').after(ul);

            for (const el in json['message']) {
                if (json['message'][el].length != 0) {
                    for (const subEl of json['message'][el]) {
                        const breed = document.createElement('li');
                        breed.innerHTML = `${el} ${subEl}`;
                        ul.appendChild(breed);
                    }
                }   else {
                        const breed = document.createElement('li');
                        breed.innerHTML = `${el}`;
                        ul.appendChild(breed);
                }
            }

            document.querySelectorAll('li').forEach(item => {
                item.addEventListener('click', event => {
                item.style.color = "green"
                })
            })

            const button = document.createElement('button');
            button.innerHTML = "sort";
            document.getElementById('breed-dropdown').after(button);

            button.addEventListener('click', function () {
                const value = document.querySelector('select').value;
                document.querySelectorAll('li').forEach(li => {
                    if (li.innerHTML[0] != value) {
                        li.style.visibility = 'hidden';
                    } else {
                        li.style.visibility = 'visible';
                    }
                })
            })
      })


      
})