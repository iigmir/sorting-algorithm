// Exchange Sort
var ExchangeInput =[69,81,30,38,9,2,47,61,32,79];
// First step: change value
// Please read swapval.js

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
