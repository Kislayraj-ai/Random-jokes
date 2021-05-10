const url = 'https://geek-jokes.sameerkumar.website/api?format=json';
const Para = document.querySelector('.para');
const Random = document.querySelector('.card button');
const card = document.querySelector('.card');
const Shake = document.querySelector('.card img');

window.addEventListener('DOMContentLoaded', async () => {
	const data = await fetch(url);
	const response = await data.json();
	JokeContianer(response);
});

function JokeContianer({ joke }) {
	Para.textContent = joke;
}

Random.addEventListener('click', () => {
	Shake.classList.add('effect');
	reload();
});
function reload() {
	reload = location.reload();
}
