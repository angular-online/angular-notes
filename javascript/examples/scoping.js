var test = 10; // Global var
 
function calc(a) {
    var b = 20; //Local var
    return a+b+test;
}

// console.log(b); //Get undefined. can't access local variables in gloabl space.

var result = calc(5);
console.log(result); // 35