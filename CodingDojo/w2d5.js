var square = [
    [2,5,8],
    [3,6,1],
    [5,7,7]
];
//should return true or false is val is found in arr2d
function isPresent2d(arr2d, val){
    array = flatten(arr2d)
    var isPresent = false
    for (i in array){
        if (array[i] == val){
            isPresent = true
        }
    }
    return isPresent
}
console.log(isPresent2d(square,1));
console.log(isPresent2d(square,14));

function flatten(arr2d){
    var flat = [];

    for (var i = 0;i<arr2d.length; i++){
        for (var x = 0;x<arr2d.length; x++){
            // console.log("on the index's ",i,x," push the value ",arr2d[i][x]);
            flat.push(arr2d[i][x]);
        }
    }

    return flat;
}

var result = flatten(square);
console.log(result);