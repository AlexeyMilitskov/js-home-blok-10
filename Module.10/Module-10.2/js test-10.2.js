const btn = document.querySelector(".btn");

btn.addEventListener('click', () => {
	//alert(`${ширина экрана: } document.documentElement.clientWidth ${ высота экрана:} document.documentElement.clientHeight`);
	alert('ширина экрана: ' + window.screen.width + 'px,   ' + 'высота экрана: ' + window.screen.height + 'px');
	alert('ширина экрана за вычетом размеров панели инструментов ОС: ' + window.screen.availWidth + 'px, ' + 'высота экрана за вычетом размеров панели инструментов ОС: ' + window.screen.availHeight + 'px');
	alert('ширина окна браузера: ' + window.outerWidth + 'px,  ' + 'высота окна браузера: ' + window.outerHeight + 'px');
	alert('внутренняя ширина окна браузера: ' + window.innerWidth + 'px,  ' + 'внутренняя высота окна браузера: ' + window.innerHeight + 'px');
	alert('ширина веб-страницы: ' + document.documentElement.clientWidth + 'px,  ' + 'высота веб-страницы: ' + document.documentElement.clientHeight + 'px');
});