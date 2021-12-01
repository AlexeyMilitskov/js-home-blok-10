const wsUri = "wss://echo.websocket.org/";

function pageLoaded() {
	const btnSend = document.querySelector('.j-btn-open');
	const btnGeoLocation = document.querySelector('.j-btn-geo-location');
	const infoOutput = document.querySelector('.info-output');
	const chatContainer = document.querySelector('.chat-container');

	webSocket = new WebSocket(wsUri);

	webSocket.onopen = () => {
		infoOutput.innerText = 'Соединение установлено';
	}

	webSocket.onerror = () => {
		infoOutput.innerText = 'При передаче данных произошла ошибка';
	}

	webSocket.onmessage = function (event) {
		writeToScreen(event.data, false);
	}

	function locationSuccess(position) {
		//console.log(position);
		const latitude = position.coords.latitude; //широта
		const longitude = position.coords.longitude; //долгота
		let flag = true;
		href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
		//console.log(href);
		writeGeolocation(href, flag);
	}

	function locationError() {
		let flag = false;
		writeGeolocation('При определении местоположения произошла ошибка');
	}

	function writeToScreen(message, flag) {
		let chatOutput = `<div class="${flag ? 'clientMessage' : 'serverMessage'}">${message}</div>`;
		chatContainer.innerHTML += chatOutput;
		//console.log(message, flag);
	}

	function writeGeolocation(message, flag) {
		if (flag) {
			console.log(message);
			let chatGeolocation = `<div class="geoLocation"><a class"link" href="${message}" target="_blank">${message}</a></div>`;
			chatContainer.innerHTML += chatGeolocation;
		} else {
			console.log(message);
			let chatGeolocation = `<div class="geoLocation">${message}</div>`;
			chatContainer.innerHTML += chatGeolocation;
		}
	}

	btnSend.addEventListener('click', () => {
		const inputValue = document.querySelector('.input').value;
		if (inputValue == '') return;
		console.log('1-' + inputValue);
		webSocket.send(inputValue);
		let flag = true;
		document.querySelector('.input').value = '';
		writeToScreen(inputValue, flag);
	})

	btnGeoLocation.addEventListener('click', () => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
		} else {
			writeGeolocation('В вашем браузере недоступна возможность определения местоположения');
		}
	})
}
document.addEventListener("DOMContentLoaded", pageLoaded);