console.log("hello world");

let form = document.querySelector('#contact');
let catCont = document.getElementById("cat-pic");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted successfully!')

}
 

function mouseOver() {
	alert('you are amazing');
}



form.addEventListener('submit', handleSubmit);
catCont.addEventListener('mouseover', mouseOver)
