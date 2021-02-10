fetch('https://dog.ceo/api/breeds/image/random/4')
.then(function(response) {
  return response.json();
}).then(function(json) {
  
}).catch((error) => {
  console.log(error);
});