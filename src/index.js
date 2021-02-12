console.log('%c HI', 'color: firebrick')

function images(json) {
    const div = document.getElementById('dog-image-container');

    for (const url of json.message) {
        const img = document.createElement('img');
        img.src = url;
        div.appendChild(img);
    }
}

function breeds(json) {
    const ul = document.getElementById('dog-breeds');
    const dogBreeds = Object.keys(json.message);
    for (const breed of dogBreeds) {
        const li = document.createElement('li');
        li.innerText = breed;
        ul.appendChild(li);
        li.addEventListener('click', function() {
            li.style.color = 'red';
        })
    }
}

// function colorChange() {
//     const ul = document.getElementById('dog-breeds');
//     for (const li of ul.children) {
//         li.addEventListener('click', function() {
//             li.style.color = 'red';
//         })
//     }
// }


document.addEventListener('DOMContentLoaded', function() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => images(json));

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(json => breeds(json))

    // colorChange();
})
