exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  isPrime : function(num) {
    if (isNaN(num) || !isFinite(num) || num % 1 || num < 2) return false;
    var m = Math.sqrt(num);
    for (var i = 2; i <= m; i++) if (num % i == 0) return false;
    return true;
  },

  arraySum : function(array) {

  },

  fizzBuzz : function(num) {

    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
  }
};
