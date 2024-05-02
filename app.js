const free = [["Code", 10],["Camp", 20]];

function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length, i++){
        for (var j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }
    }
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


function testGreaterThan(val){
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}

testGreaterThan(10);