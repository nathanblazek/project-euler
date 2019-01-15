var lesson = {
    "number":9,
    "result":"31875000",
    "description": "A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,\n\na^2 + b^2 = c^2\n\nFor example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.\n\nThere exists exactly one Pythagorean triplet for which a + b + c = 1000.\nFind the product abc."
}

function execute(){
    var a = 1;
    var b = a+1;
    var c;

    while(a < 1000){
        while(b < 1000 && b > a){
            c = 1000 - a - b;
              
            if ((a*a) + (b*b) === (c*c)) {
                output("a = " + a);
                output("b = " + b);
                output("c = " + c);
                output("sum of abc = "+ a * b * c);
            }          
            b++;
        }
        a++;
        b = a + 1;
    }
}
