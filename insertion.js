// Insertion Sort
var insertInput = [69,81,30,38,9,2,47,61,32,79];
var insertOutput = [];
// First, define first and second element
insertOutput.push(insertInput[0]);
if ( insertInput[0] < insertInput[1] ) { insertOutput.push(insertInput[1]); }
else { insertOutput.unshift(insertInput[1]); }
// Second, start from third element
// Ref: http://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index
for (var i=2; i<insertInput.length; i++)
{
    for (var j=0; j<insertOutput.length; j++)
    {
        if( insertInput[i] < insertOutput[j] )
        {
            insertOutput.splice( j, 0, insertInput[i] );
            break;
        }
    }
}
