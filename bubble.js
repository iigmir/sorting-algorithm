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