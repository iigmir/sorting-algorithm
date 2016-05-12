// "val" means value.
// Exchange Sort
var ExchangeInput =[69,81,30,38,9,2,47,61,32,79];
// First step: change value
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

// Secend step: Change once
var ExchangeInSecendStep = ExchangeInput;
for (var i=0; i<ExchangeInSecendStep.length;i++)
{
    var Secendanchorval = ExchangeInSecendStep[0];
    if ( ExchangeInSecendStep[0] > ExchangeInSecendStep[i] )
    {
        ExchangeInSecendStep[0] = ExchangeInSecendStep[i];
        ExchangeInSecendStep[i] = Secendanchorval;
    }
}

// Third step: Change whole length
for (var x=0; x<ExchangeInput.length;x++)
{
    for (var y=x; y<ExchangeInput.length;y++)
    {
        var anchorval = ExchangeInput[x];
        if ( ExchangeInput[x] > ExchangeInput[y] )
        {
            ExchangeInput[x] = ExchangeInput[y];
            ExchangeInput[y] = anchorval;
        }
    }
}
