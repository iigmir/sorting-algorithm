// Bubble Sort 
var bubbleInput =[69,81,30,38,9,2,47,61,32,79];

// First, sorting once 
var bubbleInputFirstStep = bubbleInput;
for (var i=0; i<bubbleInputFirstStep.length; i++)
{
    if ( bubbleInputFirstStep[i]<bubbleInputFirstStep[i+1] )
    {
        var swapval = bubbleInputFirstStep[i];
        bubbleInputFirstStep[i] = bubbleInputFirstStep[i+1];
        bubbleInputFirstStep[i+1] = swapval;
    }
}

// Secend, sort muptile until ended
var lengthCheck = 0;
while( lengthCheck<bubbleInput.length )
{
    for (var j=0; j<bubbleInput.length-lengthCheck; j++)
    {
        if ( bubbleInput[j]<bubbleInput[j+1] )
        {
            var swapval = bubbleInput[j];
            bubbleInput[j] = bubbleInput[j+1];
            bubbleInput[j+1] = swapval;
        }
    lengthCheck++;
    }
}