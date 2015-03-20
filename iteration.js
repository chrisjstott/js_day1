var bubbleSort = function(array) {
  var unsorted;
  do {
    unsorted = false;
    for(var i = 1; i< array.length; i++) {
      if(array[i-1] > array[i]) {
        var temp = array[i];
        array[i] = array[i-1];
        array[i-1] = temp;
        unsorted = true;
      }
    }
  } while(unsorted);
  return array;
};


//console.log(bubbleSort([2,3,6,1,4,2]));

var substrings = function(string) {
  var output = [];
  for(var i = 0; i <= string.length; i++) {
    for(var j = i+1; j <= string.length; j++) {
      var substring = string.substring(i,j);
      if (output.indexOf(substring) === -1) {
        output.push(substring);
      }
    }
  }
  return output;
};

console.log(substrings("cathat"));
