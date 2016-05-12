// Selection Sort
var ExchangeInput =[69,81,30,38,9,2,47,61,32,79];
var selectionInput = ExchangeInput;
var exchangeStep = 0;
var selectionStep = 0;
// Cause it like Exchange sort, so firstly start from Exchange sort
for (var x=0; x<ExchangeInput.length;x++)
{
    for (var y=x; y<ExchangeInput.length;y++)
    {
        var ExchangeAnchor = ExchangeInput[x];
        if ( ExchangeInput[x] > ExchangeInput[y] )
        {
            ExchangeInput[x] = ExchangeInput[y];
            ExchangeInput[y] = ExchangeAnchor;
        }
        exchangeStep++;
    }
}

// Let's go...
for (var x=0; x<selectionInput.length;x++)
{
    var selectionVal = x;
    for (var y=x+1; y<selectionInput.length;y++)
    {
        if ( selectionInput[selectionVal] > selectionInput[y] )
        {
            selectionVal = y;
        }
    }
    if ( x != selectionVal )
    {
        var selectionChangeVal = selectionInput[x];
        selectionInput[x] = selectionInput[selectionVal];
        selectionInput[selectionVal] = selectionChangeVal;
    }
    selectionStep++;
}

// I add step var to watch how many step should loop did. Result is 55 versus 10.
// I am scared.