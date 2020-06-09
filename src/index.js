console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let allBreeds = []
let filteredBreeds = []

function fetchFourDogs(){
  fetch(imgUrl)
  .then(res => res.json())
  .then(json => {
    json.message.forEach(dogImageURL => {
      let imageElement = document.createElement('img')
      imageElement.src = dogImageURL
      document.querySelector('#dog-image-container').appendChild(imageElement)
    })
  })
}

function listBreeds(filter=undefined){
  fetch(breedUrl)
  .then(res => res.json())
  .then(json => {
    for(breed in json.message) {
      if(!filter || breed.startsWith(filter)){
      let breedName = document.createElement('li')
      breedName.innerText = breed
      
      document.querySelector('#dog-breeds').appendChild(breedName)
      breedName.addEventListener("click", changeColor)
    }
  }
  }) 
}

function changeColor(event){
  event.target.style.color = "red"

}









document.addEventListener('DOMContentLoaded', (event) => {
  fetchFourDogs()
  listBreeds()
});

function getDogImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json)
    .then(data => console.log(data));

}

function renderDogs(dog) {
    
}

function addImageElements(json) {
  let imagesDiv = document.getElementById("dog-image-container");

  json.message.forEach(image => {
    let newImageElem = document.createElement('img');
    // let new_image = document.createElement('img');
    newImageElem.src = image;
    imagesDiv.appendChild(newImageElem);
  });   
}