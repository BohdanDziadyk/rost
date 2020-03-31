let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}
let k = array.length;
while (k < array.length + 1) {
    console.log(array[array.length - k]);
    if (k === 0) break;
    k--;
}
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
for (let i = array.length; i <= array.length; i--) {
    console.log(array[array.length - i]);
    if (i === 0) break;
}
let a = 0;
while (a < array.length) {
    if (a % 2 === 1) {
        console.log(array[a]);
    }
    a++;
}
let b = array.length;
while (b < array.length + 1) {
    if (b % 2 === 1) {
        console.log(array[array.length - b]);
    }
    if (b === 0) break;
    b--;
}
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) continue;
    console.log(array[i]);
}
for (let i = array.length; i < array.length + 1; i--) {
    if (i % 2 === 1) {
        console.log(array[array.length - i]);
    } else {
        if (i === 0) {
            break;
        }
    }
}
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) continue;
    console.log(array[i]);
}
for (let i = array.length; i < array.length + 1; i--) {
    if (array[i] % 2 === 1) continue;
    console.log(array[i]);
    if (i === 0) break;

}
let c = 0;
while (c < array.length) {
    if (array[c] % 2 === 0) {
        console.log(array[c]);
    }
    c++;
}
let c_1 = array.length;
while (c_1 < array.length + 1) {
    if (array[c_1] % 2 === 0) {
        console.log(array[c_1]);
    }
    if (c_1===0) break;
    c_1--;
}
let arr=[];
for (let i=0;i<array.length;i++){
    if (array[i]%3===0){
        array[i]="okten";
    }
    arr[i]=array[i];
}console.log(arr);
let arr_1=[];
for(let i=array.length;i<array.length+1;i--){
    if (array[i]%3===0){
        array[i]="okten";
    }
    arr_1[i]=array[i];
    if (i===0)break;
}console.log(arr_1);
let array_1=[2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let arr_0=[];
for (let i=array_1.length;i<array_1.length+1;i--){
   arr_0.push(array_1[i]);
   if (i===0)break;
}console.log(arr_0);
let arr_4=[];
for(let i=0; i<=50;i++){
    arr_4[i]=2*i;
}console.log(arr_4);
let arr_5=[];
for (let i=50;i<51;i--){
    arr_5[i]=2*i;
    if (i===0)break;
}console.log(arr_5);
let arr_6=[];
for(let i=0; i<=50;i++){
    arr_6[i]=2*i+1;
}console.log(arr_6);
let arr_7=[];
for(let i=50; i<=50;i--){
    arr_7[i]=2*i+1;
    if (i===0)break;
}console.log(arr_7);
let arr_8=[];
for(let i=0; i<=50;i++){
    arr_8[i]=Math.random();
}console.log(arr_8);
function getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min))+min}
let arr_9=[];
for(let i=0; i<=50;i++){
    arr_9[i]=getRandomInt(8,700);
}console.log(arr_9);
let arr_10=[];
for(let i=0;i<arr_9.length;i++){
    if (i%3===2){
        arr_10.push(arr_9[i]);
    }
}console.log(arr_10);
let arr_11=[];
for(let i=0;i<arr_9.length;i++){
    if (i%3===2&&arr_9[i]%2===0){
        arr_11.push(arr_9[i]);
    }
}console.log(arr_11);
let arr_12=[];
for(let i=0;i<arr_9.length;i++){
    if (arr_9[i+1]%2===0){
        arr_12.push(arr_9[i]);
    }else {
        if (arr_9[i]%2===0&&arr_9[i+1]%2===0){
            arr_12.push(arr_9[i]);
        }
    }
}console.log(arr_12);
let arr_13=[100, 250,50,168,120,245,188];
let sum=arr_13.reduce((a,b)=> a+b);
let result=sum/arr_13.length;
console.log(result);
let arr_14=[];
for (let i=0;i<getRandomInt(5,10);i++){
    arr_14[i]=5*getRandomInt(9,13);
}console.log(arr_14);
let arr_15=["Таль","3",getRandomInt(9,13),"Алехин","Шифер","Стейніц",getRandomInt(10,30),"Магнус Карлсен",getRandomInt(7,40)];
let arr_16=[];
for (let i=0;i<arr_15.length;i++){
    if (typeof(arr_15[i])==="number" ){
        arr_16.push(arr_15[i]);
    }
}console.log(arr_16);