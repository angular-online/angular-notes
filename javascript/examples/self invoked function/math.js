var math = {};

(function () {
    function performAddition(a, b) {
        return parseInt(a) + parseInt(b);
    }    
    
    function add(a, b) {
        return performAddition(a, b);
    };
    
    function subtract(a, b) {
        return a-b;
    };
    
    math.add = add;
    math.subtract = subtract;
})()

console.log(math);