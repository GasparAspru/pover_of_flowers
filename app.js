// Список подарков с локальными статичными иконками
const gifts = [
    { name: "Цветок Сакуры", description: "Редкий подарок (100K шт)", cost: 25, id: "sakura_flower", rarity: "rare", icon: "icons/sakura-flower.png" },
    { name: "Сердце с лепестками", description: "Романтичный подарок", cost: 15, id: "sakura_heart", rarity: "common", icon: "icons/sakura-heart.png" },
    { name: "Торт Сакура", description: "Лимитированный торт (500K шт)", cost: 500, id: "sakura_cake", rarity: "limited", icon: "icons/sakura-cake.png" },
    { name: "Плюшевый Пепе", description: "Коллекционный подарок", cost: 100, id: "plush_pepe", rarity: "rare", icon: "icons/plush-pepe.png" },
    { name: "Леденец", description: "Редкий подарок (500K шт)", cost: 15, id: "lollipop", rarity: "common", icon: "icons/lollipop.png" }
];

// Инициализация Telegram Web App
window.Telegram.WebApp.ready();

// Отображение подарков
function displayGifts(giftArray) {
    const giftList = document.getElementById("giftList");
    giftList.innerHTML = "";

    giftArray.forEach(gift => {
        const giftDiv = document.createElement("div");
        giftDiv.className = "gift-item";
        giftDiv.innerHTML = `
            <img src="${gift.icon}" class="gift-icon" alt="${gift.name}">
            <div>
                <strong>${gift.name}</strong><br>
                ${gift.description}<br>
                Цена: ${gift.cost} Stars<br>
                Редкость: ${translateRarity(gift.rarity)}
            </div>
        `;
        giftDiv.onclick = () => {
            Telegram.WebApp.showConfirm(`Купить "${gift.name}" за ${gift.cost} Stars?`, (confirmed) => {
                if (confirmed) {
                    Telegram.WebApp.sendData(JSON.stringify({ giftId: gift.id, action: "buy" }));
                }
            });
        };
        giftList.appendChild(giftDiv);
    });
}

// Перевод редкости
function translateRarity(rarity) {
    switch (rarity) {
        case "common": return "Обычный";
        case "rare": return "Редкий";
        case "limited": return "Лимитированный";
        default: return rarity;
    }
}

// Применение фильтров
function applyFilters() {
    let filteredGifts = [...gifts];

    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    if (searchInput) {
        filteredGifts = filteredGifts.filter(gift =>
            gift.name.toLowerCase().includes(searchInput) ||
            gift.description.toLowerCase().includes(searchInput)
        );
    }

    const rarityFilter = document.getElementById("rarityFilter").value;
    if (rarityFilter) {
        filteredGifts = filteredGifts.filter(gift => gift.rarity === rarityFilter);
    }

    const priceFilter = document.getElementById("priceFilter").value;
    if (priceFilter === "low-to-high") {
        filteredGifts.sort((a, b) => a.cost - b.cost);
    } else if (priceFilter === "high-to-low") {
        filteredGifts.sort((a, b) => b.cost - a.cost);
    }

    displayGifts(filteredGifts);
}

// Кнопка "Купить Stars"
function buyStars() {
    Telegram.WebApp.openTelegramLink("https://t.me/PremiumBot?start=buy_stars");
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

// Показать все подарки при запуске
displayGifts(gifts);

// Настройка кнопки "Назад"
Telegram.WebApp.BackButton.onClick(() => {
    Telegram.WebApp.close();
});
Telegram.WebApp.BackButton.show();
