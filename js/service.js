/* ======================
 Service page
======================= */

// Renders elements
const renderServicesList = (data) => {
	// Creates fragment for optimize interactions with DOM
	const sercivcesFragment = document.createDocumentFragment();
	const elServicesList = document.querySelector('.services-list');

	// Clears parent tag before appending
	elServicesList.innerHTML = null;

	// Iterate items in data
	data.forEach((row) => {
		// Creates elements
		const newServiceItem = document.createElement('li');
		const newServiceItemHeading = document.createElement('h2');
		const newServiceItemDescription = document.createElement('p');
		const newServiceConnectLink = document.createElement('a');

		// Adds necessary attributes
		newServiceItem.classList.add('services-list-item');
		newServiceItemHeading.classList.add('services-list-heading');
		newServiceItemHeading.classList.add('main-heading');
		newServiceItemDescription.classList.add('services-list-desc');
		newServiceItemDescription.classList.add('main-desc');
		newServiceConnectLink.classList.add('services-connect-link');
		newServiceConnectLink.classList.add('design-link');

		// Assigns data text
		newServiceItemHeading.textContent = row.heading;
		newServiceItemDescription.textContent = row.description;
		newServiceConnectLink.href = './contact.html';
		newServiceConnectLink.textContent = 'Connect now';

		// Appends to parent elements
		newServiceItem.appendChild(newServiceItemHeading);
		newServiceItem.appendChild(newServiceItemDescription);
		newServiceItem.appendChild(newServiceConnectLink);
		sercivcesFragment.appendChild(newServiceItem);
	});

	// Appends to main element in DOM
	elServicesList.appendChild(sercivcesFragment);
};

// For precautions to prevent Type Error
if (window.location.href.includes('service.html')) {
	renderServicesList(servicesData);
}
