const html = document.documentElement;

// FLS (Full Logging System) =================================================================================================================
function FLS(message) {
	setTimeout(() => {
		if (window.FLS) {
			console.log(message);
		}
	}, 0);
}

// Проверка браузера на поддержку .webp изображений =================================================================================================================
function isWebp() {
	// Проверка поддержки webp
	const testWebp = (callback) => {
		const webP = new Image();

		webP.onload = webP.onerror = () => callback(webP.height === 2);
		webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
	};
	// Добавление класса _webp или _no-webp для HTML
	testWebp((support) => {
		const className = support === true ? 'webp' : 'no-webp';
		html.classList.add(className);

		FLS(support === true ? 'webp поддерживается' : 'webp не поддерживается');
	});
}

// Модуль работы с меню (бургер) =======================================================================================================================================================================================================================
const hamburger = document.querySelector('.hamburger'),
	itemMenu = document.querySelector('.menu__body');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	itemMenu.classList.toggle('active');
});
// Модуль работы со слайдером =====================================================================================================================
const swiper = new Swiper('.mySwiper', {
	spaceBetween: 30,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},
	mousewheel: true,
	keyboard: true,
});

export { FLS, isWebp };

// ========================================================================================================
