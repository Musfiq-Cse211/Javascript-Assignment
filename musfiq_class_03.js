let fname = "Musfiq";
let lname = "Riayd";

let fullname = (fname + "" + lname);
console.log(fullname.toUpperCase());
console.log(fullname.trim());

//ASCII value

// String Type -----------------------------------------------------------------------------


console.log(fname[3]);                        // show all caracter count 0 , 1 , 2......
console.log(fullname.indexOf("Musfiq"));   // Search for any topics .... & 0 , 1 ,2 ,3 ......with Space Count...

let nationality = "I am a Bangladeshi and I love my country"
console.log(nationality.slice(7,17));

console.log(nationality.replace('Bangladesh'));
console.log(nationality);

// Condition Start

let VhaaterDam = 60;

if (VhaaterDam < 50) {
    console.log('Vhaat Khabo');

} else {
    console.log('porotha Khabo');
}

let vaaterDam = 55;
let khichurirDam = 70;
let isDupur = true;

if (isDupur == false) {
    console.log('kacchi Kahbo');
} 
else if (isDupur == false && khichurirDam <= 60) { 
    console.log('Vhaat Khabo');             // for  More Decision

}
else if (isDupur == true && vaaterDam > 50){
    console.log('Vhaat Khabo');

}

else {
    console.log('porotha Khabo');
}

let weekday = 5;

if(weekday == 1) {
    console.log('Today is Sunday');
}
else if(weekday == 2) {
    console.log('Today is Monday');
}
else if(weekday == 3) {
    console.log('Today is Tuesday');
}
else if(weekday == 4) {
    console.log('Today is  Wednesday');
}
else if(weekday == 5) {
    console.log('Today is  Thursday');
}
else if(weekday == 6) {
    console.log('Today is  Friday');
}
else if (weekday == 7) {
    console.log('Today is  Saterday');
}
else{
    console.log('Invalid weekday');
}

let weekday = (new Date().getDay())+1;


let rickshawVara = 30;

if (rickshawVara <= 30) {
    console.log('Rickshawi Jabo');
}

else{
    console.log('Hethe Jabo');
}
