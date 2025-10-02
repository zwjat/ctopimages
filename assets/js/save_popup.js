/*  popup  */
const copyButton = document.getElementById("copyButton");
const copy = document.getElementById("copy");
const copied = document.getElementById("copied");

copyButton.addEventListener("click", function() {
    const linkText = '<a href="https://www.cropimages.org" target="_blank">Crop Images</a>';  // Получаем текст ссылки

    // Копируем текст в буфер обмена
    navigator.clipboard.writeText(linkText).then(() => {
        // Меняем текст кнопки на "Copied"
        copy.style.display = "none";
        copied.style.display = "inline";


        // Через 3 секунды возвращаем "Copy"
        setTimeout(() => {
            copy.style.display = "inline";
            copied.style.display = "none";
        }, 1000);
    }).catch(err => {
        console.error("Ошибка копирования текста:", err);
    });
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" || event.code === "Escape") {
        showPopup(false);
    }
});

const closePopupButton = document.getElementById("closepopup");
const popup = document.getElementById("popup1");
const showPopupButton = document.getElementById("showPopup");


closePopupButton.addEventListener("click", function (e) {
    e.preventDefault();
    showPopup(false);
})

showPopupButton.addEventListener("click", function (e) {
    e.preventDefault();
    showPopup(true);
})

function showPopup(state) {
    if (state) {
        popup.style.visibility = "visible";
        popup.style.opacity = "100%";
    }
    else {
        popup.style.visibility = "hidden";
        popup.style.opacity = "0";
    }
}

document.querySelectorAll(".popup-button").forEach(button => {
    button.addEventListener("click", function(event) {
        const link = event.currentTarget.getAttribute("data-link"); // Читаем значение data-link
        if (link) {
            window.open(link, "_blank"); // Открываем ссылку в новой вкладке
        } else {
            console.error("Ссылка отсутствует!");
        }
    });
});