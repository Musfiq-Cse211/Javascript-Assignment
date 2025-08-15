// Task 01 ------------------------------------------------>>>
function inchiToMile(inches) {
    function inchiToFeet(inches) {
    let feet;
    if (inches <= 0) {
      return 'Input Must Be Greater Or Equal To 1';
    }
    else {
      feet = inches / 12;
    }
    return feet;
  }
    function feetToMile(feet) {
    let mile = feet * 0.0001894;
    return mile;
  }
  const feetValues = inchiToFeet(inches);
  const mileValues = feetToMile(feetValues);
  return mileValues;
}
const inches = 50;
const milesResult = inchiToMile(inches);
console.log(`Result : ${inches} Inches Is Equal To ${milesResult.toFixed(5)} Miles`);


// Task -02 ---------------------------------------------------->>>
function woodCalculator(chair, table, bed) {
  const chairWood = chair * 1;
  const tableWood = table * 3;
  const bedWood = bed * 5;

  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}
const noOfChairs = 5;
const noOfTable = 2;
const noOfBeds = 1;

const woodRequired = woodCalculator(noOfChairs, noOfTable, noOfBeds);
console.log(`Result : The Man has to buy ${woodRequired} cubic feet of wood from the Wood-Shop`);

// Task -03 ---------------------------------------------------->>>
function calculateBricksForBuilding(floors) {
  const bricksPerFoot = 1000; 
  let totalBricks = 0;

  for (let floor = 1; floor <= floors; floor++) {
    if (floor <= 10) {
      totalBricks += 15 * bricksPerFoot;
    } else if (floor <= 20) {
      totalBricks += 12 * bricksPerFoot;
    } else {
      totalBricks += 10 * bricksPerFoot;
    }
  }
  return totalBricks;
}
const numberOfFloors = 22;
const totalBricksRequired = calculateBricksForBuilding(numberOfFloors);

console.log(`for Karim Saheb's 22th-Floor building
bricks are required : ${totalBricksRequired} `);

// Task 4 ----------------------------------------------->>>

function smallestName(myFriends) {
  if (!Array.isArray(myFriends)) {
    return "Invalid Input";
  }
  let smallestName = "";
  let smallestNameLength = Infinity;
  for (let i = 0; i < myFriends.length; i++) {
    if (typeof myFriends[i] !== "string") {
      return "Invalid Input";
    }
    const currentNameLength = myFriends[i].length;
    if (currentNameLength < smallestNameLength) {
      smallestName = myFriends[i];
      smallestNameLength = currentNameLength;
    }
  }
  return smallestName;
}
const myFriends = ['Akter', 'Alvi', 'Hasan', 'Afzal', 'Rakibul', 'Ashiqur'];
console.log(smallestName(myFriends));

// function findSmallestName(friends) {
//   if (!Array.isArray(friends) || friends.length === 0) {
//     return "Friends Array is Empty Or Friends is Not Array!";
//   }
//   let smallestName = friends[0];
//   for (let i = 1; i < friends.length; i++) {
//     if (friends[i] < smallestName) {
//       smallestName = friends[i];
//     }
//   }
//   return smallestName;
// }
// const myFriends = ['Akter', 'Alvi', 'Hasan', 'Afzal', 'Rakibul', 'Ashiqur'];
// const smallestName = findSmallestName(myFriends);
// console.log('Smallest Name: ', smallestName);


