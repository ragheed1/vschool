var numArray = [23, 10, 90,53,60,76,56,34,87,99];
    for (var i = 0; i < numArray.length; i++) {
        var target = numArray[i];
        for (var j = i - 1; j >= 0 && (numArray[j] < target); j--) {
            numArray[j+1] = numArray[j];
        }
        numArray[j+1] = target
    }


 

