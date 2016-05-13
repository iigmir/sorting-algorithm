// Insertion Sort
var insertInput = [69,81,30,38,9,2,47,61,32,79];
var insertOutput = [];
// First, define first and second element
insertOutput.push(insertInput[0]);
if ( insertInput[0] < insertInput[1] ) { insertOutput.push(insertInput[1]); }
else { insertOutput.unshift(insertInput[1]); }
console.log(insertOutput);