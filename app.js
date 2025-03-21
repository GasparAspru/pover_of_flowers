// Ждем полной загрузки DOM перед выполнением кода
document.addEventListener("DOMContentLoaded", function () {
    // Инициализация Telegram Web App
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
    } else {
        console.warn("Telegram Web App API не доступен");
    }

    // Список из 99 цветков
    const flowers = Array.from({ length: 99 }, (_, i) => ({
        name: `Сакура ${i + 1}`,
        id: `sakura_${i + 1}`,
        icon: `flowers/sakura-${i + 1}.png`
    }));

    // Отображение списка цветков
    function displayFlowers() {
        const flowerList = document.getElementById("flowerList");
        if (!flowerList) {
            console.error("Элемент flowerList не найден!");
            return;
        }
        flowerList.innerHTML = "";

        flowers.forEach(flower => {
            const flowerDiv = document.createElement("div");
            flowerDiv.className = "flower-item";
            flowerDiv.innerHTML = `
                <img src="${flower.icon}" class="flower-icon" alt="${flower.name}" onerror="this.src='https://via.placeholder.com/30';">
                <span>${flower.name}</span>
            `;
            flowerDiv.onclick = () => {
                if (window.Telegram && window.Telegram.WebApp) {
                    window.Telegram.WebApp.showAlert(`Вы выбрали: ${flower.name}`);
                } else {
                    alert(`Вы выбрали: ${flower.name}`);
                }
                toggleDropdown();
            };
            flowerList.appendChild(flowerDiv);
        });
    }

    // Переключение видимости выпадающего меню
    function toggleDropdown() {
        const dropdownContent = document.getElementById("flowerList");
        if (dropdownContent) {
            dropdownContent.classList.toggle("show");
        } else {
            console.error("dropdownContent не найден!");
        }
    }

    // Эффект матрицы
    const canvas = document.getElementById("matrix");
    if (!canvas) {
        console.error("Канвас с id 'matrix' не найден!");
        return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
        console.error("Не удалось получить контекст канваса!");
        return;
    }

    // Установка размера канваса
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const katakana = "アカサタナハマヤラワガザダバパイキシチニヒミリヰギジヂビピウクスツヌフムユルグズヅブプエケセテネヘメレヱゲゼデベペオコソトノホモヨロヲゴゾドボポ";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).map(() => Math.random() * (canvas.height / fontSize));

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#ff007a";
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((y, i) => {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            const x = i * fontSize;
            ctx.fillText(text, x, y * fontSize);

            if (y * fontSize > canvas.height || Math.random() > 0.97) {
                drops[i] = Math.random() * (canvas.height / fontSize);
            }
            drops[i] += 0.5;
        });

        requestAnimationFrame(drawMatrix);
    }

    // Запуск анимации
    drawMatrix();

    // Инициализация списка цветков
    displayFlowers();

    // Настройка кнопки "Назад"
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.BackButton.onClick(() => {
            window.Telegram.WebApp.close();
        });
        window.Telegram.WebApp.BackButton.show();
    }
});
