console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted successfully!')

}




let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let catCont = document.querySelector('#cat-container');
