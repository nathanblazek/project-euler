var lesson = {
    "number":1,
    "pass":true,
    "result":"233168",
    "description": "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.\nFind the sum of all the multiples of 3 or 5 below 1000."
}

function execute(){
    sumNumbers = [3,5];
    max = 1000;
    var allNumbers = [];
    for(var i=0;i < sumNumbers.length;i++){
        var thisSum = 0;
        while(thisSum < max){
            if(!allNumbers.includes(thisSum))
                allNumbers.push(thisSum);
            thisSum += sumNumbers[i];
        }
    }
    output(sumArray(allNumbers));
}
