
function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

//console.log(hello)
//console.log(Dojo)


function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
/*
console.log 15

digrama t
variables         valores
result              15
*/

function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);
/*
consol.log 3

    diagrama t
var            valor
result          15

console.log 18
*/ 

var num = 15;
console.log(num);
function logAndReturn(num2){
    console.log(num2);   
    return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);

/* 
//console.log(num)   15
console.log(num2)    10 
console.log(result)  10
console.log(num)     15 

        tdiagram
var        valor

num        15

result     10
*/

var num = 15;
console.log(num);
function timesTwo(num2){
    console.log(num2);   
    return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);

/*

console.log(num)     15
console.log(num2)    10
console.log(result)  20
console.log(num)     15
    t diagram
var        valor

num         15
result      20

*/ 
function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);

/*
console.log(num is 3 )
console.log(result is 7)

    t diagram
var       valor
y          6
result     7
*/

function sumNums(num1, num2) {  
    return num1+num2;
}
console.log(sumNums(2,3))
console.log(sumNums(3,5))
/*
console.log(sumNums) 5
console.log(sumNmus) 8
*/


function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
}
console.log(printSumNums(2,3))
console.log(printSumNums(3,5))
/*
console.log(num1) 2
console.log(num2) 5
console.log(num1) 3
console.log(num2) 8
*/
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);
/*
console.log(sum is 5)
console.log(result is 13)

    t diagram
var           valor
sum            5
result         13

*/



function sumNums(num1, num2) {//se declara la funcion que recive 2 parametros
    var sum = num1 + num2;//declaramos la variable sum que es igual a la suma de num1 + num2
    console.log('sum is', sum);//imprimimos la variable sum
    return sum;//estamos retornando el valor sum
}
var result = 
sumNums(2,3) + // 5
sumNums(3,
    sumNums(2,1)//3
    ) + // 6
sumNums(
    sumNums(2,1),// 3
    sumNums(2,3)// 5
    );// 8 + 6 = 14 + 5 = 19
console.log('result is', result);
//19
/*
console.log(sum is  5 )
console.log(result is 19)

    t diagram
var           valor
sum            5
result         19
*/
