const toast = document.querySelector('.toast');
let toastTimer;

document.querySelectorAll('.course-link').forEach((button) => {
	button.addEventListener('click', () => {
		toast.textContent = `${button.dataset.course}: pronto podras reservar tu plaza.`;
		toast.classList.add('is-visible');
		clearTimeout(toastTimer);
		toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
	});
});
