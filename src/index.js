const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener("DOMContentLoaded", function() {
    // console.log('%c HI', 'color: firebrick');
    fetchImages();
    fetchBreeds();
});

function fetchImages() {
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => addDogImagesToTheDom(data));
}

function addDogImagesToTheDom(dogImages) {
    const imageContainer = document.getElementById("dog-image-container");
    dogImages.message.map((img) => {
        const div = document.createElement('div');
        const imgTag = document.createElement("IMG");
        imgTag.setAttribute("src", `${img}`);
        imgTag.setAttribute("width", "300");
        imgTag.setAttribute("height", "250");
        div.append(imgTag);
        imageContainer.append(div);
    });
}

function fetchBreeds() {
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => renderDogBreeds(data));
}

function renderDogBreeds(breeds) {
    const breedsContainer = document.getElementById("dog-breeds");
    
    let groupA = [];
    let groupB = [];
    let groupC = [];
    let groupD = [];

    (Object.keys(breeds.message)).forEach((breed) => {
        const breedList =  document.createElement('li');
        breedList.innerText = breed;
        breedsContainer.append(breedList);
        if (breed[0] === "a") {
            groupA.push(breed);
        } else if (breed[0] === "b") {
            groupB.push(breed);
        } else if (breed[0] === "c") {
            groupC.push(breed);
        } else if (breed[0] === "d") {
            groupD.push(breed);
        }
    });  

    const options = document.getElementById("breed-dropdown");
    options.addEventListener("change", function(event) {
        if (event.target.value === "a") {
            breedsContainer.innerText = groupA.join("\n");
        } else if (event.target.value === "b") {
            breedsContainer.innerText = groupB.join("\n");
        } else if (event.target.value === "c") {
            breedsContainer.innerText = groupC.join("\n");
        } else if (event.target.value === "d") {
            breedsContainer.innerText = groupD.join("\n");
        }
    });

    breedsContainer.addEventListener("click", function(event) {
        event.target.style.color = "magenta";
    });
}


