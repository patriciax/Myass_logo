const reload_btn = document.querySelector('.reload');

reload_btn.addEventListener('click', function () {
	let icon = document.querySelector('.icon path');
	let text = document.querySelector('.text text');
	
	icon.classList.remove('is-active');
	text.classList.remove('is-active');
	
	setTimeout(function () {
		icon.classList.add('is-active');
		text.classList.add('is-active');
	}, 500);
});