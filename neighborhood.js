const foodButton = document.querySelector("#food-button");


function randomRest() {
    const restaurants = ["Cantina Mayahuel", "Chris' Ono Grinds", "SukhoThai Extraordinaire", "The Friendly"];
    const random = restaurants[Math.floor(Math.random() * restaurants.length)];
    alert(random);
}
 

foodButton.addEventListener('click', randomRest)