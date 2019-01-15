var lesson = {
    "number":3,
    "result":"6857",
    "description": "The prime factors of 13195 are 5, 7, 13 and 29.\n\nWhat is the largest prime factor of the number 600851475143 ?"
}

function execute(){
    var target = 600851475143;

    var factorials = [];
    var number = target;

    for (var i=0;i<=target;i++){
        if(isPrime(i)){
            if(number % i === 0 && number != 1){
                factorials.push(i);
                number = number / i;
            }
            if(number == 1){
                break;
            }
        }     
    }

    output(factorials[factorials.length-1]);

}

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}