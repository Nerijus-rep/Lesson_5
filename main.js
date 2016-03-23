
var Calculator = (function() {

    var defaults = 0;

    return {

        plus: function(n) {
            defaults += n;
            return Calculator;
        },

        minus: function(n) {
            defaults -= n;
            return Calculator;
        },

        multiply: function(n) {
            defaults *= n;
            return Calculator;
        },

        divide: function(n) {
            defaults /= n;
            return Calculator;
        },

        return: function(n) {
            var sum = defaults;
            return sum;
        },
    };
})();

var sum = Calculator.plus(5).minus(2).multiply(20).divide(3);
document.write("Rezultatas:\n" + Calculator.return());
