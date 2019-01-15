var lesson = {
    "number":7,
    "result":"104743",
    "description": "By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.\n\nWhat is the 10 001st prime number?"
}

function execute(){
    var i = 1;
    var primeCount = 0;

    while(true){
        if(isPrime(i)){
            primeCount++;
        }

        if (primeCount == 10001){
            output(i);
            break;
        }
        i++;   
    }
}

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
