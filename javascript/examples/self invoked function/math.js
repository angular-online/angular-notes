var math = {};

(function () {
    function performAddition(a, b) {
        return parseInt(a) + parseInt(b);
    } 
    
    function subtract(a, b) {
        return a-b;
    };
    
    math.add = performAddition;
    math.subtract = subtract;
})()

console.log(math);