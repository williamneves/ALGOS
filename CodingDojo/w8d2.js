//looping through the array from 0 to arr.length,
//shift a value in the array back to the place it belongs
//the value to shift should increment with each loop iteration
//follow this example for each step, with the current value in ()
//step one: [(6),4,5,2,8,14,1,3] -> [(6),4,5,2,8,14,1,3]
//step two: [6,(4),5,2,8,14,1,3] -> [(4),6,5,2,8,14,1,3]
//step three: [4,6,(5),2,8,14,1,3] -> [4,(5),6,2,8,14,1,3]
//step four: [4,5,6,(2),8,14,1,3] -> [(2),4,5,6,8,14,1,3]
//step five: [2,4,5,6,(8),14,1,3] -> [2,4,5,6,(8),14,1,3]
//and so on...
const insertionSort = (arr) => {

    // checking if the array has 0 or just 1 
    if (arr.length == 0 || arr.length == 1){
        console.log("Already sorted...")
        return arr
    }

    // set a nested for loop and check if the Index is less than last index
    for (let i = 0; i < arr.length; i++){
        // this loop is gonna be from the current index to back
        for (let g = i; g > 0;g--){
            // if is swap and continue loop back until not be true anymore....
            if(arr[g] < arr[g-1] ){
                let tempIdx = arr[g]
                arr[g] = arr[g-1]
                arr[g-1] = tempIdx
            }
            else{
                break;
            }
        }

    }

    return arr
}


console.log(insertionSort([6]));
console.log(insertionSort([6,4,5,2,8,14,1,3]));
console.log(insertionSort([1,2,3,5,6,7,4]));
console.log(insertionSort([1,2,3,5,6,7,4,22,-1,34,1100,43,345,22423,-12,213,-23,123,-12]));