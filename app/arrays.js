exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    var i, len;

    for (i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = i - 1;
        len = len - 1;
      }
    }

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift(arr);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        count++;
      }
    }

    return count;
  },

  duplicates : function(arr) {
    var uniq = arr
    .map((number) => {
      return {count: 1, number: number};
    }).reduce((a, b) => {
      a[b.number] = (a[b.number] || 0) + b.count;
      return a;
    }, {});

    var results = Object.keys(uniq).filter((a) => uniq[a] > 1);

    for(var i = 0; i < results.length; i++) { results[i] = parseInt(results[i], 10); }

    return results;
  },

  square : function(arr) {
    var array = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      array.push(arr[i] * arr[i]);
    }

    return array;
  },

  findAllOccurrences : function(arr, target) {
    var array = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === target) {
        array.push(i);
      }
    }

    return array;
  }
};
