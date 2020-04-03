let breeds = []
const breedSelect = (e) => {
  const dogUl = document.querySelector('ul#dog-breeds')
  dogUl.innerText = ""
  let dropdownValue = e.target.value
  filteredBreeds(dropdownValue)
}

function filteredBreeds(letter){
  let filter = breeds.filter(breed => breed.startsWith(letter)  )
   displayBreeds(filter)
  console.log(filter)
}

function displayBreeds(filter){
  let bark = document.getElementById('dog-breeds')
  filter.forEach(breed => bark.innerHTML += "<li>" + breed + "</li>"  )
// 1. find ul for the dog array
// 2. add the filtered list
// 3.

// function filteredBreeds(letter)
// let getBreed  = breeds.forEach(breed => breeds.innerHTML += '<li>' {$breed} <'/li>')
// I want to call the function filteredBreeds in this function

//  document.createElement("img")
// breeds.forEach(breed => bark.innerHTML+= `<li> ${breed} </li>`)

// innerDog.src =  dogsrc
// doggo.appendChild(innerDog)


}


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//
// const result = words.filter(word => word.length > 6);
//
// console.log(result);


// console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function() {

 // dogCeo()
 dogBreed()
 document.getElementById('breed-dropdown').addEventListener("change",breedSelect)
})

  function dogCeo() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res=> res.json()) 
    .then( result => {result.message.forEach(img => addImage(img))
      // Use this data inside of `json` to do DOM manipulation
      // function myFunction(value, index, array)
  })
  }

  function addImage(dogsrc){

  let doggo  = document.getElementById('dog-image-container')
  let innerDog = document.createElement("img")
  innerDog.src =  dogsrc
  doggo.appendChild(innerDog)


  }

  function dogBreed(){
    return fetch ('https://dog.ceo/api/breeds/list/all')
    .then(res=> res.json())
    .then( result => {
      let dogResults = result.message
       breeds = (Object.keys(dogResults))
       // console.log(breed)
       let bark = document.getElementById('dog-breeds')
       // let hello = "<li> hello </li>"
       breeds.forEach(breed => bark.innerHTML+= `<li> ${breed} </li>`)

       const breedsLi = document.querySelectorAll('li');
         breedsLi.forEach((breed) => {
           breed.addEventListener('click', function(){
             breed.style.color ="blue"
             console.log("I was clicked")
             })

             // const allDogs = document.querySelectorAll('li');

       });

//
//        var numbers = [1, 3, 6, 8, 11];
//
// var lucky = numbers.filter(function(number) {
//   return number > 7;
// });

// [ 8, 11 ]
//
      });
      // 1. assign what is in the console to a variable
      // let breed = console.log(Object.keys(dogResults))

      // 2.iterate over the console variable
      // breed.forEach(dogbreed)

      // 3.get the UL
      // let bark = document.getElementById('dog-breeds')

      // 4.create li element
      // let hello = documnet.createElement("li")

      // 5.need to appened the li to ul
      // bark.appendChild(hello)



  //     // result.message.forEach(breed => addBreed())})
  //     let cities = [
  //   {name: 'Los Angeles', population: 3792621},
  //   {name: 'New York', population: 8175133},
  //   {name: 'Chicago', population: 2695598},
  //   {name: 'Houston', population: 2099451},
  //   {name: 'Philadelphia', population: 1526006}
  //     ];
  //
  // .filter(city => city.population < 3000000)
  //
  //
  //
  //     ar newArray = arr.filter(arg_function[, this_arg])
  }
