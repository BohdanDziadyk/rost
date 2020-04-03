// - створити функцію яка виводить масив
function arrOut() {
  let arr=[];
  for(let i=0;i<arguments.length;i++){
      arr[i]=arguments[i];
  }
  return arr;
}
console.log(arrOut(3,5,9,70,48));
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
function arrRandom(a) {
    let b=arrOut();
        for(let i=0;i<a;i++){
          b[i]=Math.random()*(100-20)+20;
        }
    return b;
}
console.log(arrRandom(5));
// - створити функцію яка приймає три числа та виводить та повертає найменьше.
function numberMin(a,b,c) {
     if((a<b)&&(a<c)){
         return a;
     }else {
         if((b<c)&&(b<a)){
             return b;
         }else {
             return c;
         }
     }
}
console.log(numberMin(5,10,1));
// - створити функцію яка приймає три числа та виводить та повертає найбільше.
function numberMax(a,b,c) {
if((a>b)&&(a>c)){
         return a;
     }else {
         if((b>c)&&(b>a)){
             return b;
         }else {
             return c;
         }
     }
}
console.log(numberMax(5,10,1));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function arrMin() {
    let arr=arrOut();
    for(let i=0;i<arguments.length;i++){
        arr[i]=arguments[i];
    }
    console.log(Math.max.apply(null,arr));
    return Math.min.apply(null,arr);
}
console.log(arrMin(1,4,-1,-4,50,30,100));
// - створити функцію яка повертає найбільше число з масиву
function arrMax() {
    let arr=arrOut();
    for(let i=0;i<arguments.length;i++){
        arr[i]=arguments[i];
    }
    return Math.max.apply(null,arr);
}
// - створити функцію яка повертає найменьше число з масиву
function arrMin_0() {
    let arr=arrOut();
    for(let i=0;i<arguments.length;i++){
        arr[i]=arguments[i];
    }
    return Math.min.apply(null,arr);
}
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function arrPlus(array) {
     let b=0;
     for(let i=0;i<array.length;i++){
         b+=array[i];
     }
     return b;
}
console.log(arrPlus([1,3,89,6,7,9]));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arrSerAr(array) {
    let k=0;
    let b=0;
     for(let i=0;i<array.length;i++){
         b+=array[i];
         k=b/array.length;
     }
     return k;
}console.log(arrSerAr([2,4,0]));
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
function moveNullNumber() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i];
    }
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 0) {
            arr.splice(i, 1);
            --i;
            counter++;
        }
    }let k=arr.length; while (k<=k+counter){
        arr.push(0);
        counter--;
    }return arr;

}

     console.log(moveNullNumber (0,0,4,4,0));
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
function none_name(array,k) {
  for(let i=0;i<array.length;i++ ){
      if(i===k){
      let temp=array[i];
      array[i++]=array[i];
      array[i++]=temp;
      }
  }
return array;
}console.log(none_name([1,2,9,5,9],1));
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
function Error(array1,array2) {
    let arr=[];
    for (let i in array1) {
          for( let j in array2){
              if(i===j){
                  arr[j]=array1[i]+array2[j];
              }
          }
    }
    return arr;
}console.log(Error([10,20,30,40],[10,20,30,40]));
// - Додає в боді блок з текстом "Hello owu"
function div() {
    let k=document.createElement('div');
    k.innerText=("Hello owu");
    return document.body.appendChild(k);
}
div();
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function adElement(tag,text) {
    let k=document.createElement(tag);
    k.innerText=(text);
    return document.body.appendChild(k);
}
adElement("div","HI");