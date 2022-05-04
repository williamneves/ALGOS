//runs through the arr and looks at two adjacent values at a time
//swaps the two adjacent values if the greater one comes first
//loops through the array many times until there is a perfect
//run with no swaps
function bubbleSort(arr){
    var isSorted = false;

    while(!isSorted){
        isSorted = true;
        for(var i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                console.log(`swapping ${arr[i]} because it's bigger than ${arr[i+1]}`);
                var temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
                isSorted = false;
            }
        }
    }

    return arr;
}

let arr = [5,4,2,6,8,14,1,3,20,4,-5,24];
// console.log(arr);
// console.log(bubbleSort(arr));

//like bubble sort, but a little better.
//on first loop, searches for lowest value
//when finished, swaps lowest value for value at 0 index
//on second loop, searches for second lowest value, then
//swaps with value at 1 index
//continue this pattern until whole array is sorted
function selectionSort(arr){
    for(var start = 0; start < arr.length - 1; start++){
        var mindex = start;
        for(var i = start + 1; i < arr.length; i++){
            if(arr[i] < arr[mindex]){
                mindex = i;
            }
        }
        console.log(`swapping ${arr[start]} with ${arr[mindex]}`);
        var temp = arr[start];
        arr[start] = arr[mindex];
        arr[mindex] = temp;
        // console.log(arr[mindex]);
    }
    return arr;
}

console.log([5,4,2,6,8,14,1,3]);
console.log(selectionSort([5,4,2,6,8,14,1,3]));