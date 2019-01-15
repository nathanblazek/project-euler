var lesson = {
    "number":6,
    "result":"25164150",
    "description": "The sum of the squares of the first ten natural numbers is,\n12 + 22 + ... + 102 = 385\nThe square of the sum of the first ten natural numbers is,\n\n(1 + 2 + ... + 10)2 = 552 = 3025\n\nHence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.\n\nFind the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum."
}

function execute(){
    var sum = 0;
    var sumSquared = 0;
    for(var i=1;i <=100;i++){
        sum += i;
        sumSquared += (i * i);
    }
    sum =  sum * sum; //square the sum
    output(sum - sumSquared);

}
