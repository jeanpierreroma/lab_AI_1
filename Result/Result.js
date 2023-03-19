let noviceScore;
let begginerScore;
let competentScore;
let proficientScore;
let expertScore;
let myName;

if(localStorage.getItem("myKey_1") != null) {
    noviceScore = JSON.parse(localStorage.getItem("myKey_1"))
}
if(localStorage.getItem("myKey_2") != null) {
    begginerScore = JSON.parse(localStorage.getItem("myKey_2"))
}
if(localStorage.getItem("myKey_3") != null) {
    competentScore = JSON.parse(localStorage.getItem("myKey_3"))
}
if(localStorage.getItem("myKey_4") != null) {
    proficientScore = JSON.parse(localStorage.getItem("myKey_4"))
}
if(localStorage.getItem("myKey_5") != null) {
    expertScore = JSON.parse(localStorage.getItem("myKey_5"))
}
if(localStorage.getItem("myKey_for_name") != null) {
    myName = JSON.parse(localStorage.getItem("myKey_for_name"))
}

let maxx = Math.max(noviceScore, begginerScore, competentScore, proficientScore, expertScore)

let image = document.getElementById('myImg')
let forCaption = ""
let forAbout = ""

switch (maxx) {
    case noviceScore:
        forCaption = "Новачок"
        forAbout = "Новачки дуже переживають за свою успішність; їх досвіду замало, щоб повести їх у правильному напрямку і вони не знають чи їх вчинки будуть правильними. Новачки зазвичай не хочуть вчитися, зате хочуть досягти миттєвого результату. Вони не знають як реагувати на помилки і тому легко збиваються з пантелику, коли щось іде “не так”. Зате вони можуть бути досить ефективними, коли їм дати набір контекстно незалежних правил у формі “у випадку ХХХ, роби УУУ”. Іншими словами їм необхідний рецепт або алгоритм."
        image.src = "../images/Novice.png"
        break
    case begginerScore:
        forCaption = "Твердий початківець"
        forAbout = "Тверді початківці починають вже потроху відступати від фіксованих правил. Вони можуть спробувати якісь задачі самостійно, але у них все ще є труднощі із усуненням проблем, які виникають. Початківці можуть скористатись порадами в правильному контексті, врахувавши свій досвід подібних ситуацій, але ледь-ледь. І хоч вони вже починають формулювати якісь загальні принципи, вони все ще не бачать “всієї картини”. Якщо спробувати надати їм ширший контекст – вони відмахнуться від нього як від недоречного.";
        image.src = "../images/Advanced begginer.png"
        break
    case competentScore:
        forCaption = "Компетентний"
        forAbout = "Компетентні будують правильні моделі проблемної області та ефективно нею користуються. Здатні усувати проблеми з якими раніше не стикались. Про людей на цьому рівні часто кажуть, що вони “мають ініціативу”. Вони можуть вчити новачків і не задовбують експертів. Щоправда їм ще бракує досвіду аби вдало розставити пріоритети при рішенні задач. Власне кажучи, саме з цього рівня людину можна вже назвати інженером – компетентні вирішують задачі, а не працюють за алгоритмом."
        image.src = "../images/Competent.png"
        break
    case proficientScore:
        forCaption = "Досвідчений"
        forAbout = "Досвідченим необхідна “повна картина” проблемної області, адже вони хочуть розуміти весь концепт. Вони роблять значний прорив в рамках моделі братів Дрейфус, адже постійно оцінюють виконану роботу і переглядають свої підходи, аби наступного разу бути ще ефективнішими. Вони також можуть навчатись використовуючи чужий досвід. І найголовніше – вони завжди беруть до уваги контекст задачі. Якщо повернутись до програмування, то чудовий приклад ілюстрації – це використання патернів проектування. Лише досвідчені використовують їх виключно там де треба, а не бездумно і повсюдно, бо це круто і модно."
        image.src = "../images/Proficient.png"
        break
    case expertScore:
        forCaption = "Експерт"
        forAbout = "Експерти – основне джерело знань та інформації в будь-якій сфері. Вони безперестану шукають все кращі і кращі методи роботи. Вони завжди застосовують весь свій велетенський багаж знань у правильному контексті. Вони пишуть книжки, статті та проводять семінари. Це сучасні чаклуни. Експерти керуються інтуїцією . Доктор Хаус, який з одного погляду на пацієнта (або взагалі на його медичну картку) міг поставити діагноз – типовий приклад експерта. Експерти працюють за допомогою несвідомого “порівняння з взірцем” (“pattern matching”) у базі свого досвіду. От тільки проблема в тому, що функція “порівняння з взірцем” асинхронна і знаходиться в частині мозку, яка не підконтрольна свідомості."
        image.src = "../images/Expert.png"
        break
}

document.getElementById('name').textContent = `Вітаємо ${myName}, ви - ${forCaption}`;
document.getElementById('information').textContent = forAbout;

let ctx = document.getElementById('myChart');
let myChart = new Chart(ctx.getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['Новачок', 'Твердий початківець', 'Компетентний', 'Досвідчений', 'Експерт'],
        datasets: [{
            label: 'Бали',
            data: [
                noviceScore,
                begginerScore,
                competentScore,
                proficientScore,
                expertScore
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


