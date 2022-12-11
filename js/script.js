// сохраняем в переменную ноду для кнопки "Отправить"
const buttonMail = document.querySelector(".button_mail");
// сохраняем в переменную ноду для кнопки "Гео-локация"
const buttonGeo = document.querySelector(".button_geo");
// сохраняем в переменную ноду для контейнера с сообщениями
const messageWrapper = document.querySelector(".message_wrapper");
// сохраняем в переменную ноду для ссылки на карту 
const mapLink = document.querySelector(".map_link");
// сохраняем в переменную ноду для сообщения с геолокацией 
const statusGeo = document.querySelector(".status");

// Объявляем функции

// функция успешного запроса гео-локации 
function success(position) {
    // создаем переменные для широты и долготы
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // добавляем контент в текст сообщения 
    statusGeo.textContent = `Широта: ${latitude}, Долгота: ${longitude}.`;
    // добавлеям в тег <a> ссылку на карту
    mapLink.href = `https://www.openstreetmap.org/#map=17/${latitude}/${longitude}`;
    // добавлеям в тег <a> текст
    mapLink.textContent = "Ссылка на карту";
};

// функция не успешного запроса гео-локации
function error() {
    // выводим в сообщение текст ошибки
    statusGeo.textContent = "Невозможно получить ваше местоположение";
};

// создаем обработчик для кнопки
buttonGeo.addEventListener("click", () => {
    // удаляем ссылку и текст из тега <a>
    mapLink.href = "";
    mapLink.textContent = "";

    // проверяем поддерживается ли браузером geolocation
    if (navigator.geolocation) {
        // выводим в сообщение текст который будет виден пока не выполниться .getCurrentPosition
        statusGeo.textContent = "Определение местоположения...";
        //вызываем метод .getCurrentPosition и передаем в него функции success и error как аргументы для успешного и не успешного выполения функции
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        // выводим в сообщение текст ошибки
        statusGeo.textContent = "Geolocation не поддерживаеться вашим браузером.";
    }
});

