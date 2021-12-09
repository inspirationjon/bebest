/* ======================
 Testimonials us page
======================= */

// Renders elements
const renderTestimonials = (data) => {
	// Creates fragment for optimize interactions with DOM
	const testimonialsFragment = document.createDocumentFragment();
	const elTestimonialsTableBody =
		document.querySelector('.testimonials-body');

	// Clears parent tag before appending
	elTestimonialsTableBody.innerHTML = null;

	// Iterate items in data
	data.forEach((row) => {
		// Creates elements
		const newTestimonalRow = document.createElement('tr');
		const newTestmonialName = document.createElement('td');
		const newTestmonialPosition = document.createElement('td');
		const newTestmonialCompany = document.createElement('td');
		const newTestmonialComment = document.createElement('td');

		newTestmonialName.textContent = row.fullName;
		newTestmonialPosition.textContent = row.position;
		newTestmonialCompany.textContent = row.company;
		newTestmonialComment.textContent = row.comment;

		// Appends to parent elements
		newTestimonalRow.appendChild(newTestmonialName);
		newTestimonalRow.appendChild(newTestmonialPosition);
		newTestimonalRow.appendChild(newTestmonialCompany);
		newTestimonalRow.appendChild(newTestmonialComment);
		testimonialsFragment.appendChild(newTestimonalRow);
	});

	// Appends to main element in DOM
	elTestimonialsTableBody.appendChild(testimonialsFragment);
};

// For precautions to prevent Type Error
if (window.location.href.includes('testimonials.html')) {
	renderTestimonials(testimonialsData);
}
