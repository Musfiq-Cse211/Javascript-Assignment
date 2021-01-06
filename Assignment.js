// Task 01 -----------------------------------------------------------------------------------

function InchiToFeetValue () {
    let inchi = 48;
    InchiToFeetConv = inchi/12;
    console.log(InchiToFeetConv);
}
InchiToFeetValue();

// Task 02 -----------------------------------------------------------------------------------

function FeetToMileValue () {

  let feet = 14;
  FeetToMileConv = feet*0.000189394;
  console.log(FeetToMileConv);
}
FeetToMileValue ();

// Task 03 -----------------------------------------------------------------------------------

function TWoodNeeded () {

  let ChairPerCubic = 1;
  let TablePerCubic = 3;
  let BedPerCubic = 5;

  let Chair = 5;
  let Table = 2;
  let Bed = 1;

  let TotalMade = 5 + 2 + 1 + "TotalWoodMade" ;
  console.log(TotalMade);
  
  let TotalCubicFeetWood = 1 + 3 + 5 + "CubicFeetWood";
  console.log( TotalCubicFeetWood);

  let TWoodNeeded = 5*1 + 2*3 + 1*5 + "CubicFeetWoodNeeded";
  console.log(TWoodNeeded);
}
TWoodNeeded ();

// Task 04 -----------------------------------------------------------------------------------

function BrickNeeded () {

let T22TalarHeight , PerFootHeightBrick;
T22TalarHeight = 10*15 + 12 + 2*10 ;
console.log(T22TalarHeight);

PerFootHeightBrick = 1000;
let Total22TalarBrick = "BrickNeeded" + ":" + T22TalarHeight*PerFootHeightBrick; 
console.log(Total22TalarBrick);
}
BrickNeeded();


// Task 05 -----------------------------------------------------------------------------------

function SoberChotoName () {

let AllFriend = ['Jabir', 'Abdullah', 'Abir', 'Ramim'];
let x  = 'Abir';
let ChotoName = x.length;
console.log(ChotoName);
}
SoberChotoName();





