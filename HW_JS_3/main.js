//- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
let arr_user = [{name: "Vasya", age: 21, car: true}, {name: "Tanya", age: 31, car: false}, {
    name: "Bob",
    age: 45,
    car: true,
    job: true
}, {name: "Katya", age: 20, car: false, skils: "js", job: true, student: true}, {
    name: "Olivia", age: 21, job: "shop_asistant",
    car: false, student: false
}];
let student = {name: "Natalia", age: 21, skils: ["java", "c++", "js"], car: false, student: true};
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
for (let elementArr of arr_user) {
    for (let innerArr in elementArr) {
        console.log(innerArr);
    }
}
for (let key in student) {
    console.log(key);
}
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
console.log(Object.keys(student));
for (let elementArr of arr_user) {
    console.log(Object.keys(elementArr));
}
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
let cars_0 = [{
    make: "Ford",
    model: "Explorer",
    year: 2008,
    color: "red",
    fuel: "gas",
    mpg: 18
},
    {
        make: "BMW",
        model: "X5",
        year: "2008",
        color: "green",
        fuel: "benzina",
        mpg: 20
    },
    {
        make: "BMW",
        model: "X4",
        year: "2005",
        color: "silver",
        fuel: "benzina",
        mpg: 30
    },
    {
        make: "Toyota",
        model: "Xhghuijo5",
        year: "2017",
        color: "blue",
        fuel: "benzina",
        mpg: 10
    },
    {
        make: "ford",
        model: "ford_focus",
        year: "2008",
        color: "black",
        fuel: "benzina and gas",
        mpg: 90
    }, {
        make: "opel",
        model: "opel_vectra",
        year: "2006",
        color: "green",
        fuel: "benzina and gas",
        mpg: 40
    }, {
        make: "BMW",
        model: "X3",
        year: "2006",
        color: "green",
        fuel: "benzina",
        mpg: 35
    }, {
        make: "BMW",
        model: "X5",
        year: "2009",
        color: "green",
        fuel: "benzina and gas",
        mpg: 50
    },
    {
        make: "peugeot",
        model: "none_4",
        year: "2018",
        color: "white",
        fuel: "benzina and gas",
        mpg: 60
    },
    {
        make: "peugeot",
        model: "universal",
        year: "2011",
        color: "pink",
        fuel: "benzina and gas",
        mpg: 100
    }];
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let cities = [{
    name: "Lviv",
    country: "Ukraine",
    region: "Королівсто Володимерії"// якщо яне помиляюся
}, {
    name: "Harkiv",
    country: "Ukraine",
    region: "Слобіцька Україна"
},
    {
        name: "Barselona",
        contry: "Spain",
        region: "Kataloniya"
    }];
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let cars = [{
    make: "Ford",
    model: "Explorer",
    year: 2008,
    color: "red",
    fuel: "gas",
    mpg: 18,
    driver: {name: "Nick", old: 20, pol: "male", years_driving: 2}
},
    {
        make: "BMW",
        model: "X5",
        year: "2008",
        color: "green",
        fuel: "benzina",
        mpg: 20,
        driver: {name: "Nicker", old: 23, pol: "male", years_driving: 3}
    },
    {
        make: "BMW",
        model: "X4",
        year: "2005",
        color: "silver",
        fuel: "benzina",
        mpg: 30,
        driver: {name: "OLiviya", old: 30, pol: "female", years_driving: 10}
    },
    {
        make: "Toyota",
        model: "Xhghuijo5",
        year: "2017",
        color: "blue",
        fuel: "benzina",
        mpg: 10,
        driver: {name: "Nazar", old: 33, pol: "male", years_driving: 13}
    },
    {
        make: "ford",
        model: "ford_focus",
        year: "2008",
        color: "black",
        fuel: "benzina and gas",
        mpg: 90,
        driver: {name: "Yana", old: 23, pol: "female", years_driving: 0.5}
    }, {
        make: "opel",
        model: "opel_vectra",
        year: "2006",
        color: "green",
        fuel: "benzina and gas",
        mpg: 40,
        driver: {name: "Yan", old: 27, pol: "male", years_driving: 7}
    }, {
        make: "BMW",
        model: "X3",
        year: "2006",
        color: "green",
        fuel: "benzina",
        mpg: 35,
        driver: {name: "Oleh", old: 23, pol: "male", years_driving: 3}
    }, {
        make: "BMW",
        model: "X5",
        year: "2009",
        color: "green",
        fuel: "benzina and gas",
        mpg: 50,
        driver: {name: "Marta", old: 24, pol: "female", years_driving: 4}
    },
    {
        make: "peugeot",
        model: "none_4",
        year: "2018",
        color: "white",
        fuel: "benzina and gas",
        mpg: 60,
        driver: {name: "Bob", old: 40, pol: "male", years_driving: 20}
    },
    {
        make: "peugeot",
        model: "universal",
        year: "2011",
        color: "pink",
        fuel: "benzina and gas",
        mpg: 100,
        driver: {name: "Diana", old: 52, pol: "female", years_driving: 32}
    }];
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
let i = 0;
while (i < cars_0.length) {
    console.log(cars_0[i]);
    i++;
}
while (i < cars.length) {
    console.log(cars[i]);
    i++;
}
while (i < cities.length) {
    console.log(cities[i]);
    i++;
}
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
for (let i = 0; i < cars_0.length; i++) {
    console.log(cars_0[i]);
}
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
for (let itemArr of cars_0) {
    console.log(itemArr);
}
for (let itemArr of cars) {
    console.log(itemArr);
}
for (let itemArr of cities) {
    console.log(itemArr);
}
// - взять объекты из задания 1 и превратить каждый в json.
let k = JSON.stringify(arr_user);
// - взять json из задания 11 и превратить их обратно в объекты.
console.log(JSON.parse(k));
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
for (let i = 0; i < cars_0.length; i++) {
    let k_0 = JSON.stringify(cars_0[i]);
    console.log(k_0);
}
for (let i = 0; i < cars.length; i++) {
    let k_1 = JSON.stringify(cars[i]);
    console.log(k_1);
}
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
let k_Arr = [];
for (let i = 0; i < cities.length; i++) {
    let k_2 = JSON.stringify(cities[i]);
    k_Arr[i] = JSON.parse(k_2);
    if (k_Arr.length === cities.length) {
        console.log(k_Arr);
    }
}
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
let pol = [{name: "Andrew", skils: ["js", "java"]}, {name: "Diana", skils: ["python", "js"]}];
for (let i = 0; i < pol.length; i++) {
    for (let k = 0; k < pol[i].skils.length; k++) {
        console.log(pol[i].skils[k]);
    }
}
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
let k_4 = [];
for (let i of pol) {
    k_4.push(i.skils);
    if (k_4.length === pol.length) {
        console.log(k_4)
    }
    ;
}
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {
    name: 'petya',
    age: 30,
    status: true,
    skills: ['java', 'js', 'html']
}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {
    name: 'olya',
    age: 28,
    status: false,
    skills: ['java', 'js']
}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
for (let i of users) {
    for (let k in i) {
        console.log(i[k]);
    }
}
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
let divka = document.createElement("div");

for (let i of users) {
    for (let k in i) {
        document.write(divka = i[k] + " ");
    }
}
document.createElement("br");
let s = JSON.stringify(users);
let obj = JSON.parse(s);
for (let i = 0; i < obj.length; i++) {
    let div = document.createElement('div');
    div.className = obj[i].name;
    div.innerText = obj[i].name + " " + obj[i].age + " " + obj[i].status + " " + obj[i].skills;
    document.querySelector('body').appendChild(div);
}
document.createElement("br");

let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {
    id: 2,
    name: 'petya',
    age: 30,
    status: true
}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {
    user_id: 1,
    country: 'Ukraine',
    city: 'Ternopil'
}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
for (const objElement of usersWithId) {
    for (const objElement1 of citiesWithId){
        if(objElement.id===objElement1.user_id){
            objElement.adress=(objElement1);
        }

    }

}console.log(usersWithId);
