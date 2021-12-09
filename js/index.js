/* ======================
 Home page
======================= */

// Services section

// Renders elements
const renderServices = (data) => {
	// Creates fragment for optimize interactions with DOM
	const sercivcesFragment = document.createDocumentFragment();
	const elServicesList = document.querySelector('.service-list');

	// Clears parent tag before appending
	elServicesList.innerHTML = null;

	// Iterate items in data
	data.forEach((row) => {
		// Creates elements
		const newServiceItem = document.createElement('li');
		const newServiceItemLink = document.createElement('a');
		const newServiceItemHeading = document.createElement('span');
		const newServiceItemDescription = document.createElement('span');

		// Adds necessary attributes
		newServiceItem.classList.add('service-list-item');
		newServiceItemLink.classList.add('service-list-link');
		newServiceItemLink.href = './service.html';
		newServiceItemHeading.classList.add('service-list-heading');
		newServiceItemDescription.classList.add('service-list-des');

		// Assigns data text
		newServiceItemHeading.textContent = row.heading;
		newServiceItemDescription.textContent = row.description;

		// Appends to parent elements
		newServiceItemLink.appendChild(newServiceItemHeading);
		newServiceItemLink.appendChild(newServiceItemDescription);
		newServiceItem.appendChild(newServiceItemLink);
		sercivcesFragment.appendChild(newServiceItem);
	});

	// Appends to main element in DOM
	elServicesList.appendChild(sercivcesFragment);
};

// For precautions to prevent Type Error
if (window.location.href.includes('index.html')) {
	renderServices(servicesData);
}
