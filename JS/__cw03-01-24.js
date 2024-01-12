// - Написати функцію createNewUser(), яка буде створювати та повертати об'єкт newUser.
// - При виклику функція повинна запитати у імені, що викликає, і прізвище.
// - Використовуючи дані, введені користувачем, створити об'єкт newUser з властивостями firstName та lastName.
// - Додати в об'єкт newUser метод getLogin(), який повертатиме першу літеру імені користувача, з'єднану з прізвищем користувача, все в нижньому регістрі (наприклад, `Ivan Kravchenko → ikravchenko`).
// - Створити користувача за допомогою функції createNewUser(). Викликати у користувача функцію getLogin(). Вивести у консоль результат виконання функції.

// - Візьміть виконане завдання(створена вами функція `createNewUser()`) та доповніть її наступним функціоналом:
//    1. При виклику функція повинна запитати в дату народження (текст у форматі dd.mm.yyyy`) і зберегти її в полі `birthday.
//    2. Створити метод getAge() який повертатиме скільки користувачеві років.
//    3. Створити метод getPassword(), який повертатиме першу літеру імені користувача у верхньому регістрі, поєднану з прізвищем (у нижньому регістрі) та роком народження. (Наприклад, `Ivan Kravchenko 13.03.1992 → Ikravchenko1992`).
// - Вивести в консоль результат роботи функції createNewUser(), а також функцій getAge() та getPassword() створеного об'єкта.

class CreateNewUser {
  constructor(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
  }
  getLogin() {
    return `${this.firstName[0]}${this.lastName}`.toLowerCase();
  }
  getAge() {
    return new Date().getFullYear() - this.birthday.split(".")[2];
  }
  getPassword() {
    return `${this.firstName[0].toUpperCase()}${this.lastName.toLowerCase()}${
      this.birthday.split(".")[2]
    }`;
  }
}
const newUser = new CreateNewUser("Ivan", "Ivanov", "31.12.1983");
// console.log(newUser.getLogin());
// console.log(newUser.getAge());
// console.log(newUser.getPassword());

// Домашка : Створити клас Animal та розширюючі його класи Dog, Cat, Horse.
// Клас Animal містить змінні food, location і методи makeNoise, eat, sleep. Метод makeNoise, наприклад, може виводити на консоль "Така тварина спить".
// Dog, Cat, Horse перевизначають методи makeNoise, eat.
// Додайте змінні до класів Dog, Cat, Horse, що характеризують лише цих тварин.
// Створіть клас Ветеринар, у якому визначте метод void treatAnimal(Animal animal). Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
// У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. У циклі надсилайте їх на прийом до ветеринара.

class Animal {
  constructor(food, location) {
    this.food = food;
    this.location = location;
  }
  makeNoise() {
    console.log("Ця тварина робить такі звуки");
  }
  eat() {
    console.log("Ця тварина їсть");
  }
  sleep() {
    console.log("Ця тварина спить");
  }
}

class Dog extends Animal {
  constructor(food, location, color) {
    super(food, location);
    this.color = color;
  }
  makeNoise() {
    console.log(`Ця тварина гавкає`);
  }
  eat() {
    console.log(`Улюблена їжа ${this.food}`);
  }
}

class Cat extends Animal {
  constructor(food, location, age) {
    super(food, location);
    this.age = age;
  }
  makeNoise() {
    console.log(`Ця тварина мяукає`);
  }
  eat() {
    console.log(`Улюблена їжа ${this.food}`);
  }
}

class Horse extends Animal {
  constructor(food, location, speed) {
    super(food, location);
    this.speed = speed;
  }
  makeNoise() {
    console.log(`Ця тварина ігогокає`);
  }
  eat() {
    console.log(`Улюблена їжа ${this.food}`);
  }
}
const dog = new Dog("кістка", "будка", "чорний");
const cat = new Cat("риба", "квартира", "7");
const horse = new Horse("просо", "ферма", "30");

class Ветеринар {
  constructor() {}
  treatAnimal(animal) {
    console.log(`Їжа: ${animal.food}`);
    console.log(`Місце: ${animal.location}`);
  }
}
const ветеринар = new Ветеринар();
const main = function () {
  const animals = [dog, cat, horse];
  animals.forEach((animal) => ветеринар.treatAnimal(animal));
};
ветеринар.treatAnimal(dog);
ветеринар.treatAnimal(cat);
ветеринар.treatAnimal(horse);
