// Проверка Telegram WebApp
if (!window.Telegram || !window.Telegram.WebApp) {
    console.error("Telegram WebApp не инициализирован. Запустите в Telegram!");
} else {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    console.log("Telegram WebApp инициализирован.");
}

// Локализация
const translations = {
    ru: {
        title: "Магазин NFT-цветов",
        connect: "Подключить кошелёк",
        notConnected: "Кошелёк не подключён",
        connected: "Кошелёк подключён!",
        connecting: "Подключение...",
        error: "Ошибка подключения"
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

const catalog = document.querySelector('.catalog');
function renderNFT({ name, price, rarity, img }) {
    const card = document.createElement('div');
    card.className = 'nft-card';
    card.innerHTML = `
        <img src="${img}" alt="${name}" loading="lazy">
        <h3>${name}</h3>
        <p>Цена: ${price} TON<br>Редкость: ${rarity}</p>
        <button onclick="buyNFT('${name}', ${price})">Купить</button>
    `;
    catalog.appendChild(card);
}
nfts.forEach(renderNFT);

// TON Connect
let tonConnectUI = null;

async function initTonConnect() {
    return new Promise((resolve, reject) => {
        console.log("Проверка TONConnectUI...");
        if (typeof window.TONConnectUI === 'undefined') {
            console.log("TONConnectUI не загружен, ждём...");
            const script = document.querySelector('script[src*="tonconnect-ui.min.js"]');
            script.addEventListener('load', () => {
                console.log("TONConnectUI загружен!");
                tonConnectUI = new window.TONConnectUI({
                    manifestUrl: `${window.location.origin}/manifest.json`,
                    walletsListConfiguration: {
                        includeWallets: [
                            {
                                appName: "bitgetWallet",
                                name: "Bitget Wallet",
                                image: "https://web3.bitget.com/images/wallet/bitget-wallet.png",
                                aboutUrl: "https://web3.bitget.com/",
                                universalLink: "https://t.me/BitgetWallet_TGBot",
                                bridgeUrl: "https://tonconnect.bitget.com/bridge",
                                platforms: ["ios", "android", "web"]
                            }
                        ]
                    }
                });
                resolve(tonConnectUI);
            });
            script.addEventListener('error', () => {
                console.error("Ошибка загрузки TON Connect UI!");
                reject(new Error("Не удалось загрузить TON Connect UI"));
            });
        } else {
            console.log("TONConnectUI уже доступен.");
            tonConnectUI = new window.TONConnectUI({
                manifestUrl: `${window.location.origin}/manifest.json`,
                walletsListConfiguration: {
                    includeWallets: [
                        {
                            appName: "bitgetWallet",
                            name: "Bitget Wallet",
                            image: "https://web3.bitget.com/images/wallet/bitget-wallet.png",
                            aboutUrl: "https://web3.bitget.com/",
                            universalLink: "https://t.me/BitgetWallet_TGBot",
                            bridgeUrl: "https://tonconnect.bitget.com/bridge",
                            platforms: ["ios", "android", "web"]
                        }
                    ]
                }
            });
            resolve(tonConnectUI);
        }
    });
}

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

window.addEventListener('load', () => {
    console.log("Страница загружена.");
    if (!window.TONConnectUI) {
        console.error("TONConnectUI не загружен!");
        document.getElementById('wallet-status').textContent = "Ошибка загрузки TON Connect";
    }
});