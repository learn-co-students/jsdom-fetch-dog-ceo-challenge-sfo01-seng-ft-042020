document.addEventListener("DOMContentLoaded", start)

function start() {
    getImages()
    getBreeds()
    addLIClickHandler()
    addSelectHandler()
}

function getImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp=>resp.json())
        .then(json=>addImages(json.message))
}

function addImages(json) {
    const imgContainer = document.getElementById('dog-image-container')
    for (image of json) {
        const newImage = document.createElement("img")
        newImage.src = image
        imgContainer.appendChild(newImage)
    }
}

function getBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp=>resp.json())
        .then(json=>addBreeds(json.message))
}

function addBreeds(json) {
    const unorderedList = document.getElementById('dog-breeds')
    for (breed in json) {
        const newItem = document.createElement("li")
        newItem.innerText = breed
        unorderedList.appendChild(newItem)
    }
}

function addLIClickHandler() {
    const ul = document.getElementById('dog-breeds')
    ul.addEventListener('click', (e)=>fontChange(e))
}

function fontChange(event) {
    if (event.target.tagName === "LI") {
        event.target.style.color = ["orange", "red", "black", "pink", "blue"][Math.floor(Math.random() * 5)]
    }
}

function addSelectHandler() {
    const select = document.getElementById('breed-dropdown')
    select.addEventListener('change', filterBreeds)
}

function filterBreeds() {
    const select = document.getElementById('breed-dropdown')
    const only = select.value
    const list = document.getElementById('dog-breeds')
    const listItems = list.querySelectorAll('li')

    for (item of listItems) {
        if (item.innerText[0] === only) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    }
}