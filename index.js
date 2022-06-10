

const form = document.getElementById('form');
const name = document.getElementById('name');
const regno = document.getElementById('regno');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {

	const nameValue = name.value.trim();
	const regnoValue = regno.value.trim();
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(nameValue === '') {
		setErrorFor(name, 'Name cannot be blank');
	}
	else {
		setSuccessFor(name);
	}

	if(regnoValue === '') {
		setErrorFor(regno, 'Register Number cannot be blank');
	} else if(regnoValue.length <=5) {
		setErrorFor(regno, 'Enter correct Register Number')
	} else {
		setSuccessFor(regno);
	}
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

    if(phoneValue === '') {
		setErrorFor(phone, 'Phone cannot be blank');
	} else {
		setSuccessFor(phone);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} 
	else if(passwordValue.length <= 4 ) {
		setErrorFor(password, 'Password length must be greater than 4')
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
