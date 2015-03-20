Array.prototype.myEach = function(f) {
  for (var i = 0; i < this.length; i++) {
    f(this[i]);
  }
  return this;
};

// [1,2,3].myEach(function(n) {
//   console.log(n);
// });


Array.prototype.myMap = function(f) {
  var newArray = [];
  this.myEach(function(n) {
    newArray.push(f(n));
  });
  return newArray;
};

var a = [1,2,3].myMap(function(n) {
  return 2 * n;
});

//console.log(a);

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

var b = [1,2,3,4,5].myInject(function(n,m) {
  return n+m;
});

console.log(b);

b = [1,2,3,4,5].myInject(function(n,m) {
  return n*m;
});

console.log(b);
