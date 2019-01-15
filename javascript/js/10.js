var lesson = {
    "number":10,
    "result":"142913828922",
    "description": "The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. \nFind the sum of all the primes below two million."
}

function execute(){

    var primes = getPrimes(2000000);
   
   
    output(sumArray(primes));
    
}

function getPrimes(max){
    var primes = [2];
    if(max>2){
        for(var i = 3; i <=max;i+=2){
            if(isPrime(i)){
                primes.push(i);
            }
            if((i-1)%100000 == 0)
                    console.log("Completed "+ (i-1));
        }
    }
    return primes;
}

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
