/* ======================
 Contact page
======================= */

// Main form element
const elContactForm = document.querySelector('.contact-form');

// Form submit handler
const handleSubmitContactsForm = (evt) => {
	evt.preventDefault();

	// Gets all form input elements
	const {
		user_name,
		user_surname,
		user_mail,
		user_phone,
		service_choose,
		user_massage,
	} = evt.target.elements;

	// Binds only input values
	const nameValue = user_name.value.trim();
	const surnameValue = user_surname.value.trim();
	const mailValue = user_mail.value.trim();
	const phoneValue = user_phone.value.trim();
	const serviceChooseValue = service_choose.value.trim();
	const massageValue = user_massage.value.trim();

	// Early return, Validation
	if (!nameValue || nameValue.length < 3) {
		alertMessage('error', 'Please, Enter your NAME correctly!');
		return;
	}
	if (!surnameValue || surnameValue.length < 3) {
		alertMessage('error', 'Please, Enter your SURNAME correctly!');
		return;
	}
	if (!mailValue || mailValue.length < 6) {
		alertMessage('error', 'Please, Enter your EMAIL correctly!');
		return;
	}
	if (!phoneValue || phoneValue.length < 9) {
		alertMessage('error', 'Please, Enter your PHONE NUMBER correctly!');
		return;
	}
	if (!serviceChooseValue) {
		alertMessage('error', 'Please, Choose SERVICE type!');
		return;
	}
	if (!massageValue || massageValue.length < 3) {
		alertMessage('error', 'Please, Enter your MESSAGE correctly!');
		return;
	}

	// ALerts success message after validation
	alertMessage('success', 'Thank you! Our experts will call you soon!');

	// Redirects to the main page after successfull validation
	setTimeout(() => {
		window.location.replace('index.html');
	}, 2000);
};

// For precautions to prevent Type Error
if (window.location.href.includes('contact.html')) {
	elContactForm.addEventListener('submit', handleSubmitContactsForm);
}
