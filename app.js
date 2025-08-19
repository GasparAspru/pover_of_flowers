// Простой пример проверки пароля (замените 'secret' на ваш пароль)
const correctPassword = ,'21112025';

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');
    const modal = document.getElementById('passwordModal');

    if (input === correctPassword) {
        modal.style.display = 'none';
        Telegram.WebApp.HapticFeedback.notificationOccurred('success');
    } else {
        errorMessage.textContent = 'Wrong';
        errorMessage.style.display = 'block';
        Telegram.WebApp.HapticFeedback.notificationOccurred('error');
    }
}

// Показать модальное окно при загрузке
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('passwordModal').style.display = 'flex';
});

// Поддержка Enter для отправки
document.getElementById('passwordInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Инициализация Telegram Web App
window.Telegram.WebApp.ready();

// Список из 100 цветков с уникальными описаниями и ссылками на файлы в папке mode
const flowers = [
    { name: "Flowey", id: "sakura_1", icon: "flowers/sakura-1.png", description: "Запас-(0,1%) от общего количества Sakura Flower. Поначалу Ffowey кажется дружелюбным и услужливым говорящим цветком, но вскоре оказывается, что он — садист с манией величия и более зловещими целями. ", link: "mode/1.html" },
    { name: "Zap Aster", id: "sakura_2", icon: "flowers/sakura-2.png", description: "Запас-(0,2%) от общего количества Sakura Flower. Гибридный цветок Zap Aster, выращенный в лабораториях Neo-Osaka, излучает слабый электромагнитный импульс.", link: "mode/2.html" },
    { name: "Sunflower", id: "sakura_3", icon: "flowers/sakura-3.png", description: "Запас-(0,2%) от общего количества Sakura Flower. Sunflower питается энергией солнца, наделен способностью гелиотропизма и имеет ультрафиолетовые кольца для привлечения пчел и климатической адаптации. ", link: "mode/3.html" },
    { name: "Carnation", id: "sakura_4", icon: "flowers/sakura-4.png", description: "Запас-(0,2%) от общего количества Sakura Flower. Carnation это квантовый эксперимент, биотехнологический робот: лепестки которго, пульсируют в ритме мегаполиса.", link: "mode/4.html" },
    { name: "Dog Flower", id: "sakura_5", icon: "flowers/sakura-5.png", description: "Запас-(0,2%) от общего количества Sakura Flower. Dog Flower это гибридный биомодуль, напоминающий цветок с чертами собаки. Это страж трущоб, верный, но дикий. Его лепестки, покрытые голографической шерстью, мерцают синим.", link: "mode/5.html" },
    { name: "Wilted", id: "sakura_6", icon: "flowers/sakura-6.png", description: "Запас-(0,2%) от общего количества Sakura Flower. Цифровой цветок, взломанный хакерами из Shibuya, шепчет код на ветру.", link: "mode/6.html" },
    { name: "Meower", id: "sakura_7", icon: "flowers/sakura-7.png", description: "Запас-(0,2%) от общего количества Sakura Flower. Синтетическая сакура, созданная для украшения орбитальных станций.", link: "mode/7.html" },
    { name: "Monsoon", id: "sakura_8", icon: "flowers/sakura-8.png", description: "Продукт генной мутации, светится в темноте благодаря нано-ботам.", link: "mode/8.html" },
    { name: "Heartbeat", id: "sakura_9", icon: "flowers/sakura-9.png", description: "Реликт из прошлого, восстановленный с помощью древнего ИИ-флориста.", link: "mode/9.html" },
    { name: "Sakura", id: "sakura_10", icon: "flowers/sakura-10.png", description: "Био-механический гибрид, лепестки покрыты микросхемами.", link: "mode/10.html" },
    { name: "Blazing Dusk", id: "sakura_11", icon: "flowers/sakura-11.png", description: "Цветок из подпольного рынка Neo-Tokyo, торгуется за крипто-чипы.", link: "mode/11.html" },
    { name: "Snowdrop", id: "sakura_12", icon: "flowers/sakura-12.png", description: "Экспериментальный штамм, выращен под куполом мегаполиса.", link: "mode/12.html" },
    { name: "Bull Eye", id: "sakura_13", icon: "flowers/sakura-13.png", description: "Неоновая сакура, питаемая энергией уличных фонарей.", link: "mode/13.html" },
    { name: "Big Bang", id: "sakura_14", icon: "flowers/sakura-14.png", description: "Растение из зоны радиации, лепестки слегка фосфоресцируют.", link: "mode/14.html" },
    { name: "Pixel Bloom", id: "sakura_15", icon: "flowers/sakura-15.png", description: "Прототип цветка для колонизации Марса, адаптирован к вакууму.", link: "mode/15.html" },
    { name: "Loves Or Not", id: "sakura_16", icon: "flowers/sakura-16.png", description: "Сакура из виртуального сада, оцифрована в 2075 году.", link: "mode/16.html" },
    { name: "Fire Bloom", id: "sakura_17", icon: "flowers/sakura-17.png", description: "Генетический артефакт, найден в архивах корпорации Arasaka.", link: "mode/17.html" },
    { name: "Dark Neo", id: "sakura_18", icon: "flowers/sakura-18.png", description: "Цветок с встроенным чипом, транслирует данные в облако.", link: "mode/18.html" },
    { name: "Bubblia", id: "sakura_19", icon: "flowers/sakura-19.png", description: "Дикая сакура, проросшая сквозь бетон заброшенного небоскреба.", link: "mode/19.html" },
    { name: "Venus Flytrap", id: "sakura_20", icon: "flowers/sakura-20.png", description: "Неоновая мутация, лепестки пульсируют в ритме города.", link: "mode/20.html" },
    { name: "Shake It", id: "sakura_21", icon: "flowers/sakura-21.png", description: "Сакура из зоны нулевого сигнала, растет без технологий.", link: "mode/21.html" },
    { name: "Icebound", id: "sakura_22", icon: "flowers/sakura-22.png", description: "Цветок с памятью, хранит данные о прошлом владельце.", link: "mode/22.html" },
    { name: "Myrtella", id: "sakura_23", icon: "flowers/sakura-23.png", description: "Растение-хакер, взламывает ближайшие дроны.", link: "mode/23.html" },
    { name: "Jellybud", id: "sakura_24", icon: "flowers/sakura-24.png", description: "Синтетический цветок, разработан для фильтрации воздуха.", link: "mode/24.html" },
    { name: "Wildflower", id: "sakura_25", icon: "flowers/sakura-25.png", description: "Сакура из черного рынка, лепестки — контрабанда.", link: "mode/25.html" },
    { name: "Luminosia", id: "sakura_26", icon: "flowers/sakura-26.png", description: "Цветок с ИИ, предсказывает погоду в мегаполисе.", link: "mode/26.html" },
    { name: "Ping Blossom", id: "sakura_27", icon: "flowers/sakura-27.png", description: "Редкий вид, выращен на крыше заброшенного синто-храма.", link: "mode/27.html" },
    { name: "Pokerface", id: "sakura_28", icon: "flowers/sakura-28.png", description: "Неоновая сакура, подключена к городской энергосети.", link: "mode/28.html" },
    { name: "Glitch", id: "sakura_29", icon: "flowers/sakura-29.png", description: "Цветок-призрак, виден только в AR-очках.", link: "mode/29.html" },
    { name: "Savanna", id: "sakura_30", icon: "flowers/sakura-30.png", description: "Био-гибрид, питается отходов киберимплантов.", link: "mode/30.html" },
    { name: "Party Time", id: "sakura_31", icon: "flowers/sakura-31.png", description: "Сакура из зоны карантина, излучает слабый ток.", link: "mode/31.html" },
    { name: "Shimeria", id: "sakura_32", icon: "flowers/sakura-32.png", description: "Цветок с лазерными лепестками, режет тьму.", link: "mode/32.html" },
    { name: "Spotty Leo", id: "sakura_33", icon: "flowers/sakura-33.png", description: "Растение из капсулы времени, открытой в 2099.", link: "mode/33.html" },
    { name: "Peony", id: "sakura_34", icon: "flowers/sakura-34.png", description: "Сакура-дрон, парит над руинами города.", link: "mode/34.html" },
    { name: "Dark Loader", id: "sakura_35", icon: "flowers/sakura-35.png", description: "Цветок с памятью о прошлом, проецирует голограммы.", link: "mode/35.html" },
    { name: "Windy", id: "sakura_36", icon: "flowers/sakura-36.png", description: "Неоновая сакура, растет в тени рекламных щитов.", link: "mode/36.html" },
    { name: "Morning Sun", id: "sakura_37", icon: "flowers/sakura-37.png", description: "Растение из виртуальной реальности, стало материальным.", link: "mode/37.html" },
    { name: "Yellow Poppy", id: "sakura_38", icon: "flowers/sakura-38.png", description: "Сакура с микрочипом, записывает звуки улиц.", link: "mode/38.html" },
    { name: "White Peony", id: "sakura_39", icon: "flowers/sakura-39.png", description: "Цветок из забытого сада под куполом.", link: "mode/39.html" },
    { name: "Red Poppy", id: "sakura_40", icon: "flowers/sakura-40.png", description: "Синтетический вид, создан для фильмов в VR.", link: "mode/40.html" },
    { name: "Silveria", id: "sakura_41", icon: "flowers/sakura-41.png", description: "Сакура из зоны нулевого света, питается тьмой.", link: "mode/41.html" },
    { name: "Bronzula", id: "sakura_42", icon: "flowers/sakura-42.png", description: "Цветок-киборг, лепестки из углеродного волокна.", link: "mode/42.html" },
    { name: "Goldensia", id: "sakura_43", icon: "flowers/sakura-43.png", description: "Растение из будущего, доставлено через портал.", link: "mode/43.html" },
    { name: "Party Bloom", id: "sakura_44", icon: "flowers/sakura-44.png", description: "Сакура с датчиками, следит за воздухом мегаполиса.", link: "mode/44.html" },
    { name: "Plumeria", id: "sakura_45", icon: "flowers/sakura-45.png", description: "Неоновая мутация, цветет только ночью.", link: "mode/45.html" },
    { name: "Hellebore", id: "sakura_46", icon: "flowers/sakura-46.png", description: "Цветок с чипом слежения, создан для шпионажа.", link: "mode/46.html" },
    { name: "Gerbera", id: "sakura_47", icon: "flowers/sakura-47.png", description: "Сакура с AR-лепестками, видна в дополненной реальности.", link: "mode/47.html" },
    { name: "Brunnera", id: "sakura_48", icon: "flowers/sakura-48.png", description: "Растение с кибер-корнями, питается данными.", link: "mode/48.html" },
    { name: "Petunia", id: "sakura_49", icon: "flowers/sakura-49.png", description: "Цветок из заброшенного космопорта, пахнет топливом.", link: "mode/49.html" },
    { name: "Hydrangea", id: "sakura_50", icon: "flowers/sakura-50.png", description: "Синтетическая сакура, создана для подводных городов.", link: "mode/50.html" },
    { name: "Nightshade", id: "sakura_51", icon: "flowers/sakura-51.png", description: "Неоновая сакура, растет в тени кибер-фабрик.", link: "mode/51.html" },
    { name: "Clivia", id: "sakura_52", icon: "flowers/sakura-52.png", description: "Цветок с голографическими лепестками, мигает в темноте.", link: "mode/52.html" },
    { name: "Allamanda", id: "sakura_53", icon: "flowers/sakura-53.png", description: "Растение из зоны электромагнитных бурь.", link: "mode/53.html" },
    { name: "Bumblebee", id: "sakura_54", icon: "flowers/sakura-54.png", description: "Сакура с металлическими лепестками, режет ветер.", link: "mode/54.html" },
    { name: "Geranium", id: "sakura_55", icon: "flowers/sakura-55.png", description: "Цветок из черного рынка Neo-Kobe, редкий экземпляр.", link: "mode/55.html" },
    { name: "Aetheris", id: "sakura_56", icon: "flowers/sakura-56.png", description: "Синтетический вид, разработан для симуляций.", link: "mode/56.html" },
    { name: "Anemone", id: "sakura_57", icon: "flowers/sakura-57.png", description: "Сакура с датчиком движения, реагирует на прохожих.", link: "mode/57.html" },
    { name: "Hybrid", id: "sakura_58", icon: "flowers/sakura-58.png", description: "Растение из разрушенного купола, выжило вопреки.", link: "mode/58.html" },
    { name: "Dahlia", id: "sakura_59", icon: "flowers/sakura-59.png", description: "Неоновая сакура, цветет под звуки техно.", link: "mode/59.html" },
    { name: "Hollyhock", id: "sakura_60", icon: "flowers/sakura-60.png", description: "Цветок с памятью о старом Токио, проецирует тени.", link: "mode/60.html" },
    { name: "Lemon Queen", id: "sakura_61", icon: "flowers/sakura-61.png", description: "Сакура из зоны нулевого доступа, растет в тайне.", link: "mode/61.html" },
    { name: "Crimsonia", id: "sakura_62", icon: "flowers/sakura-62.png", description: "Растение с кибер-стеблем, питается солнечными панелями.", link: "mode/62.html" },
    { name: "Tropicana", id: "sakura_63", icon: "flowers/sakura-63.png", description: "Цветок из будущего, доставлен через временной разлом.", link: "mode/63.html" },
    { name: "Oxalis", id: "sakura_64", icon: "flowers/sakura-64.png", description: "Сакура с AR-фильтром, видна только в очках.", link: "mode/64.html" },
    { name: "Indigo", id: "sakura_65", icon: "flowers/sakura-65.png", description: "Неоновая мутация, лепестки излучают тепло.", link: "mode/65.html" },
    { name: "Floravelle", id: "sakura_66", icon: "flowers/sakura-66.png", description: "Цветок с чипом слежения, создан для шпионажа.", link: "mode/66.html" },
    { name: "Solivine", id: "sakura_67", icon: "flowers/sakura-67.png", description: "Синтетическая сакура, растет в подводных фермах.", link: "mode/67.html" },
    { name: "Barbia", id: "sakura_68", icon: "flowers/sakura-68.png", description: "Растение из зоны радиации, лепестки слегка токсичны.", link: "mode/68.html" },
    { name: "Eclipsia", id: "sakura_69", icon: "flowers/sakura-69.png", description: "Сакура с голографическим ядром, мигает в ночи.", link: "mode/69.html" },
    { name: "Noctivis", id: "sakura_70", icon: "flowers/sakura-70.png", description: "Цветок с черного рынка, украден у корпораций.", link: "mode/70.html" },
    { name: "Aurivelle", id: "sakura_71", icon: "flowers/sakura-71.png", description: "Неоновая сакура, растет в тени неоновых вывесок.", link: "mode/71.html" },
    { name: "Violet Iris", id: "sakura_72", icon: "flowers/sakura-72.png", description: "Растение с микро-дисплеем, показывает время.", link: "mode/72.html" },
    { name: "Aubrieta", id: "sakura_73", icon: "flowers/sakura-73.png", description: "Сакура из зоны электромагнитных помех.", link: "mode/73.html" },
    { name: "Nectarium", id: "sakura_74", icon: "flowers/sakura-74.png", description: "Цветок с кибер-лепестками, режет воздух.", link: "mode/74.html" },
    { name: "Lunaris", id: "sakura_75", icon: "flowers/sakura-75.png", description: "Синтетический вид, создан для фильтрации воды.", link: "mode/75.html" },
    { name: "Twilight", id: "sakura_76", icon: "flowers/sakura-76.png", description: "Сакура с датчиком звука, реагирует на шум.", link: "mode/76.html" },
    { name: "Floraven", id: "sakura_77", icon: "flowers/sakura-77.png", description: "Растение из разрушенного города, выжило в хаосе.", link: "mode/77.html" },
    { name: "Hibiscus", id: "sakura_78", icon: "flowers/sakura-78.png", description: "Неоновая сакура, цветет под ритмы синти.", link: "mode/78.html" },
    { name: "Aster", id: "sakura_79", icon: "flowers/sakura-79.png", description: "Цветок с памятью о прошлом, хранит старые данные.", link: "mode/79.html" },
    { name: "Azure", id: "sakura_80", icon: "flowers/sakura-80.png", description: "Сакура из зоны нулевого шума, растет в тишине.", link: "mode/80.html" },
    { name: "Verdania", id: "sakura_81", icon: "flowers/sakura-81.png", description: "Растение с кибер-корой, питается энергией.", link: "mode/81.html" },
    { name: "Celestara", id: "sakura_82", icon: "flowers/sakura-82.png", description: "Цветок из будущего, доставлен через квантовый скачок.", link: "mode/82.html" },
    { name: "Primrose", id: "sakura_83", icon: "flowers/sakura-83.png", description: "Сакура с AR-проекцией, видна в виртуале.", link: "mode/83.html" },
    { name: "Fabulous", id: "sakura_84", icon: "flowers/sakura-84.png", description: "Неоновая мутация, лепестки излучают свет.", link: "mode/84.html" },
    { name: "Violet", id: "sakura_85", icon: "flowers/sakura-85.png", description: "Цветок с чипом памяти, хранит звуки города.", link: "mode/85.html" },
    { name: "Ghostia", id: "sakura_86", icon: "flowers/sakura-86.png", description: "Синтетическая сакура, растет в подводных куполах.", link: "mode/86.html" },
    { name: "Meadowlyn", id: "sakura_87", icon: "flowers/sakura-87.png", description: "Растение из зоны радиации, слегка ядовито.", link: "mode/87.html" },
    { name: "Marigold", id: "sakura_88", icon: "flowers/sakura-88.png", description: "Сакура с голографическими лепестками, мигает.", link: "mode/88.html" },
    { name: "Floris", id: "sakura_89", icon: "flowers/sakura-89.png", description: "Цветок с черного рынка, украден у якудза.", link: "mode/89.html" },
    { name: "Orchidra", id: "sakura_90", icon: "flowers/sakura-90.png", description: "Неоновая сакура, растет в тени дронов.", link: "mode/90.html" },
    { name: "Vanilla", id: "sakura_91", icon: "flowers/sakura-91.png", description: "Растение с микро-экраном, показывает погоду.", link: "mode/91.html" },
    { name: "Hawaii", id: "sakura_92", icon: "flowers/sakura-92.png", description: "Сакура из зоны электромагнитных волн.", link: "mode/92.html" },
    { name: "Lanceolata", id: "sakura_93", icon: "flowers/sakura-93.png", description: "Цветок с кибер-лепестками, режет тени.", link: "mode/93.html" },
    { name: "Flameris", id: "sakura_94", icon: "flowers/sakura-94.png", description: "Синтетический вид, создан для очистки воздуха.", link: "mode/94.html" },
    { name: "Cosmea", id: "sakura_95", icon: "flowers/sakura-95.png", description: "Сакура с датчиком света, реагирует на неон.", link: "mode/95.html" },
    { name: "Peach Perfect", id: "sakura_96", icon: "flowers/sakura-96.png", description: "Растение из разрушенного мира, выжило в пепле.", link: "mode/96.html" },
    { name: "Zephyra", id: "sakura_97", icon: "flowers/sakura-97.png", description: "Неоновая сакура, цветет под звуки дождя.", link: "mode/97.html" },
    { name: "Seraphina", id: "sakura_98", icon: "flowers/sakura-98.png", description: "Цветок с памятью о старом мире, хранит образы.", link: "mode/98.html" },
    { name: "False Bird", id: "sakura_99", icon: "flowers/sakura-99.png", description: "Последняя сакура из коллекции, символ будущего.", link: "mode/99.html" },
    { name: "Sylvaris", id: "sakura_100", icon: "flowers/sakura-100.png", description: "Вершина эволюции: сакура, рожденная из кода и стали.", link: "mode/100.html" }
];

// Отображение списка цветков
function displayFlowers() {
    const flowerList = document.getElementById("flowerList");
    flowerList.innerHTML = "";

    flowers.forEach(flower => {
        const flowerDiv = document.createElement("div");
        flowerDiv.className = "flower-item";

        const flowerHeader = document.createElement("div");
        flowerHeader.className = "flower-header";
        flowerHeader.innerHTML = `
            <img src="${flower.icon}" class="flower-icon" alt="${flower.name}">
            <span class="flower-name">${flower.name}</span>
        `;

        const flowerDetails = document.createElement("div");
        flowerDetails.className = "flower-details";
        flowerDetails.innerHTML = `
            <p>${flower.description}</p>
            <a href="${flower.link}" onclick="Telegram.WebApp.openLink('${flower.link}'); return false;">Поиск на маркете</a>
        `;

        flowerHeader.addEventListener("click", (e) => {
            e.stopPropagation();
            Telegram.WebApp.HapticFeedback.impactOccurred('medium'); // Тактильный отклик при раскрытии
            flowerDetails.classList.toggle("show");
        });

        flowerDiv.appendChild(flowerHeader);
        flowerDiv.appendChild(flowerDetails);
        flowerList.appendChild(flowerDiv);
    });
}

// Эффект матрицы
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = "アカサタナハマヤラワガザダバパイキシチニヒミリヰギジヂビピウクスツヌフムユルグズヅブプエケセテネヘメレヱゲゼデベペオコソトノホモヨロヲゴゾドボポ";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";
const alphabet = katakana + latin + nums;

const fontSize = Math.max(12, Math.min(16, window.innerWidth / 80)); // Адаптивный размер шрифта
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(0);

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

// Обновление матрицы при изменении размеров
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const newColumns = Math.floor(canvas.width / fontSize);
    if (newColumns !== columns) {
        drops.length = newColumns;
        for (let i = 0; i < newColumns; i++) {
            drops[i] = drops[i] || 0;
        }
    }
});

setInterval(drawMatrix, 50);

// Настройка кнопки "Назад"
Telegram.WebApp.BackButton.onClick(() => {
    Telegram.WebApp.close();
});
Telegram.WebApp.BackButton.show();

// Обработка параметров запуска Telegram
const initData = Telegram.WebApp.initDataUnsafe;
if (initData && initData.start_param) {
    console.log("Start param:", initData.start_param);
    // Можно добавить логику обработки параметров запуска
}
