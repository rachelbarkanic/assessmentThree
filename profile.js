console.log('meow')

const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')

 
function favColor() {
    alert('purple')
}

function favPlace() {
    alert('Convict Lake')
}

function favRitual() {
    alert('yoga (cliche I know)')
}

colorBtn.addEventListener('click', favColor);
placeBtn.addEventListener('click', favPlace);
ritualBtn.addEventListener('click', favRitual);