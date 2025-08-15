
// let int = 1234;

// int float = 1.234;

// let  string = '1234';

// let drinkcoffie = true;

// let drinktea = false;

// console.log(typeof(float));
// undefined | null | NaN "" (Empty String)

let  number = null;

let num1 = '1234';

let  num2 = '1234F';

let fname = 'Musfiq';
console.log(number);

let sentence = 'He said "I ate today"';
// let sentence = 'He said \"I ate today\"';
console.log(sentence);

// Arithmetic Operator-----------------
//  + - * / % ++ -- 
let age = 20;
console.log(age);
console.log(age++);    //console.log(++age); before 1 add
console.log(age);

// modulus---------------------
console.log(10%2);
console.log(10%3);

// exponential operator----------------
console.log(3**2);
// assignment operator---------------
let num = 2; 
num = num + 1; 
num -= 1;
num += 1;
num *= 1;
num /= 1;    // same like num = num - 1         //num++
num += num * 100;  

// // operator precendence--------------------------
// ()   brackets power always strong. 
// /  *  + -   serially 

// Comparison Operator

num = 5;
console.log(num > 3);

let money = 30;

let rickshawVara = 30;

console.log(rickshawVara <= money);   //(Boolean ////comparison)

// ==  === (Strict Comparison)-----------------
// !  (Not Equal)  != !=== (Not Equal Strict Comparison)

let num123 = 1234;
let word123 = '1234';

console.log(num123 == word123);  //Loose comparison see only value not strings . ans = true
console.log(num123 === word123);  //strict comparison see only value & Value so false (number + strings) .
console.log(num123 !== word123);  // ans false

//Ternary Operator ---------------------
 // Rickshaw te jabo jodi
 // money varar theke beshi thake
 // othoba varar soman thake

 money = 130;
 rickshawVara = 30;

 let result = money > rickshawVara ? 'Rickshawte jabo' : 'Hete Jabo';  //Like IF & ILSE
 console.log(result);

 //Logical Operator 

&&  (And Operator)      (icecream & khelna)
||   (Or Operator)    (or icecream or khelna)
!    (Not Operator)

let isKnowHtml = true;  //false
let isAgrohi = true;    //false

console.log(isKnowHtml && isAgrohi);
console.log(isKnowHtml || isAgrohi);
console.log(!isKnowHtml);   //when false & false

//What is Falsy value in javascript?

// Falsy Value = undefined , null , false , 0 , '' (Emty String) , NaN (not a value)
// Truthy Value = Opposite of Falsy Value







