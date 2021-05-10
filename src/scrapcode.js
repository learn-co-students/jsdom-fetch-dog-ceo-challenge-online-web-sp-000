function updateBreeds(breeds) {
    let ul = document.querySelector("#dog-breeds");
    // select the right element, remember the # for the class tag
    removeChildren(ul);
    // clear out the list
    breeds.forEach(breed => addBreed(breed));
    // iterate over teh array and add each one again
}