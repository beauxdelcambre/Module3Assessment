console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submit was successful");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
