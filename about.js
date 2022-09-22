console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted successfully!')

}


function mouseOver() {
  document.getElementById("cat-container");
  alert('you are amazing');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let catCont = document.getElementById('#cat-container');

document.getElementById("cat-container").onmouseover = function() {mouseOver()};

