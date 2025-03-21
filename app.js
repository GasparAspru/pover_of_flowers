// Инициализация Telegram Web App
window.Telegram.WebApp.ready();

// Список из 99 цветков (пример, изображения нужно подготовить)
const flowers = Array.from({ length: 99 }, (_, i) => ({
    name: `Сакура ${i + 1}`,
    id: `sakura_${i + 1}`,
    icon: `flowers/sakura-${i + 1}.png` // Путь к изображениям
}));

// Отображение списка цветков
function displayFlowers() {
    const flowerList = document.getElementById("flowerList");
    flowerList.innerHTML = "";

    flowers.forEach(flower => {
        const flowerDiv = document.createElement("div");
        flowerDiv.className = "flower-item";
        flowerDiv.innerHTML = `
            <img src="${flower.icon}" class="flower-icon" alt="${flower.name}">
            <span>${flower.name}</span>
        `;
        flowerDiv.onclick = () => {
            Telegram.WebApp.showAlert(`Вы выбрали: ${flower.name}`);
            toggleDropdown(); // Закрываем меню после выбора
        };
        flowerList.appendChild(flowerDiv);
    });
}

// Переключение видимости выпадающего меню
function toggleDropdown() {
    const dropdownContent = document.getElementById("flowerList");
    dropdownContent.classList.toggle("show");
}

// Анимация лепестков
function createPetal() {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = Math.random() * 3 + 2 + "s";
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 5000);
}

setInterval(createPetal, 500);

// Инициализация списка цветков при запуске
displayFlowers();

// Настройка кнопки "Назад"
Telegram.WebApp.BackButton.onClick(() => {
    Telegram.WebApp.close();
});
Telegram.WebApp.BackButton.show();
