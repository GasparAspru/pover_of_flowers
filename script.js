
// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// Локализация
const translations = {
    ru: {
        title: "Магазин NFT-цветов",
        connect: "Подключить кошелёк TON",
        notConnected: "Кошелёк не подключён",
        connected: "Кошелёк подключён!",
        connecting: "Подключение...",
        error: "Ошибка подключения"
    },
    en: {
        title: "Flower NFT Shop",
        connect: "Connect TON Wallet",
        notConnected: "Wallet not connected",
        connected: "Wallet connected!",
        connecting: "Connecting...",
        error: "Connection error"
    }
};

let currentLang = "ru";
function setLanguage(lang) {
    currentLang = lang;
    document.getElementById("shop-title").textContent = translations[lang].title;
    document.getElementById("connect-text").textContent = translations[lang].connect;
    document.getElementById("wallet-status").textContent = translations[lang].notConnected;
}
setLanguage(currentLang);

// Данные NFT
const nfts = [
    { name: "Роза #1", price: 5, rarity: "10%", img: "https://via.placeholder.com/200x150?text=Rose#1" },
    { name: "Тюльпан #2", price: 10, rarity: "5%", img: "https://via.placeholder.com/200x150?text=Tulip#2" },
    { name: "Лилия #3", price: 8, rarity: "7%", img: "https://via.placeholder.com/200x150?text=Lily#3" },
    { name: "Орхидея #4", price: 15, rarity: "3%", img: "https://via.placeholder.com/200x150?text=Orchid#4" }
];

// Рендеринг NFT
const catalog = document.querySelector('.catalog');
function renderNFT({ name, price, rarity, img }) {
    const card = document.createElement('div');
    card.className = 'nft-card';
    card.setAttribute('role', 'article');
    card.innerHTML = `
        <img src="${img}" alt="${name}" loading="lazy">
        <h3>${name}</h3>
        <p>Цена: ${price} TON<br>Редкость: ${rarity}</p>
        <button onclick="buyNFT('${name}', ${price})" aria-label="Купить ${name}">Купить</button>
    `;
    catalog.appendChild(card);
}
nfts.forEach(renderNFT);

// TON Connect
let tonConnectUI = null;

async function initTonConnect() {
    return new Promise((resolve, reject) => {
        console.log("Инициализация TON Connect...");
        if (typeof window.TONConnectUI === 'undefined') {
            console.log("TONConnectUI ещё не загружен, ждём...");
            const script = document.querySelector('script[src*="tonconnect-ui.min.js"]');
            script.addEventListener('load', () => {
                console.log("TONConnectUI загружен.");
                tonConnectUI = new window.TONConnectUI({
                    manifestUrl: '/manifest.json', // Локальный манифест
                    buttonRootId: null
                });
                resolve(tonConnectUI);
            });
            script.addEventListener('error', () => {
                console.error("Ошибка загрузки TON Connect UI");
                reject(new Error("Не удалось загрузить TON Connect UI"));
            });
        } else {
            console.log("TONConnectUI уже доступен.");
            tonConnectUI = new window.TONConnectUI({
                manifestUrl: '/manifest.json', // Локальный манифест
                buttonRootId: null
            });
            resolve(tonConnectUI);
        }
    });
}

// Подключение кошелька
async function connectWallet() {
    const status = document.getElementById('wallet-status');
    status.textContent = translations[currentLang].connecting;

    try {
        if (!tonConnectUI) {
            console.log("Инициализация TON Connect...");
            tonConnectUI = await initTonConnect();
        }

        if (tonConnectUI.connected) {
            console.log("Кошелёк уже подключён.");
            status.textContent = translations[currentLang].connected;
            tg.showAlert(translations[currentLang].connected);
            return;
        }

        console.log("Открытие модального окна для подключения...");
        await tonConnectUI.connectWallet();

        if (tonConnectUI.connected) {
            console.log("Кошелёк успешно подключён!");
            status.textContent = translations[currentLang].connected;
            tg.showAlert(translations[currentLang].connected);
        } else {
            throw new Error("Подключение не удалось.");
        }
    } catch (error) {
        console.error("Ошибка подключения:", error);
        status.textContent = translations[currentLang].error;
        tg.showAlert(`Ошибка: ${error.message}`);
    }
}

// Покупка NFT
async function buyNFT(nftName, price) {
    if (!tonConnectUI) await initTonConnect();
    if (!tonConnectUI.connected) {
        tg.showAlert('Сначала подключи кошелёк!');
        return;
    }
    if (price <= 0 || !Number.isInteger(price)) {
        tg.showAlert('Некорректная цена!');
        return;
    }

    tg.showConfirm(`Купить ${nftName} за ${price} TON?`, async (confirmed) => {
        if (confirmed) {
            const transaction = {
                validUntil: Math.floor(Date.now() / 1000) + 300,
                messages: [{
                    address: 'UQCzP2HK6nkvDPQV1QbkqP9vzhxHB6WGKutKyIKxTKKq5VMt',
                    amount: (price * 1e9).toString(),
                    payload: btoa(`Buy ${nftName}`)
                }]
            };
            try {
                await tonConnectUI.sendTransaction(transaction);
                tg.showAlert(`Вы купили ${nftName}!`);
                tg.close();
            } catch (e) {
                tg.showAlert('Ошибка оплаты: ' + e.message);
            }
        }
    });
}

// Проверка загрузки
window.addEventListener('load', () => {
    console.log("Страница загружена.");
    if (!window.TONConnectUI) {
        console.error("TONConnectUI не загружен!");
        document.getElementById('wallet-status').textContent = "Ошибка загрузки TON Connect";
    }
});