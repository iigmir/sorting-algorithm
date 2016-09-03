function qs_draft(qsd_input)
{   // Deprecated function, don't use it.
    var qsx = 0;
    var qsy = qs_input.length;
    var qs_tmp = 0;
    var qsd_input = qs_input;
    while ( qsx < qsy )
    {
        if ( qsd_input[qsx] > qsd_input[qsy] )
        {   // if x > y, change because it should x < y
            qs_tmp = qsd_input[qsx];
            console.log(qs_array[qsx]);console.log(qs_array[qsy]);console.log(qs_tmp);console.log(" BR ");
            qsd_input[qsx] = qsd_input[qsy];
            qs_array[qsy] = qs_tmp
        }
        qsx++; qsy--;
    }
    return qsd_input;
}

function quicksort(qs_input)
{
    /*
    Description:
    When I wrote firstly, it was like qs_draft(). My thaught was:
    First, let centre number of array be pivot.
    Then, loop from side to centre.
    If left of number bigger than right one, swap it.
    
    However, I found there were some number slip away from function.
    "Is my logic wrong?" I asked myself, and read Wikipedia:
    https://www.wikiwand.com/zh-tw/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F
    
    One of answer shocked me:
    First number of array be pivot first.
    Then, create two new array.
    Number bigger than pivot will join to one array, else join to the other array.
    Finally, use recursion to done it.
    
    It really works. I must admit it.
    Great algorithm......
    */
    var input_length = qs_input.length;
    var pivot = qs_input[0];
    var smaller_than_pivot_array = [];
    var biggger_than_pivot_array = [];
    if ( input_length <= 1 ) { return qs_input.slice(0); }
    for ( var i=1; i < input_length ; i++ )
    {
        if ( qs_input[i] < pivot )
        {
            smaller_than_pivot_array.push( qs_input[i] );
        }
        else
        {
            biggger_than_pivot_array.push( qs_input[i] );
        }
    }
    var smaller_than_pivot_result = quicksort(smaller_than_pivot_array);
    var biggger_than_pivot_result = quicksort(biggger_than_pivot_array);
    var newx = smaller_than_pivot_result.concat(pivot);
    var newy = newx.concat(biggger_than_pivot_result);
    return newy;
}

/* For test use
console.log( quicksort([12,954,6894,39,1674,4489,62,4,95,236,48,110]) );
console.log( quicksort([12,954,6894,39,1674,4489,62,4,95,236,48,110,2048]) );
*/