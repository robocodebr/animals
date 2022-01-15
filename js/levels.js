let levels = [
  {
    name: 'justify-content 1',
    instructions: '<p>За допомогою властивості <code>justify-content</code>, яка вирівнює елементи по горизонталі поставте звірят на свої місця</p>',
    board: 'g',
    style: {'justify-content': 'flex-end'},
    before: "#cat {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 2',
    instructions: '<p>Скористайся <code>justify-content</code> ще раз, та допоможи звірятами потрапити на свої місця.</p>',
    board: 'gy',
    style: {'justify-content': 'center'},
    before: ".animals {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 1',
    instructions: '<p>Скористайся <code>align-items</code> для допомоги звірятам дістатися до нижньої частини екрану. Ця CSS властивість вирівнює елементи вертикально</p>',
    board: 'gyr',
    style: {'align-items': 'flex-end'},
    before: ".animals {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 3',
    instructions: '<p>Допоможи трьом звірятам опинитися на своїх місцях, використовуючи <code>justify-content</code>. Але цього разу між ними є багато простору.</p><p>Якщо ти забув можливі значення властивості, ти можеш навести на назву властивості для підказки. Спробуй навести на <code>justify-content</code>.</p>',
    board: 'gyr',
    style: {'justify-content': 'space-around'},
    before: ".animals {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 4',
    instructions: '<p>Тепер крайніх звірят віднесло до границь, збільшуючи простір між ними. Використовуй <code>justify-content</code></p>',
    board: 'gyr',
    style: {'justify-content': 'space-between'},
    before: ".animals {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 2',
    instructions: '<p>Скеруй звірят до центру, використовуючи разом <code>justify-content</code> та <code>align-items</code>.</p>',
    board: 'g',
    style: {'justify-content': 'center', 'align-items': 'center'},
    before: ".animals {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 3',
    instructions: '<p>Звірята знову мають перетнути екран, цього разу навколо них є чималий простір. Поєднай разом <code>justify-content</code> та <code>align-items</code>, щоб досягти результату.</p>',
    board: 'gyr',
    style: {'justify-content': 'space-around', 'align-items': 'flex-end'},
    before: ".animals {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 1',
    instructions: '<p>Звірята мають бути в тому ж порядку що і їх відображення. Використовуй <code>flex-direction</code> - ця CSS властивість визначає напрямок елементів в контейнері</p>',
    board: 'gyr',
    style: {'flex-direction': 'row-reverse'},
    before: ".animals {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 2',
    instructions: '<p>Допоможіть звірятам потрапити на свої вертикальні місця, використавши <code>flex-direction</code>. Ця CSS властивість визначає напрямок елементів в контейнері:</p>',
    board: 'gyr',
    style: {'flex-direction': 'column'},
    before: ".animals {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 3',
    instructions: '<p>Допоможи звірятам потрапити на своє місця. Хоча може здатися, що вони вже на своїх місцях, але лише використав разом <code>flex-direction</code> та <code>justify-content</code> ти зможеш їх вірно розмістити.</p><p>Зверни увагу на те, що коли встановлюєш зворотній напрямок рядків або стовпчиків, початок і кінець також міняються місцями.</p>',
    board: 'gyr',
    style: {'flex-direction': 'row-reverse', 'justify-content': 'flex-end'},
    before: ".animals {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 4',
    instructions: '<p>Допоможи звірятам потрапити на своє місце за допомогою <code>flex-direction</code> та <code>justify-content</code>.</p><p>Зауваж, коли напрямок обрано стовпчиком, то <code>justify-content</code> впливає на вертикальне вирівнювання, а <code>align-items</code> - на горизонтальне.</p>',
    board: 'gyr',
    style: {'flex-direction': 'column', 'justify-content': 'flex-end'},
    before: ".animals {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 5',
    instructions: '<p>Допоможи звірятам знайти своє місце скориставшись <code>flex-direction</code> та <code>justify-content</code>.</p>',
    board: 'gyr',
    style: {'flex-direction': 'column-reverse', 'justify-content': 'space-between'},
    before: ".animals {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 6',
    instructions: '<p>Допоможи звірятам знайти своє листя латаття скориставшись <code>flex-direction</code>, <code>justify-content</code>, та <code>align-items</code>.</p>',
    board: 'gyr',
    style: {'flex-direction': 'row-reverse', 'justify-content': 'center', 'align-items': 'flex-end'},
    before: ".animals {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'order 1',
    instructions: '<p>Іноді зміни напрямку показу елементів контейнеру не достатньо. У таких випадках ми можемо застосувати властивість <code>order</code> до потрібних елементів. Типове значення властивості в елементів дорівнює 0, але ми можемо змінити значення на додатне або відʼємне ціле число.</p><p>Використай властивість <code>order</code> для розташування звірят на своїх місцях.</p>',
    board: 'gyr',
    selector: '> :nth-child(2)',
    classes: {'.animals, #background': 'wrap'},
    style: {'order': '2'},
    before: ".animals {\n  display: flex;\n}\n\n.yellow {\n",
    after: "}"
  },
  {
    name: 'order 2',
    instructions: '<p>Скористайся властивістю <code>order</code>, щоб всадити червоне звірят на свії місця.</p>',
    board: 'gggrg',
    selector: '> :nth-child(4)',
    classes: {'.animals, #background': 'wrap'},
    style: {'order': '-1'},
    before: ".animals {\n  display: flex;\n}\n\n.red {\n",
    after: "}"
  },
  {
    name: 'align-self 1',
    instructions: '<p>Ще одна властивість, котру ти зможеш застосувати до окремого елементу - це <code>align-self</code>. Ця властивість набуває тих самих значень, що й <code>align-items</code>.</p>',
    board: 'ggygg',
    selector: '> :nth-child(3)',
    style: {'align-self': 'flex-end'},
    before: ".animals {\n  display: flex;\n  align-items: flex-start;\n}\n\n.fox {\n",
    after: "}"
  },
  {
    name: 'align-self 2',
    instructions: '<p>Скомбінуй <code>order</code> з <code>align-self</code>, щоб допомогти жабенятам дістатися свого призначення.</p>',
    board: 'ygygg',
    selector: '> .yellow',
    style: {'align-self': 'flex-end', 'order': '2'},
    before: ".animals {\n  display: flex;\n  align-items: flex-start;\n}\n\n. {\n",
    after: "}"
  },
  {
    name: 'flex-wrap 1',
    instructions: '<p>Ой ні! Всі звірята опинилися стиснутими в одному рядку. Розсади їх по місцях, за допомогою властивості<code>flex-wrap</code>, яка набуває таких значень:</p><ul><li><code>nowrap</code>: Кожен елемент буде розташований один за одним в одному рядку. Ширина елементів встановлюється автоматично, щоб вміститись в рядок.</li><li><code>wrap</code>: Елементи переносятся до наступного рядка.</li><li><code>wrap-reverse</code>: Елементи переносятся до наступного рядка у зворотньому порядку.</li></ul>',
    board: 'ygggggr',
    style: {'flex-wrap': 'wrap'},
    before: ".animals {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-wrap 2',
    instructions: '<p>Допоможи армії звірів сформувати три однакові стовпці, за допомогою комбінації властивостей <code>flex-direction</code> та <code>flex-wrap</code>.</p>',
    board: 'gggggrrrrryyyyy',
    style: {'flex-direction': 'column', 'flex-wrap': 'wrap'},
    before: ".animals {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-flow 1',
    instructions: '<p>Дві властивості <code>flex-direction</code> та <code>flex-wrap</code> найчастіше використовуються разом, тому існує скорочена властивість <code>flex-flow</code>, що обʼєднує їх. Ця властивість приймає одне значення кожної з властивостей, які відокремлені пробілом.</p><p>Наприклад, ви можете застосувати <code>flex-flow: row wrap</code> для встановлення рядків та перенесення їх.</p><p>Спробуй скористатися <code>flex-flow</code> для повторення попереднього рівня.</p>',
    board: 'gggggrrrrryyyyy',
    style: {'flex-flow': 'column wrap'},
    before: ".animals {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-content 1',
    instructions: '<p>Маєш скористатися властивістю <code>align-content</code>, щоб вказати як декілька рядків мають бути розташовані один до одного.</p><p>Це може збивати з пантелику, але <code>align-content</code> визначає інтервал поміж рядками, в той час як <code>align-items</code> визначає, як елементи буде вирівняно в контейнері в цілому. Коли у вас лише один рядок,  <code>align-content</code> не має ніякого ефекту.</p>',
    board: 'ggggggggggggggg',
    classes: {'.animals, #background': 'wrap'},
    style: {'align-content': 'flex-start'},
    before: ".animals {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 2',
    instructions: '<p> Скористайся <code>align-content</code>, щоб скерувати звірят на свої місця.</p>',
    board: 'ggggggggggggggg',
    classes: {'.animals, #background': 'wrap'},
    style: {'align-content': 'flex-end'},
    before: ".animals {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 3',
    instructions: '<p>Скористайся комбінацією властивостей <code>flex-direction</code> та <code>align-content</code>, щоб розсадити звірят на свої місця.</p>',
    board: 'rgggyrgggyrgggy',
    classes: {'.animals, #background': 'wrap'},
    style: {'flex-direction': 'column-reverse', 'align-content': 'center'},
    before: ".animals {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  }
];

let levelWin = {
  name: 'win',
  instructions: '<p>Ти виграв!</p>',
  board: 'gyrgyrgyrgyrgyrgyrgyrgyrg',
  classes: {'.animals, #background': 'wrap'},
  style: {},
  before: ".animals {\n  display: flex;\n",
  after: "}"
};
