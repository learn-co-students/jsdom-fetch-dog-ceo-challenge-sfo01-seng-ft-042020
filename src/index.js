let breeds = []
console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
  getImages();
  getBreeds();
  
  
  
})

function listenForFilter() {
  const filter = document.getElementById('breed-dropdown');
  filter.addEventListener('change', function() {
    let filtered = breeds.filter(b => b.startsWith(this.value))
    renderBreeds(filtered);
  })

}


const getImages = function() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderImages(json))
}

const getBreeds = function() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => {
    // console.log(json)
    breeds = Object.keys(json.message);
    renderBreeds(breeds);
    listenForFilter();
  });

}
 
function renderImages(json) {
  const imageContainer = document.getElementById('dog-image-container');
  const images = json.message;
  
  for (const element of images) {
    const image = document.createElement('img');
    image.src = element;
    image.style = "width: 100px"
    imageContainer.appendChild(image);
    
  }
}

function renderBreeds(breeds) {
  
  const dogList = document.getElementById('dog-breeds');
  dogList.innerHTML = '';

  for (const breed of breeds) {
    const dogBreed = document.createElement('li');
    dogBreed.textContent = breed;
    dogList.appendChild(dogBreed);
  }
  listenToBreedClick()
}

function listenToBreedClick() {
  const listItems = document.querySelectorAll('ul li')
  
  for (const li of listItems) {
    li.addEventListener('click', function() {
      if(this.classList.contains('active')){
        this.classList.remove("active");
      } else {
        this.classList.add("active");
      }
    })

  }
  
}

