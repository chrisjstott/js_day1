var range = function range(start, end) {
  if (end < start) {
    return [];
  } else {
    var temp = range(start, end-1);
    temp.push(end);
    return temp;
  }
};

// console.log(range(1,5));

Array.prototype.myInject = function(f) {
  var accum;
  this.myEach(function(n) {
    if(accum === undefined) {
      accum = n;
    } else {
      accum = f(accum, n);
    }
  });
  return accum;
};

// var sum = function(array) {
//   return array.myInject(function(a,b) {a+b;});
// };

var recurSum = function(array) {
  if(array.length === 1) {
    return array.pop();
  } else {
    return array.pop() + recurSum(array);
  }
};

// console.log(sum([1,2,3,4,5]));

// console.log(recurSum([1,2,3,4,5]));

var slowExponent = function(b,n) {
  if(n === 0) {
    return 1;
  } else {
    return b * slowExponent(b,n-1);
  }
};

// console.log(slowExponent(3,5));
// console.log(slowExponent(2,1023));

var fastExponent = function(b,n) {
  if(n === 0) {
    return 1;
  } else if(n%2 === 0 ) {
    var tmp = fastExponent(b,n/2);
    return tmp*tmp;
  } else {
    return b*fastExponent(b,n-1);
  }
};

// console.log(fastExponent(3,5));
// console.log(fastExponent(2,1023));

var fib = function(n) {
  if (n <= 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  } else {
    var prevFib = fib(n-1);
    prevFib.push(prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2]);
    return prevFib;
  }
};

// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(17));

var binSearch = function(array, target) {
  var midpoint = Math.floor(array.length/2);
  if(array.length === 0) {
    return NaN;
  } else if(target === array[midpoint]) {
    return midpoint;
  } else if (target < array[midpoint]) {
    return binSearch(array.slice(0,midpoint), target);
  } else {
    return midpoint + 1 + binSearch(array.slice(midpoint+1,array.length), target);
  }
};

// console.log(binSearch([1,2,2,2,3,4,5,6,7,11,23,71], 11));
// console.log(binSearch([1,2,2,2,3,4,5,6,7,11,23,71], 3));
// console.log(binSearch([1,2,2,2,3,4,5,6,7,11,23,71], 1));
// console.log(binSearch([1,2,2,2,3,4,5,6,7,11,23,71], 12));
// console.log(binSearch([1,2,2,2,3,4,5,6,7,11,23,71], 100));

var makeChange = function(coins, total) {
  if (total === 0 || coins.length === 0) {
    return [];
  } else if ( coins[0] > total ) {
    return makeChange( coins.slice(1, coins.length), total);
  } else {
    var bestChange;
    var shortestLength = Infinity;
    for(var c = 0; c < coins.length; c++) {
      var newChange = makeChange( coins, total - coins[c] );
      newChange.push(coins[c]);
      if(newChange.length < shortestLength) {
        shortestLength = newChange.length;
        bestChange = newChange;
      }
    }
    return bestChange;
  }
};

// console.log(makeChange([10,7,1], 14));
// console.log(makeChange([40, 25, 10, 5, 1], 65));

var mergeSort = function(array) {
  if(array.length <= 1) {
    return array;
  } else {
    return merge(mergeSort(array.slice(0, array.length/2)),
      mergeSort(array.slice(array.length/2, array.length)));
  }
};

var merge = function(left, right) {
  var outputArray = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      outputArray.push(left[0]);
      left = left.slice(1, left.length);
    } else {
      outputArray.push(right[0]);
      right = right.slice(1, right.length);
    }
  }
  return outputArray.concat(left).concat(right);
};

//console.log(mergeSort([7, 4, 5, 9, 2, 2, 3, 4, 1, 6]));

var subsets = function(array) {
  if(array.length === 0){
    return [[]];
  } else if (array.length === 1){
    return [ [], [array[0]] ];
  } else {
    var newNum = array.pop();
    var sets = subsets(array);
    var newSets = [];
    for(var i = 0; i < sets.length; i++) {
      newSets.push(sets[i]);
      newSets.push(sets[i].concat([newNum]));
    }
    return newSets;
  }
};


console.log(subsets([1,2,3]));
