console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    const divi = document.getElementById('dog-image-container');
    const ul = document.getElementById('dog-breeds');

    fetch("https://dog.ceo/api/breeds/image/random/4")
     .then(response => response.json())
     .then(json => {
         for (const imageUrl of json.message) {
            const imgElement = document.createElement('img');
            console.log(imageUrl);
            imgElement.src = imageUrl;
            divi.appendChild(imgElement);
         }
        
        });

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(json => {
            for (const breed in json.message){
                const li = document.createElement('li');
                // console.log(json.message[breed]);
                if (json.message[breed].length === 0){
                    li.innerHTML = breed;
                    ul.appendChild(li);
                } else {
                    for (const specificBreed of json.message[breed]){
                        const li2 = document.createElement('li');
                        li2.innerHTML = `${specificBreed} ${breed}`;
                        ul.appendChild(li2);
                    }
                }
            }

            const lis = document.querySelectorAll('li');
            // console.log(lis);
            for (const li of lis) {
                // console.log(li);
                li.addEventListener('click', function(){
                    li.style.color = 'red';
                })
            }


            const select = document.getElementById('breed-dropdown');
            
            for (const li of lis) {
                if (li.innerHTML[0] === select.value){
                    li.style.display = 'block';
                } else {
                    li.style.display = 'none';
                }
            }
            select.addEventListener('change', function(){   
                for (const li of lis) {
                    if (li.innerHTML[0] === select.value){
                        li.style.display = 'block';
                    } else {
                        li.style.display = 'none';
                    }
                }
            })
        });
    
})  