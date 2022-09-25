const foodButton = document.querySelector("#food-button")
const restaurants = ["Cantina Mayahuel", "Chris' Ono Grinds", "SukhoThai Extraordinaire", "The Friendly"]



function random() {
    restaurants[(Math.random() * restaurants.length) | 0]
    alert(random)
}

foodButton.addEventListener('click', restaurants)