import * as utilityFunctions from "./second.js";

const peeps1 = {
  name: "Priyanka",
  age: 25
};

const peeps2 = {
  address: "Davenport"
};

const additionDiv = document.querySelector("#addition-div");
const largestArrayDiv = document.querySelector("#largest-array-div");
const mergeObjectDiv = document.querySelector("#merge-object-div");

additionDiv.innerHTML = utilityFunctions.addition(2, 5);
largestArrayDiv.innerHTML = utilityFunctions.findLargest([2, 5, 1, 0, 9]);
mergeObjectDiv.innerHTML = utilityFunctions.mergeObjects(peeps1, peeps2);

console.log(utilityFunctions.addition(2, 5));
console.log(utilityFunctions.findLargest([2, 5, 1, 0, 9]));
console.log(utilityFunctions.mergeObjects(peeps1, peeps2));
