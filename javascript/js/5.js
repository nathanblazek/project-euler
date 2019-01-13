var lesson = {
    "number":5,
    "pass":true,
    "description": "2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.\nWhat is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?"
}

function execute(){
    var maxNum = 20;
    var i = 2520;
    while(true){
        //console.log(i);
        var found = true;
        for(var j = 1; j <= maxNum; j++){
            if(!(i % j === 0)){
                found = false;
                break;
            }
        }
        if (found){
            output(i);
            break;
        }
        i++;
    }
}
