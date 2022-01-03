//Coding challenge #1: Print numbers from 1 to 10

let numbers = [1,2,3,4,5,6,7,8,9,10,]

for(let i = 1; i<=10; i++){
    let numbers = i
}
console.log(numbers)

//Coding challenge #2: Print the odd numbers less than 100 //100 den küçük tek sayılar 

for( let i = 1; i<=100; i+=2){
    console.log(i)
}

//Coding challenge #3: Print the multiplication table with 7

for(let i = 1; i<=10; i++){
    let  row = "7 * " + i + " = " + 7 * i;
    console.log(i)
}

//Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

for(let i = 1; i<=10; i++){
    console.log(i);
    console.log("");
}
function printTable(n) {
    for(let i = 1; i<=10; i++){
        let row = n + "*" + i + "=" + n * i ;
        printTable(row);
    }
}
console.log(printTable)

//Coding challenge #5: Calculate the sum of numbers from 1 to 10

let sum = 0 ;

for (let i = 1 ; i<=10; i++){
    sum +=i ;
}
console.log(sum)


//Coding challenge #6: Calculate 10!

let prod = 1 ;
for (let i = 1; i<=10; i++){
    prod *= i;
}
console.log(prod);

//Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30

let sum1 = 0 ; 
for (let i = 11; i<=30; i+= 2){

    sum1 +=i;
}
console.log(sum1);

//Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit

function celsiusToFahrenheit(n) {
    return n* 1.8 + 32;
}

let r = celsiusToFahrenheit(20)
console.log(r);

//Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius

function fahrenheitToCelsius(n) {
    return (n - 32) / 1.8 ;
}
let p = celsiusToFahrenheit(68)
console.log(p);

//Coding challenge #10: Calculate the sum of numbers in an array of numbers

let ar = [2,3,-1,5,7,9,10,15,95];
let sum2 = sumArray(ar);

function sumArray(ar) {
    let sum2 = 0;
    
    for(let i = 0; i< ar.length; i++ ){
        sum2 += ar[i];
    }
     return sum2;
}
console.log(sum2);

//Coding challenge #11: Calculate the average of the numbers in an array of numbers

let params = [1,3,9,15,90];
let ort= ortArray(params)

function ortArray(params) {
    let n = params.length;
    let sum = 0;

    for( let i = 0; i< n; i++){
        sum += params[i];
    }
    return sum / n;
}
console.log("ortalam: " , ort)

//Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

let params1 = [-5,10,-3,12,-9,5,90,0,1];
let params2 = getPositives(params1);

function getPositives(params1) {
    let params2 = [];

    for(let i =0; i< params1.length; i++ ){
        let el = params1[i];
        if (el >= 0){
            params2.push(el);
        }
    }
    return params2

}
console.log(params2);

//ikinci çözüm
let number = [-5,10,-3,12,-9,5,90,0,1];
let number1 = getPositives(number);



function getPositives(number) {
    let number1 = [];
    for(let el of number){
        if (el >=0){
            number1.push(el);
        }
    }
    return number1;
}

console.log(number1)

// üçüncü çözüm (filter**)

let  sayı = [-5,10,-3,12,-9,5,90,0,1];
let sayı2 = getPositives(sayı);

function getPositives(sayı) {
    return sayı.filter(el => el >= 0);
}
console.log(sayı2)


//Coding challenge #13: Find the maximum number in an array of numbers

let  al = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let max = findMax(al);

function findMax(al) {
    let max = al[0];

    for(let i = 0; i<al.length; i++){
        if(al[i] > max){
            max = al[i];
        }
    }
    return max;
}

console.log("Max: " , max);

//Coding challenge #14: Print the first 10 Fibonacci numbers without recursion

let f0 = 0;
console.log(f0);

let f1 = 1;
console.log(f1);

for(let i = 2 ; i<10; i++){
    let fi = f1 + f0;
    console.log(fi);

    f0 = f1;
    f1 = fi;
}

//Coding challenge #15: Create a function that will find the xth Fibonacci number using recursion

let x = findFibonacci(10);

function findFibonacci(x) {
    if ( x == 0)
    return 0;

    if (x == 1) 
    return 1 ;
    
    return findFibonacci(x - 1) + findFibonacci(x - 2);

    
}

console.log(x)