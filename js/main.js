/* ======================
 General 
======================= */

// Loader logic
document.body.classList.add('page--loading');

setTimeout(() => {
	document.body.classList.remove('page--loading');
}, 400);

// Alerts function
const alertMessage = (type, message) => {
	try {
		const elErrorAlert = document.querySelector('.error-alert');
		const elSuccessAlert = document.querySelector('.success-alert');

		if (type === 'error') {
			elErrorAlert.querySelector('.content__text').textContent = message;
			elErrorAlert.classList.add('show');
			setTimeout(() => {
				elErrorAlert.classList.remove('show');
			}, 1000);
			return;
		} else if (type === 'success') {
			elSuccessAlert.querySelector('.content__text').textContent =
				message;
			elSuccessAlert.classList.add('show');
			setTimeout(() => {
				elSuccessAlert.classList.remove('show');
			}, 1000);
			return;
		}
	} catch (err) {
		console.error(err);
	}
};

// Header hamburger toggle logic
var elHeader = document.querySelector('.header');
var elHamburgerBtn = document.querySelector('.header-btn');
var elCancelBtn = document.querySelector('.menu-exit');

elHamburgerBtn.addEventListener('click', function () {
	elHeader.classList.add('header--open');
});

elCancelBtn.addEventListener('click', function () {
	elHeader.classList.remove('header--open');
});

// Mock data Services
const servicesData = [
	{
		heading: 'Mobile Engineering',
		description:
			'We develop mobile applications for both IOS and Android ecosystems using Swift and Kotlin programming languages.',
	},
	{
		heading: 'Website Engineering',
		description:
			'We develop pixel-perfect frontend web applications using JavaScript programming language and React framework.',
	},
	{
		heading: 'Data Science',
		description:
			'We are able to analyze and collect the data relevent to your business and give proper probabilites for you to come up with new strategies.',
	},
	{
		heading: 'Blockchain',
		description:
			'Our experienced blockchain development team will help your projects to shift to the blockchain ecosystem.',
	},
];

// Mock data Team Members
const teamMembersData = [
	{
		fullName: 'Jack Doe',
		position: 'CTO',
		avatar: './img/leader-one.png',
	},
	{
		fullName: 'Klara Khan',
		position: 'Sales Manager',
		avatar: './img/leader-two.png',
	},
	{
		fullName: 'Cameron Trump',
		position: 'Product Manager',
		avatar: './img/leader-three.png',
	},
	{
		fullName: 'Dianne Biden',
		position: 'IOS Engineer',
		avatar: './img/leader-four.png',
	},
	{
		fullName: 'Harry Obama',
		position: 'Android Engineer',
		avatar: './img/leader-five.png',
	},
	{
		fullName: 'Oleg Grigoryan',
		position: 'Backend Engineer',
		avatar: './img/leader-six.png',
	},
];

// Mock data Testimonials
const testimonialsData = [
	{
		fullName: 'Temurbek Adhamjonov',
		position: 'Founder and CEO',
		company: "Najot Ta'lim",
		comment:
			'The team is super reliable. We collaborated while building our online platform.',
	},
	{
		fullName: 'Zafar Khashimov',
		position: 'Founder and CEO',
		company: 'Korzinka',
		comment:
			'We are satisfied with the service given by Be Best team. We are planning to make a contract for at least decade with the team!',
	},
	{
		fullName: 'Mamur Kodirov',
		position: 'Co-founder and CEO',
		company: 'Novalab Tech',
		comment:
			'We are really glad to have such a partner. All team members are proffesionals and we love them so much!',
	},
	{
		fullName: 'Bekzod Khashimov',
		position: 'PHD student and Wisconsin University',
		company: 'Wisconsin University',
		comment:
			'Be Best team helped us to analyze the economical state of the country with their data-science experts!',
	},
];
