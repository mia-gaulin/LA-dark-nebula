exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  isPrime : function(num) {
    if (isNaN(num) || !isFinite(num) || num % 1 || num < 2) return false;
    var m = Math.sqrt(num);
    for (var i = 2; i <= m; i++) if (num % i == 0) return false;
    return true;
  },

  arraySum : function(array) {
    var sum = 0;
    for (var i = 0, len = array.length; i < len; i++) {
      sum += array[i];
    }
    return sum;
  },

  fizzBuzz : function(num) {
     if (num % 15 === 0) {
       return 'fizzbuzz';
     } else if (num % 5 === 0) {
       return 'buzz';
     } else if (num % 3 === 0) {
       return 'fizz';
     } else if (typeof num === 'number') {
       return num;
     } else {
       return false;
    }
  }
};
