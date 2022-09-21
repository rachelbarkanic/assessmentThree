console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted successfully!')

}

function hoverEvent() {
alert('You are doing great')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let catCont = document.querySelector('#cat-container');
catCont.addEventListener('mouseover', hoverEvent)