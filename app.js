// Инициализация Telegram Web App
window.Telegram.WebApp.ready();

// Список из 99 цветков с описанием и ссылкой
const flowers = Array.from({ length: 99 }, (_, i) => ({
    name: `Сакура ${i + 1}`,
    id: `sakura_${i + 1}`,
    icon: `flowers/sakura-${i + 1}.png`,
    description: `Это уникальная Сакура ${i + 1} из коллекции Wild Sakura.`,
    link: `https://wildsakura.example.com/flower-${i + 1}` // Пример ссылки
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
            Telegram.WebApp.showPopup({
                title: flower.name,
                message: `${flower.description}\n\nПодробнее: ${flower.link}`,
                buttons: [
                    { id: "open", type: "default", text: "Открыть ссылку" },
                    { type: "cancel", text: "Закрыть" }
                ]
            }, (buttonId) => {
                if (buttonId === "open") {
                    Telegram.WebApp.openLink(flower.link);
                }
                toggleDropdown();
            });
        };
        flowerList.appendChild(flowerDiv);
    });
}

// Переключение видимости выпадающего меню
function toggleDropdown() {
    const dropdownContent = document.getElementById("flowerList");
    dropdownContent.classList.toggle("show");
}

// Эффект матрицы по всей вертикали
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = "アカサタナハマヤラワガザダバパイキシチニヒミリヰギジヂビピウクスツヌフムユルグズヅブプエケセテネヘメレヱゲゼデベペオコソトノホモヨロヲゴゾドボポ";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";
const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(0);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff007a";
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, i) => {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height || Math.random() > 0.95) {
            drops[i] = Math.random() * (canvas.height / fontSize);
        }
        drops[i]++;
    });
}

setInterval(drawMatrix, 50);

// Инициализация списка цветков
displayFlowers();

// Настройка кнопки "Назад"
Telegram.WebApp.BackButton.onClick(() => {
    Telegram.WebApp.close();
});
Telegram.WebApp.BackButton.show();