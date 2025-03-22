// Инициализация Telegram Web App
window.Telegram.WebApp.ready();

// Список из 100 цветков с уникальными описаниями
const flowers = [
    { name: "Flowey", id: "sakura_1", icon: "flowers/sakura-1.png", description: "Неоновая искра из трущоб Токио 2087, питается энергией забытых сетей.", link: "https://wildsakura.example.com/flower-1" },
    { name: "Zap Aster", id: "sakura_2", icon: "flowers/sakura-2.png", description: "Гибридный цветок, выращенный в лабораториях Neo-Osaka, излучает слабый радиосигнал.", link: "https://wildsakura.example.com/flower-2" },
    { name: "Sunflower", id: "sakura_3", icon: "flowers/sakura-3.png", description: "Дикий бутон, найденный в руинах старого дата-центра, пахнет озоном.", link: "https://wildsakura.example.com/flower-3" },
    { name: "Carnation", id: "sakura_4", icon: "flowers/sakura-4.png", description: "Квантовый эксперимент: лепестки мерцают в двух состояниях одновременно.", link: "https://wildsakura.example.com/flower-4" },
    { name: "Dog Flower", id: "sakura_5", icon: "flowers/sakura-5.png", description: "Редкий штамм из зоны отчуждения Kyoto-Grid, устойчив к кислотным дождям.", link: "https://wildsakura.example.com/flower-5" },
    { name: "Wilted", id: "sakura_6", icon: "flowers/sakura-6.png", description: "Цифровой цветок, взломанный хакерами из Shibuya, шепчет код на ветру.", link: "https://wildsakura.example.com/flower-6" },
    { name: "Meower", id: "sakura_7", icon: "flowers/sakura-7.png", description: "Синтетическая сакура, созданная для украшения орбитальных станций.", link: "https://wildsakura.example.com/flower-7" },
    { name: "Monsoon", id: "sakura_8", icon: "flowers/sakura-8.png", description: "Продукт генной мутации, светится в темноте благодаря нано-ботам.", link: "https://wildsakura.example.com/flower-8" },
    { name: "Heartbeat", id: "sakura_9", icon: "flowers/sakura-9.png", description: "Реликт из прошлого, восстановленный с помощью древнего ИИ-флориста.", link: "https://wildsakura.example.com/flower-9" },
    { name: "Sakura", id: "sakura_10", icon: "flowers/sakura-10.png", description: "Био-механический гибрид, лепестки покрыты микросхемами.", link: "https://wildsakura.example.com/flower-10" },
    { name: "Blazing Dusk", id: "sakura_11", icon: "flowers/sakura-11.png", description: "Цветок из подпольного рынка Neo-Tokyo, торгуется за крипто-чипы.", link: "https://wildsakura.example.com/flower-11" },
    { name: "Snowdrop", id: "sakura_12", icon: "flowers/sakura-12.png", description: "Экспериментальный штамм, выращен под куполом мегаполиса.", link: "https://wildsakura.example.com/flower-12" },
    { name: "Bull Eye", id: "sakura_13", icon: "flowers/sakura-13.png", description: "Неоновая сакура, питаемая энергией уличных фонарей.", link: "https://wildsakura.example.com/flower-13" },
    { name: "Big Bang", id: "sakura_14", icon: "flowers/sakura-14.png", description: "Растение из зоны радиации, лепестки слегка фосфоресцируют.", link: "https://wildsakura.example.com/flower-14" },
    { name: "Pixel Bloom", id: "sakura_15", icon: "flowers/sakura-15.png", description: "Прототип цветка для колонизации Марса, адаптирован к вакууму.", link: "https://wildsakura.example.com/flower-15" },
    { name: "Loves Or Not", id: "sakura_16", icon: "flowers/sakura-16.png", description: "Сакура из виртуального сада, оцифрована в 2075 году.", link: "https://wildsakura.example.com/flower-16" },
    { name: "Fire Bloom", id: "sakura_17", icon: "flowers/sakura-17.png", description: "Генетический артефакт, найден в архивах корпорации Arasaka.", link: "https://wildsakura.example.com/flower-17" },
    { name: "Dark Neo", id: "sakura_18", icon: "flowers/sakura-18.png", description: "Цветок с встроенным чипом, транслирует данные в облако.", link: "https://wildsakura.example.com/flower-18" },
    { name: "Bubblia", id: "sakura_19", icon: "flowers/sakura-19.png", description: "Дикая сакура, проросшая сквозь бетон заброшенного небоскреба.", link: "https://wildsakura.example.com/flower-19" },
    { name: "Venus Flytrap", id: "sakura_20", icon: "flowers/sakura-20.png", description: "Неоновая мутация, лепестки пульсируют в ритме города.", link: "https://wildsakura.example.com/flower-20" },
    { name: "Shake It", id: "sakura_21", icon: "flowers/sakura-21.png", description: "Сакура из зоны нулевого сигнала, растет без технологий.", link: "https://wildsakura.example.com/flower-21" },
    { name: "Icebound", id: "sakura_22", icon: "flowers/sakura-22.png", description: "Цветок с памятью, хранит данные о прошлом владельце.", link: "https://wildsakura.example.com/flower-22" },
    { name: "Myrtella", id: "sakura_23", icon: "flowers/sakura-23.png", description: "Растение-хакер, взламывает ближайшие дроны.", link: "https://wildsakura.example.com/flower-23" },
    { name: "Jellybud", id: "sakura_24", icon: "flowers/sakura-24.png", description: "Синтетический цветок, разработан для фильтрации воздуха.", link: "https://wildsakura.example.com/flower-24" },
    { name: "Wildflower", id: "sakura_25", icon: "flowers/sakura-25.png", description: "Сакура из черного рынка, лепестки — контрабанда.", link: "https://wildsakura.example.com/flower-25" },
    { name: "Luminosia", id: "sakura_26", icon: "flowers/sakura-26.png", description: "Цветок с ИИ, предсказывает погоду в мегаполисе.", link: "https://wildsakura.example.com/flower-26" },
    { name: "Ping Blossom", id: "sakura_27", icon: "flowers/sakura-27.png", description: "Редкий вид, выращен на крыше заброшенного синто-храма.", link: "https://wildsakura.example.com/flower-27" },
    { name: "Pokerface", id: "sakura_28", icon: "flowers/sakura-28.png", description: "Неоновая сакура, подключена к городской энергосети.", link: "https://wildsakura.example.com/flower-28" },
    { name: "Glitch", id: "sakura_29", icon: "flowers/sakura-29.png", description: "Цветок-призрак, виден только в AR-очках.", link: "https://wildsakura.example.com/flower-29" },
    { name: "Savanna", id: "sakura_30", icon: "flowers/sakura-30.png", description: "Био-гибрид, питается отходов киберимплантов.", link: "https://wildsakura.example.com/flower-30" },
    { name: "Party Time", id: "sakura_31", icon: "flowers/sakura-31.png", description: "Сакура из зоны карантина, излучает слабый ток.", link: "https://wildsakura.example.com/flower-31" },
    { name: "Shimeria", id: "sakura_32", icon: "flowers/sakura-32.png", description: "Цветок с лазерными лепестками, режет тьму.", link: "https://wildsakura.example.com/flower-32" },
    { name: "Spotty Leo", id: "sakura_33", icon: "flowers/sakura-33.png", description: "Растение из капсулы времени, открытой в 2099.", link: "https://wildsakura.example.com/flower-33" },
    { name: "Peony", id: "sakura_34", icon: "flowers/sakura-34.png", description: "Сакура-дрон, парит над руинами города.", link: "https://wildsakura.example.com/flower-34" },
    { name: "Dark Loader", id: "sakura_35", icon: "flowers/sakura-35.png", description: "Цветок с памятью о прошлом, проецирует голограммы.", link: "https://wildsakura.example.com/flower-35" },
    { name: "Windy", id: "sakura_36", icon: "flowers/sakura-36.png", description: "Неоновая сакура, растет в тени рекламных щитов.", link: "https://wildsakura.example.com/flower-36" },
    { name: "Morning Sun", id: "sakura_37", icon: "flowers/sakura-37.png", description: "Растение из виртуальной реальности, стало материальным.", link: "https://wildsakura.example.com/flower-37" },
    { name: "Yellow Poppy", id: "sakura_38", icon: "flowers/sakura-38.png", description: "Сакура с микрочипом, записывает звуки улиц.", link: "https://wildsakura.example.com/flower-38" },
    { name: "White Peony", id: "sakura_39", icon: "flowers/sakura-39.png", description: "Цветок из забытого сада под куполом.", link: "https://wildsakura.example.com/flower-39" },
    { name: "Red Poppy", id: "sakura_40", icon: "flowers/sakura-40.png", description: "Синтетический вид, создан для фильмов в VR.", link: "https://wildsakura.example.com/flower-40" },
    { name: "Silveria", id: "sakura_41", icon: "flowers/sakura-41.png", description: "Сакура из зоны нулевого света, питается тьмой.", link: "https://wildsakura.example.com/flower-41" },
    { name: "Bronzula", id: "sakura_42", icon: "flowers/sakura-42.png", description: "Цветок-киборг, лепестки из углеродного волокна.", link: "https://wildsakura.example.com/flower-42" },
    { name: "Goldensia", id: "sakura_43", icon: "flowers/sakura-43.png", description: "Растение из будущего, доставлено через портал.", link: "https://wildsakura.example.com/flower-43" },
    { name: "Party Bloom", id: "sakura_44", icon: "flowers/sakura-44.png", description: "Сакура с датчиками, следит за воздухом мегаполиса.", link: "https://wildsakura.example.com/flower-44" },
    { name: "Plumeria", id: "sakura_45", icon: "flowers/sakura-45.png", description: "Неоновая мутация, цветет только ночью.", link: "https://wildsakura.example.com/flower-45" },
    { name: "Hellebore", id: "sakura_46", icon: "flowers/sakura-46.png", description: "Цветок с чипом слежения, создан для шпионажа.", link: "https://wildsakura.example.com/flower-46" },
    { name: "Gerbera", id: "sakura_47", icon: "flowers/sakura-47.png", description: "Сакура с AR-лепестками, видна в дополненной реальности.", link: "https://wildsakura.example.com/flower-47" },
    { name: "Brunnera", id: "sakura_48", icon: "flowers/sakura-48.png", description: "Растение с кибер-корнями, питается данными.", link: "https://wildsakura.example.com/flower-48" },
    { name: "Petunia", id: "sakura_49", icon: "flowers/sakura-49.png", description: "Цветок из заброшенного космопорта, пахнет топливом.", link: "https://wildsakura.example.com/flower-49" },
    { name: "Hydrangea", id: "sakura_50", icon: "flowers/sakura-50.png", description: "Синтетическая сакура, создана для подводных городов.", link: "https://wildsakura.example.com/flower-50" },
    { name: "Nightshade", id: "sakura_51", icon: "flowers/sakura-51.png", description: "Неоновая сакура, растет в тени кибер-фабрик.", link: "https://wildsakura.example.com/flower-51" },
    { name: "Clivia", id: "sakura_52", icon: "flowers/sakura-52.png", description: "Цветок с голографическими лепестками, мигает в темноте.", link: "https://wildsakura.example.com/flower-52" },
    { name: "Allamanda", id: "sakura_53", icon: "flowers/sakura-53.png", description: "Растение из зоны электромагнитных бурь.", link: "https://wildsakura.example.com/flower-53" },
    { name: "Bumblebee", id: "sakura_54", icon: "flowers/sakura-54.png", description: "Сакура с металлическими лепестками, режет ветер.", link: "https://wildsakura.example.com/flower-54" },
    { name: "Geranium", id: "sakura_55", icon: "flowers/sakura-55.png", description: "Цветок из черного рынка Neo-Kobe, редкий экземпляр.", link: "https://wildsakura.example.com/flower-55" },
    { name: "Aetheris", id: "sakura_56", icon: "flowers/sakura-56.png", description: "Синтетический вид, разработан для симуляций.", link: "https://wildsakura.example.com/flower-56" },
    { name: "Anemone", id: "sakura_57", icon: "flowers/sakura-57.png", description: "Сакура с датчиком движения, реагирует на прохожих.", link: "https://wildsakura.example.com/flower-57" },
    { name: "Hybrid", id: "sakura_58", icon: "flowers/sakura-58.png", description: "Растение из разрушенного купола, выжило вопреки.", link: "https://wildsakura.example.com/flower-58" },
    { name: "Dahlia", id: "sakura_59", icon: "flowers/sakura-59.png", description: "Неоновая сакура, цветет под звуки техно.", link: "https://wildsakura.example.com/flower-59" },
    { name: "Hollyhock", id: "sakura_60", icon: "flowers/sakura-60.png", description: "Цветок с памятью о старом Токио, проецирует тени.", link: "https://wildsakura.example.com/flower-60" },
    { name: "Lemon Queen", id: "sakura_61", icon: "flowers/sakura-61.png", description: "Сакура из зоны нулевого доступа, растет в тайне.", link: "https://wildsakura.example.com/flower-61" },
    { name: "Crimsonia", id: "sakura_62", icon: "flowers/sakura-62.png", description: "Растение с кибер-стеблем, питается солнечными панелями.", link: "https://wildsakura.example.com/flower-62" },
    { name: "Tropicana", id: "sakura_63", icon: "flowers/sakura-63.png", description: "Цветок из будущего, доставлен через временной разлом.", link: "https://wildsakura.example.com/flower-63" },
    { name: "Oxalis", id: "sakura_64", icon: "flowers/sakura-64.png", description: "Сакура с AR-фильтром, видна только в очках.", link: "https://wildsakura.example.com/flower-64" },
    { name: "Indigo", id: "sakura_65", icon: "flowers/sakura-65.png", description: "Неоновая мутация, лепестки излучают тепло.", link: "https://wildsakura.example.com/flower-65" },
    { name: "Floravelle", id: "sakura_66", icon: "flowers/sakura-66.png", description: "Цветок с чипом слежения, создан для шпионажа.", link: "https://wildsakura.example.com/flower-66" },
    { name: "Solivine", id: "sakura_67", icon: "flowers/sakura-67.png", description: "Синтетическая сакура, растет в подводных фермах.", link: "https://wildsakura.example.com/flower-67" },
    { name: "Barbia", id: "sakura_68", icon: "flowers/sakura-68.png", description: "Растение из зоны радиации, лепестки слегка токсичны.", link: "https://wildsakura.example.com/flower-68" },
    { name: "Eclipsia", id: "sakura_69", icon: "flowers/sakura-69.png", description: "Сакура с голографическим ядром, мигает в ночи.", link: "https://wildsakura.example.com/flower-69" },
    { name: "Noctivis", id: "sakura_70", icon: "flowers/sakura-70.png", description: "Цветок с черного рынка, украден у корпораций.", link: "https://wildsakura.example.com/flower-70" },
    { name: "Aurivelle", id: "sakura_71", icon: "flowers/sakura-71.png", description: "Неоновая сакура, растет в тени неоновых вывесок.", link: "https://wildsakura.example.com/flower-71" },
    { name: "Violet Iris", id: "sakura_72", icon: "flowers/sakura-72.png", description: "Растение с микро-дисплеем, показывает время.", link: "https://wildsakura.example.com/flower-72" },
    { name: "Aubrieta", id: "sakura_73", icon: "flowers/sakura-73.png", description: "Сакура из зоны электромагнитных помех.", link: "https://wildsakura.example.com/flower-73" },
    { name: "Nectarium", id: "sakura_74", icon: "flowers/sakura-74.png", description: "Цветок с кибер-лепестками, режет воздух.", link: "https://wildsakura.example.com/flower-74" },
    { name: "Lunaris", id: "sakura_75", icon: "flowers/sakura-75.png", description: "Синтетический вид, создан для фильтрации воды.", link: "https://wildsakura.example.com/flower-75" },
    { name: "Twilight", id: "sakura_76", icon: "flowers/sakura-76.png", description: "Сакура с датчиком звука, реагирует на шум.", link: "https://wildsakura.example.com/flower-76" },
    { name: "Floraven", id: "sakura_77", icon: "flowers/sakura-77.png", description: "Растение из разрушенного города, выжило в хаосе.", link: "https://wildsakura.example.com/flower-77" },
    { name: "Hibiscus", id: "sakura_78", icon: "flowers/sakura-78.png", description: "Неоновая сакура, цветет под ритмы синти.", link: "https://wildsakura.example.com/flower-78" },
    { name: "Aster", id: "sakura_79", icon: "flowers/sakura-79.png", description: "Цветок с памятью о прошлом, хранит старые данные.", link: "https://wildsakura.example.com/flower-79" },
    { name: "Azure", id: "sakura_80", icon: "flowers/sakura-80.png", description: "Сакура из зоны нулевого шума, растет в тишине.", link: "https://wildsakura.example.com/flower-80" },
    { name: "Verdania", id: "sakura_81", icon: "flowers/sakura-81.png", description: "Растение с кибер-корой, питается энергией.", link: "https://wildsakura.example.com/flower-81" },
    { name: "Celestara", id: "sakura_82", icon: "flowers/sakura-82.png", description: "Цветок из будущего, доставлен через квантовый скачок.", link: "https://wildsakura.example.com/flower-82" },
    { name: "Primrose", id: "sakura_83", icon: "flowers/sakura-83.png", description: "Сакура с AR-проекцией, видна в виртуале.", link: "https://wildsakura.example.com/flower-83" },
    { name: "Fabulous", id: "sakura_84", icon: "flowers/sakura-84.png", description: "Неоновая мутация, лепестки излучают свет.", link: "https://wildsakura.example.com/flower-84" },
    { name: "Violet", id: "sakura_85", icon: "flowers/sakura-85.png", description: "Цветок с чипом памяти, хранит звуки города.", link: "https://wildsakura.example.com/flower-85" },
    { name: "Ghostia", id: "sakura_86", icon: "flowers/sakura-86.png", description: "Синтетическая сакура, растет в подводных куполах.", link: "https://wildsakura.example.com/flower-86" },
    { name: "Meadowlyn", id: "sakura_87", icon: "flowers/sakura-87.png", description: "Растение из зоны радиации, слегка ядовито.", link: "https://wildsakura.example.com/flower-87" },
    { name: "Marigold", id: "sakura_88", icon: "flowers/sakura-88.png", description: "Сакура с голографическими лепестками, мигает.", link: "https://wildsakura.example.com/flower-88" },
    { name: "Floris", id: "sakura_89", icon: "flowers/sakura-89.png", description: "Цветок с черного рынка, украден у якудза.", link: "https://wildsakura.example.com/flower-89" },
    { name: "Orchidra", id: "sakura_90", icon: "flowers/sakura-90.png", description: "Неоновая сакура, растет в тени дронов.", link: "https://wildsakura.example.com/flower-90" },
    { name: "Vanilla", id: "sakura_91", icon: "flowers/sakura-91.png", description: "Растение с микро-экраном, показывает погоду.", link: "https://wildsakura.example.com/flower-91" },
    { name: "Hawaii", id: "sakura_92", icon: "flowers/sakura-92.png", description: "Сакура из зоны электромагнитных волн.", link: "https://wildsakura.example.com/flower-92" },
    { name: "Lanceolata", id: "sakura_93", icon: "flowers/sakura-93.png", description: "Цветок с кибер-лепестками, режет тени.", link: "https://wildsakura.example.com/flower-93" },
    { name: "Flameris", id: "sakura_94", icon: "flowers/sakura-94.png", description: "Синтетический вид, создан для очистки воздуха.", link: "https://wildsakura.example.com/flower-94" },
    { name: "Cosmea", id: "sakura_95", icon: "flowers/sakura-95.png", description: "Сакура с датчиком света, реагирует на неон.", link: "https://wildsakura.example.com/flower-95" },
    { name: "Peach Perfect", id: "sakura_96", icon: "flowers/sakura-96.png", description: "Растение из разрушенного мира, выжило в пепле.", link: "https://wildsakura.example.com/flower-96" },
    { name: "Zephyra", id: "sakura_97", icon: "flowers/sakura-97.png", description: "Неоновая сакура, цветет под звуки дождя.", link: "https://wildsakura.example.com/flower-97" },
    { name: "Seraphina", id: "sakura_98", icon: "flowers/sakura-98.png", description: "Цветок с памятью о старом мире, хранит образы.", link: "https://wildsakura.example.com/flower-98" },
    { name: "False Bird", id: "sakura_99", icon: "flowers/sakura-99.png", description: "Последняя сакура из коллекции, символ будущего.", link: "https://wildsakura.example.com/flower-99" }
    { name: "Sylvaris", id: "sakura_100", icon: "flowers/sakura-100.png", description: "Последняя сакура из коллекции, символ будущего.", link: "https://wildsakura.example.com/flower-100" }
];

// Отображение списка цветков
function displayFlowers() {
    const flowerList = document.getElementById("flowerList");
    flowerList.innerHTML = "";

    flowers.forEach(flower => {
        const flowerDiv = document.createElement("div");
        flowerDiv.className = "flower-item";

        // Заголовок с иконкой
        const flowerHeader = document.createElement("div");
        flowerHeader.className = "flower-header";
        flowerHeader.innerHTML = `
            <img src="${flower.icon}" class="flower-icon" alt="${flower.name}">
            <span>${flower.name}</span>
        `;

        // Детали (описание + ссылка)
        const flowerDetails = document.createElement("div");
        flowerDetails.className = "flower-details";
        flowerDetails.innerHTML = `
            <p>${flower.description}</p>
            <a href="${flower.link}" target="_blank" onclick="Telegram.WebApp.openLink('${flower.link}'); return false;">Узнать больше</a>
        `;

        // Обработчик клика для раскрытия
        flowerHeader.onclick = () => {
            flowerDetails.classList.toggle("show");
        };

        flowerDiv.appendChild(flowerHeader);
        flowerDiv.appendChild(flowerDetails);
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
