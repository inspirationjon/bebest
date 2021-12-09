/* ======================
 About us page
======================= */

// Renders elements
const renderTeamMembers = (data) => {
	// Creates fragment for optimize interactions with DOM
	const teamMembersFragment = document.createDocumentFragment();
	const elTeamList = document.querySelector('.leadirship-list');

	// Clears parent tag before appending
	elTeamList.innerHTML = null;

	// Iterate items in data
	data.forEach((row) => {
		// Creates elements
		const newTeamMemberItem = document.createElement('li');
		const newTeamMemberFigure = document.createElement('figure');
		const newTeamMemberItemAvatar = document.createElement('img');
		const newTeamMemberFigcaption = document.createElement('figcaption');
		const newTeamMemberItemHeading = document.createElement('h3');
		const newTeamMemberItemDescription = document.createElement('p');

		// Adds necessary attributes
		newTeamMemberItem.classList.add('leadirship-list-item');
		newTeamMemberItemAvatar.classList.add('leadirship-list-item-image');
		newTeamMemberItemHeading.classList.add('leadirship-list-heading');
		newTeamMemberItemHeading.classList.add('main-heading');
		newTeamMemberItemDescription.classList.add('leadirship-list-desc');
		newTeamMemberItemDescription.classList.add('main-desc');

		// Assigns data text
		newTeamMemberItemAvatar.src = row.avatar;
		newTeamMemberItemAvatar.alt = row.fullName + "'s avatar";
		newTeamMemberItemAvatar.width = 180;
		newTeamMemberItemAvatar.height = 180;
		newTeamMemberItemHeading.textContent = row.fullName;
		newTeamMemberItemDescription.textContent = row.position;

		// Appends to parent elements
		newTeamMemberFigure.appendChild(newTeamMemberItemAvatar);
		newTeamMemberFigure.appendChild(newTeamMemberFigcaption);
		newTeamMemberFigcaption.appendChild(newTeamMemberItemHeading);
		newTeamMemberFigcaption.appendChild(newTeamMemberItemDescription);
		newTeamMemberItem.appendChild(newTeamMemberFigure);
		teamMembersFragment.appendChild(newTeamMemberItem);
	});

	// Appends to main element in DOM
	elTeamList.appendChild(teamMembersFragment);
};

// For precautions to prevent Type Error
if (window.location.href.includes('about-us.html')) {
	renderTeamMembers(teamMembersData);
}
