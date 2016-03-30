exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var characters = str.split('');
	  var reducedStr = [];
	  var currentCharacterCount = 0;
      for(var i = 0;i < (characters.length);i++) {
        currentCharacterCount += 1;
  	    if (currentCharacterCount <= amount) {
  	      reducedStr.push(characters[i]);
  	    }
  	    if (characters[i] !== characters[i + 1]) {
  	      currentCharacterCount = 0;
        }
  	   }
  	return reducedStr.join('');
  },

  wordWrap: function(str, cols) {
    var newString = [];
  	var words = str.split(' ');
  	var characterCount = 0;
  	var nextCharacterCount = 0;
  	var nextWord;
  	  for (var i = 0;i < words.length;i++) {
  	    newString.push(words[i]);
  	      characterCount += words[i].length;
  	      nextWord = words[i + 1];
  	    if (nextWord) {
  	      nextCharacterCount = nextWord.length;
  	    if (characterCount + nextCharacterCount < cols) {
  	        newString.push(' ');
  	        characterCount += 1;
          } else {
  	        newString.push('\n');
  	        characterCount = 0;
  	      }
  	    }
  	  }
  	return newString.join('');
  },

  reverseString: function(str) {
    var result = str.split('').reverse().join('');
    return result;
    }
};
