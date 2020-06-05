document.addEventListener("DOMContentLoaded", () =>{
  fetchImages();
  fetchBreeds();
  listenToBreedClick();

});


function fetchImages(){
   fetch('https://dog.ceo/api/breeds/image/random/4' )
   .then((response) => response.json())
   .then((data) => append(data))
};


function createImgTag(dogImg){
   return `<img src=${dogImg} />`
}

function append(dogImg) {
  const imgContainer = document.getElementById('dog-image-container');
  dogImg.message.forEach((dog) => {
      imgContainer.innerHTML += createImgTag(dog);
  });
};

function fetchBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(res => res.json())
  .then(data => createList(data))
  .then(() => {
      listenToDropDown();
  })
}

function createList(dogBreed){
  const ul = document.getElementById("dog-breeds");
  const breedArray = Object.keys(dogBreed['message']);
  breedArray.forEach(breed => {
      let li = document.createElement("li")
      li.textContent = breed;
      li.classList.add('item');
      ul.appendChild(li);
  
  })
  
};



function listenToBreedClick(){
  const breedContainer = document.getElementById("dog-breeds");
  breedContainer.addEventListener("click", function(e) {
      
      if (e.target.className === 'item') {
          e.target.style.color = 'red'
      }
  });
}
const filter = (letter) => { 
  const breedArray = Array.from(document.querySelector('#dog-breeds').children)
  breedArray.forEach(breedEl => {
    if (breedEl.innerText.startsWith(letter)) {
      breedEl.style.display = 'block'
    }
    else {
      breedEl.style.display = 'none'
    }
  })
}

function listenToDropDown() {
  const dropDown = document.getElementById('breed-dropdown');
  dropDown.addEventListener('change', (e) => {
      console.log(e.target)

      switch (e.target.value) {
          case 'a':
              filter(e.target.value)
              break;
          case 'b':
              filter(e.target.value)
              break;
          case 'c':
              filter(e.target.value)
              break;
          case 'd':
              filter(e.target.value)
          default:
          break;
      }
  })
}