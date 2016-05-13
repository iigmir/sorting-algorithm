// Ref: http://stackoverflow.com/questions/872310/javascript-swap-array-elements
var tmpary = [1,3,7,5,9];
for (var i=0; i<tmpary.length; i++)
{
    console.log("The"+ i + "element: " +tmpary[i]);
}
console.log(" ");

var swapval = tmpary[2];
tmpary[2] = tmpary[3];
tmpary[3] = swapval;

for (var j=0; j<tmpary.length; j++)
{
    console.log("The"+ j + "element: " +tmpary[j]);
}