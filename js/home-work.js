// //EX-7
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// apartment.area = 60;
// apartment.rooms = 5;
// apartment.location = {
//   country: 'Ямайка',
//   city: 'Кингстон',
// };
// console.log(apartment);

////////////////////////////////////////////////////////////////

// //EX-8
// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Пиши код ниже этой строки
//   name,
//   price,
//   image,
//   tags,

//   // Пиши код выше этой строки
// };

////////////////////////////////////////////////////////////////////////////////////////////////

/*
ex-9
Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, 
имена которых хранятся в переменных emailInputName и passwordInputName.

Значением свойства email должна быть строка 'henry.carter@aptmail.com', а значением свойства password - 
строка 'jqueryismyjam'.
* */

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Пиши код ниже этой строки
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
//   // Пиши код выше этой строки
// };
// console.log(credentials);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * ex-10
 *все его ключи, а в массив values все значения его свойств.
 */
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const apart in apartment) {
//   keys.push(apart);
//   values.push(apartment[apart]);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * ex-11
 * Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
 * 
 * const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Просторная квартира в центре';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Пиши код ниже этой строки
 if (apartment.hasOwnProperty(key)) {
    keys.push(key);
  values.push(apartment[key]);
  }
  

  // Пиши код выше этой строки
}
 */
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * ex-12
 *
 *Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в 
 параметре object. Используй переменную propCount для хранения количества свойств объекта.
 */

// function countProps(object) {
//   let propCount = Object.keys(object).length;
//   console.log(propCount);
//   return propCount;
// }

// countProps({}); // возвращает 0.
// countProps({ name: 'Mango', age: 2 }); // возвращает 2.
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // возвращает 3.

/**EX-13
 *
 * Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys
 * массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств. */

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**EX-14
 *
 *Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.
 function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
  // Пиши код выше этой строки
}
 */

// function countProps(object) {
//   // Пиши код ниже этой строки
//   return Object.keys(object).length;
//   // Пиши код выше этой строки
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////

/**EX-16
 * Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника,
 * а значение свойства это зарплата. Функция должна рассчитать общую сумму
 * зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.
 */

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//   const arrOfSalaries = Object.values(salaries);

//   for (const salary of arrOfSalaries) {
//     totalSalary += salary;
//   }
//   // Пиши код выше этой строки
//   return totalSalary;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/**EX-17
 *Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, 
 а в массив rgbColors значения свойств rgb из всех объектов массива colors.
 */

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**EX-18
 *
 *Напиши функцию getProductPrice(productName) которая принимает один параметр productName - 
 название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и 
 возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.
 */

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Пиши код выше этой строки
// }

// getProductPrice('Радар'); //1300
// getProductPrice('Захват'); //1200
// getProductPrice('Сканер'); //2700
// getProductPrice('Двигатель'); //null

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * EX-19
 *
 *Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. 
 Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. 
 Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
 */

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const valuesOfPropeties = [];

//   if (Object.keys(products[0]).includes(propName)) {
//     for (const product of products) {
//       valuesOfPropeties.push(product[propName]);
//     }
//   }

//   console.log(valuesOfPropeties);
//   return valuesOfPropeties;
//   // Пиши код выше этой строки
// }

// getAllPropValues('name'); //['Радар', 'Сканер', 'Дроид', 'Захват'].
// getAllPropValues('price'); //[1300, 2700, 400, 1200]
// getAllPropValues('quantity'); // возвращает [4, 3, 7, 9].
// getAllPropValues('category'); // []

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * EX-20
 *
 * Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
 * Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.
 */

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }

//   console.log(totalSum);
//   return 0;
//   // Пиши код выше этой строки
// }

// calculateTotalPrice('Бластер'); // возвращает 0.
// calculateTotalPrice('Радар'); // возвращает 5200.
// calculateTotalPrice('Дроид'); // возвращает 2800.
// calculateTotalPrice('Захват'); // возвращает 10800.
// calculateTotalPrice('Сканер'); // возвращает 8100.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**ex-21
 * Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта
 * highTemperatures.
 * const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const yesterday = highTemperatures.yesterday;
const today = highTemperatures.today;
const tomorrow = highTemperatures.tomorrow;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;
 */

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const { yesterday, today, tomorrow } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * ex-22
 * 
 * Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта
 * highTemperatures. Задай значение по умолчанию для icon - строку
 * 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
 * 
 * const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const yesterday = highTemperatures.yesterday;
const today = highTemperatures.today;
const tomorrow = highTemperatures.tomorrow;
const icon = highTemperatures.icon;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;
 */

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * ex-23
 * Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации
 * свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку
 * 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
 *
 * const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const highYesterday = highTemperatures.yesterday;
const highToday = highTemperatures.today;
const highTomorrow = highTemperatures.tomorrow;
const highIcon = highTemperatures.icon;

// Пиши код выше этой строки
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
 */

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * ex-24
 *Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

 */

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const { hex, rgb } of colors) {
//   //   const { hex, rgb } = color;
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
/**
 * EX-25
 *Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными 
 иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. 
 Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку 
 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки

const highToday = forecast.today.high;
const lowToday = forecast.today.low;
const todayIcon = forecast.today.icon;

const highTomorrow = forecast.tomorrow.high;
const lowTomorrow = forecast.tomorrow.low;
const tomorrowIcon = forecast.tomorrow.icon;

 */

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * ex-26
 *Паттерн «Объект настроек»

 Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации 
 свойств объекта forecast.

 // Пиши код ниже этой строки
function calculateMeanTemperature(forecast) {
  const todayLow = forecast.today.low;
  const todayHigh = forecast.today.high;
  const tomorrowLow = forecast.tomorrow.low;
  const tomorrowHigh = forecast.tomorrow.high;

const { 
    today{low: todayLow, high: todayHigh},
    tomorrow{low: tomorrowLow, high: tomorrowHigh},

} = calculateMeanTemperature;

  // Пиши код выше этой строки
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
 */

// Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * EX-27
 * 
 * Операция spread при передаче аргументов
 *
 *В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() 
 и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

 const scores = [89, 64, 42, 17, 93, 51, 26];
// Пиши код ниже этой строки
const bestScore = scores;
const worstScore = scores;

 */

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * EX-28
 * 
 * Операция spread при создании нового массива
 *
 *Операция spread позволяет создать копию массива или «склеить» произвольное количество массивов в один новый. 
 Раньше для этого использовали методы slice() и concat(), но операция распыления позволяет сделать тоже самое в более 
 краткой форме.

const temps = [14, -4, 25, 8, 11];

// Это точная, но независимая копия массива temps
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]

//делаем один массив из двух
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]

Задание
В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. 
Используя распыление дополни код так, чтобы:

В переменной allScores хранился массив всех результатов от первой до третьей группы.
В переменной bestScore был самый высокий общий балл.
В переменной worstScore был самый низкий общий балл.

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Пиши код ниже этой строки
const allScores = [];
const bestScore = allScores;
const worstScore = allScores;
 */

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * EX-29
 *
 * В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной 
 * defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной 
 * overrideSettings.

Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить 
переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Пиши код ниже этой строки
const finalSettings = {};
 */

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = { ...defaultSettings, ...overrideSettings };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * EX-30
 *
 *Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

text - текст задачи.
category - категория задачи.
priority - приоритет задачи.
Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно 
быть свойство completed, значение которого хранится в одноимённой локальной переменной.

В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут 
отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, 
хранящиеся в одноимённых локальных переменных.
 */

// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
//   const newData = {
//     category,
//     priority,
//     completed,
//     ...data,
//   };
//   return newData;
//   // Пиши код выше этой строки
// }

// console.log(makeTask({}));
// console.log(
//   makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }),
// );

// makeTask({}); //возвращает { category: 'Общее', priority: 'Обычный', completed: false }.
// makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }); // возвращает { category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор', completed: false }.
// makeTask({ category: 'Финансы', text: 'Забрать проценты' }); // возвращает { category: 'Финансы', priority: 'Обычный', text: 'Забрать проценты', completed: false }.
// makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }); // возвращает { category: 'Общее', priority: 'Низкий', text: 'Выбрать шампунь', completed: false }.
// makeTask({ text: 'Купить хлеб' }); // возвращает { category: 'Общее', priority: 'Обычный', text: 'Купить хлеб', completed: false }.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * EX-31
 *
 * Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов,
 * считала и возвращала их сумму.
 */

// function add(...args) {
//   let sumOfArgs = 0;
//   for (const arg of args) {
//     sumOfArgs += arg;
//   }
//   console.log(sumOfArgs);
//   return sumOfArgs;

//   // Пиши код выше этой строки
// }

// add(15, 27); // возвращает 42.
// add(12, 4, 11, 48); // возвращает 75.
// add(32, 6, 13, 19, 8); // возвращает 78.
// add(74, 11, 62, 46, 12, 36); // возвращает 241.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * EX-31
 *
 *Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, 
 чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть 
 первым параметром функции.

 // Пиши код ниже этой строки
function addOverNum(...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
  // Пиши код выше этой строки
}
 */

// // Пиши код ниже этой строки
// function addOverNum(...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > args[0]) total += arg;
//   }
//   console.log(total);
//   return total;
//   // Пиши код выше этой строки
// }

// addOverNum(50, 15, 27); // возвращает 0.
// addOverNum(10, 12, 4, 11, 48, 10, 8); // возвращает 71.
// addOverNum(15, 32, 6, 13, 19, 8); // возвращает 51.
// addOverNum(20, 74, 11, 62, 46, 12, 36); // возвращает 218.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * EX-33
 *
 *Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, 
 а остальные аргументы будут просто числами.

Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, 
начиная со второго, которые есть в массиве первого аргумента.

Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в 
массиве первого аргумента.

// Пиши код ниже этой строки
function findMatches() {
  const matches = []; // Не изменяй эту строку

  // Пиши код выше этой строки
  return matches;
}

 */

// // Пиши код ниже этой строки
// function findMatches(...args) {
//   const matches = []; // Не изменяй эту строку
//   const firstParam = args[0]; //тут массив

//   for (let i = 1; i < args.length; i += 1) {
//     if (firstParam.includes(args[i])) {
//       matches.push(args[i]);
//     }
//   }
//   // Пиши код выше этой строки
//   console.log(matches);
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7); // возвращает [1, 2].
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2); // возвращает [17, 89, 2].
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41); // возвращает [24, 9, 41].
// findMatches([63, 11, 8, 29], 4, 7, 16); // возвращает [].

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * EX-35
 *
 *Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. 
 Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.

 const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
	
	
	
    // Пиши код выше этой строки
  },
};
 */

// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строк
//     const indexOfDelete = .books.indexOf(oldName);

//     console.log(.books[indexOfDelete]);

// .books.splice(indexOfDelete, 1, newName);
//     console.log(.books);
//     return .books;

//     // Пиши код выше этой строки
//   },
// };

// Объявлена переменная bookShelf.
// Значение переменной bookShelf это объект.
// Значение свойства bookShelf.updateBook это метод объекта.

// bookShelf.updateBook('Мгла', 'Хроники подземелий'); // значение свойства books это массив ['Последнее королевство', 'Хроники подземелий', 'Страж снов'].

// bookShelf.updateBook('Последнее королевство', 'Дюна'); // значение свойства books это массив ['Дюна', 'Мгла', 'Страж снов'].

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * EX-37
 *
 *Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

 const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  // Пиши код выше этой строки
};
 */

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions() {
//     console.log(.potions);
//     return .potions;
//   },
//   // Пиши код выше этой строки
// };

//Объявлена переменная atTheOldToad.
//Значение переменной atTheOldToad это объект.
//Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
//Значение свойства atTheOldToad.getPotions это метод объекта.
// atTheOldToad.getPotions(); // возвращает ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * EX-38
 *
 *Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

 const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
    // Пиши код ниже этой строки
    // Пиши код выше этой строки
  },
};
 */

//  const atTheOldToad = {
//    potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//    addPotion(potionName) {
//      // Пиши код ниже этой строки
//      .potions.push(potionName);
//      // Пиши код выше этой строки
//    },
//  };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * EX-39
 *
 *Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

 const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    // Пиши код выше этой строки
  },
};
 */

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     const indexOfDelete = .potions.indexOf(potionName);
// .potions.splice(indexOfDelete, 1);
//     console.log(.potions);
//     return .potions;
//     // Пиши код выше этой строки
//   },
// };

// atTheOldToad.removePotion('Дыхание дракона'); // в свойстве potions будет массив ['Зелье скорости', 'Каменная кожа'].
// // atTheOldToad.removePotion('Зелье скорости'); // в свойстве potions будет массив ['Каменная кожа'].

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * EX-40
 *
 *Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, 
в массиве зелий в свойстве potions.

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
 
    // Пиши код выше этой строки
  },
};
 */

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//     const indexOfDelete = .potions.indexOf(oldName);
// .potions.splice(indexOfDelete, 1, newName);
//     console.log(.potions);
//     return .potions;
//     // Пиши код выше этой строки
//   },
// };

// atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'); // в свойстве potions будет массив ['Зелье скорости', 'Полиморф', 'Каменная кожа'].
// // atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка'); // в свойстве potions будет массив ['Зелье скорости', 'Полиморф', 'Невидимка'].

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *EX-41

 Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими 
 характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.
 {
  name: 'Дыхание дракона',
  price: 700
}
Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return .potions;
  },
  addPotion(potionName) {
    if (.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    .potions.push(potionName);
  },
  removePotion(potionName) {
    const potionIndex = .potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Зелья ${potionName} нет в инвентаре!`;
    }

    .potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = .potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Зелья ${oldName} нет в инвентаре!`;
    }

    .potions.splice(potionIndex, 1, newName);
  },
  // Пиши код выше этой строки
};
 */

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки

//   //Возвращает значение свойства potions.
//   getPotions() {
//     return this.potions;
//   },

//   // добавляет зелье newPotion (уже объект) в массив в свойстве potions.
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;
//     }

//     this.potions.push(potionName);
//   },

//   // удаляет объект зелья с именем potionName из массива в свойстве potions.
//   removePotion(potionName) {
//     // const potionIndex = this.potions.indexOf(potionName);

//     // if (potionIndex === -1) {
//     //   return `Зелья ${potionName} нет в инвентаре!`;
//     // }

//     for (let i = 0; i < this.potions.length; i += 1) {
//       const item = this.potions[i];

//       if (potionName === item.name) {
//         this.potions.splice(i, 1); //на этом индексе удали один элемент
//       }
//     }
//   },

//   // обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       console.log(`Зелья ${oldName} нет в инвентаре!`);
//       return `Зелья ${oldName} нет в инвентаре!`;
//     }

//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (oldName === this.potions[i].name) {
//         this.potions[i].name = newName;
//       }
//     }
//   },
// };

// console.log(atTheOldToad.getPotions());

// atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });
// console.log(atTheOldToad.potions);

// console.log(atTheOldToad.potions);////////////////почему  выводит 'Зелье силы' если функция идет позже??????
// atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 });
// console.log(atTheOldToad.potions);/////////////////

//исходный обьект
// console.log(atTheOldToad.potions);
// atTheOldToad.removePotion('Зелье скорости');
// console.log(atTheOldToad.potions);

// .atTheOldToad
//   .updatePotionName('Каменная кожа', 'Зелье неуязвимости');
// console.log(atTheOldToad.potions);
/**
 * BASE   
 *  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
 */

// atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'); // в свойстве potions будет массив[{ name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 }].
