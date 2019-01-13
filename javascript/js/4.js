var lesson = {
    "number":4,
    "pass":true,
    "description": "A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.\nFind the largest palindrome made from the product of two 3-digit numbers."
}

function execute(){
    //get all palindromes
    var min = 100;
    var max = 999;
    var palindromes = [0];
    for(var i = max; i > min; i--){
        for(var j = max; j > min; j--){
            product = i*j;
            if(isPalindrome(product))
                palindromes.push(product);
        } 
    }
    //get largest palindrome
    var largest = 0;
    for(var i=0; i<palindromes.length;i++){
        if(palindromes[i] > largest)
        largest = palindromes[i];
    }
    output(largest);
}

function isPalindrome(value){
    //convert to string, split and reserve the array before rejoining it and reconverting it back to an int.
    reversed  = parseInt((""+value).split("").reverse().join("")); //BAM
    return reversed == value;
}
