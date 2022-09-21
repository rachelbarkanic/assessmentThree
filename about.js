console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted successfully!')

}



// function mouseOver(event){
// event.target.alert('hi')
// }



let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let catCont = document.querySelector('#cat-container');

catCont.addEventListener('mouseover', (event) => {
event.target.mouseover = alert('meow')
});
