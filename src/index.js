console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(){

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json.message)
        let images = document.getElementById("dog-image-container")
        for(const element of json.message){

            let img = document.createElement('img');
            img.src = element;

            images.append(img);
            console.log(element)
        };   
    });

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            let dogBreeds = document.getElementById('dog-breeds');
            for(const key in json.message){
                let li = document.createElement('li');
                li.innerText = key;
                dogBreeds.append(li);
                li.addEventListener("click", function(){
                    li.style.color = "green";
                })
            };
            let dropdown = document.querySelector("#breed-dropdown"); 
        function eV(v){
            let letter = v;
            letter.addEventListener("click", function(){
                let list = document.querySelectorAll("li");
                for(element of list){
                    if (letter.textContent != element.textContent.charAt(0)){
                        
                        element.style.display = 'none';
                        //show only elements that textContent's first letter = letter
                    }
                }
            });
        };

        for(const element of dropdown){
            eV(element);
            //textContent
        }
        }); 
        
    })
      
