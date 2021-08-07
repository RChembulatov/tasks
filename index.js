const objectFromTask1 = {
  result: {
    categories: {
      Аксессуары: ["Рюкзаки", "Сумки", "Часы наручные"],
      Белье: [
        "Боди",
        "Бордшорты",
        "Бюстгальтеры",
        "Бюстье",
        "Колготки",
        "Лифы для купальника",
        "Монокини",
        "Носки",
        "Плавки",
        "Пояса для чулок",
        "Раздельные купальники",
        "Слитные купальники",
        "Трусы",
      ],
      "Белье для малышей": ["Носки для малышей"],
      Красота: ["Щетки косметические"],
      Одежда: [
        "Блузки",
        "Блузки-боди",
        "Бомберы",
        "Брюки",
        "Ветровки",
        "Водолазки",
        "Джеггинсы",
        "Джемперы",
        "Джинсы",
        "Жакеты",
        "Жилеты",
        "Капри",
        "Кардиганы",
        "Комбинезоны",
        "Костюмы",
        "Косухи",
        "Кофты",
        "Куртки",
        "Леггинсы",
        "Лонгсливы",
        "Ночные сорочки",
        "Пальто",
        "Парки",
        "Пиджаки",
        "Пижамы",
        "Платья",
        "Плащи",
        "Пуловеры",
        "Пуховики",
        "Рубашки",
        "Сарафаны",
        "Свитеры",
        "Свитшоты",
        "Толстовки",
        "Топы",
        "Туники",
        "Футболки",
        "Футболки-поло",
        "Халаты домашние",
        "Худи",
        "Шорты",
        "Юбки",
      ],
    },
  },
};

//Получаем преобразованный массив для первого задания
function taskOne() {
  //для удобства
  const categoriesFromObj = objectFromTask1.result.categories;

  //Цикл по объекту
  let arrayResultForOneTask = [];
  for (let value in categoriesFromObj) {
    //Цикл по children
    const childrenArray = [];
    categoriesFromObj[value].forEach((child) => {
      //Формируем объект
      const objectChild = {
        children_value: generateId(child),
        children_label: child,
        parent_key: generateId(value),
      };
      //Заносим в массив
      childrenArray.push(objectChild);
    });

    //Формируем объект
    const subcategories = {
      parent_value: generateId(value),
      parent_label: value,
      children: childrenArray,
    };
    //Заносим в массив
    arrayResultForOneTask.push(subcategories);
  }
  return arrayResultForOneTask;
}

//Генерируем Id
function generateId(value = "") {
  let id = "";
  for (let i = 0; i < value.length; i++) {
    id += value[i].charCodeAt(0);
  }
  return id;
}

console.log('taskOne: ', taskOne());

// =====================================

const objectFromTask2 = {
  result: {
    total: [
      {
        date: "2020-07-29",
        quantity: 392,
        price: 19322,
      },
      {
        date: "2020-07-30",
        quantity: 437,
        price: 19356,
      },
      {
        date: "2020-07-31",
        quantity: 337,
        price: 11168,
      },
      {
        date: "2020-08-01",
        quantity: 179,
        price: 9590,
      },
      {
        date: "2020-08-02",
        quantity: 269,
        price: 10368,
      },
      {
        date: "2020-08-03",
        quantity: 253,
        price: 7433,
      },
      {
        date: "2020-08-04",
        quantity: 147,
        price: 6778,
      },
    ],
    table_1: [
      {
        date: "2020-07-29",
        quantity: 368,
        price: 1816,
      },
      {
        date: "2020-07-30",
        quantity: 407,
        price: -3684,
      },
      {
        date: "2020-07-31",
        quantity: 324,
        price: 0,
      },
      {
        date: "2020-08-01",
        quantity: 169,
        price: 1147,
      },
      {
        date: "2020-08-02",
        quantity: 259,
        price: 3060,
      },
      {
        date: "2020-08-03",
        quantity: 242,
        price: 70,
      },
      {
        date: "2020-08-04",
        quantity: 140,
        price: 515,
      },
    ],
    table_2: [
      {
        date: "2020-07-29",
        quantity: 24,
        price: 17506,
      },
      {
        date: "2020-07-30",
        quantity: 30,
        price: 23040,
      },
      {
        date: "2020-07-31",
        quantity: 13,
        price: 11168,
      },
      {
        date: "2020-08-01",
        quantity: 10,
        price: 8443,
      },
      {
        date: "2020-08-02",
        quantity: 10,
        price: 7308,
      },
      {
        date: "2020-08-03",
        quantity: 11,
        price: 7363,
      },
      {
        date: "2020-08-04",
        quantity: 7,
        price: 6263,
      },
    ],
  },
};

//Получаем преобразованный массив для второго задания
function taskTwo() {
  const arrayResultForTwoTask = [];
  for (let value in objectFromTask2.result) {
    const arrayForChild = objectFromTask2.result[value];

    //Формируем ключи для объекта
    const table = value
    const dates = [];
    const quantities = [];
    const prices = [];

    arrayForChild.forEach((item) => {
      //Заносим в массивы элементы
      dates.push(item.date);
      quantities.push(item.quantity);
      prices.push(item.price);
    });

    //Формируем объект
    const tableObject = {
      table, dates, quantities, prices
    };

    //Заносим в массив
    arrayResultForTwoTask.push(tableObject)
  }

  return arrayResultForTwoTask
}

console.log('taskTwo: ', taskTwo());

