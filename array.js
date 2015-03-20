var myUniq = function() {
  var newArray = [];
  for(var i = 0; i < this.length; i++) {
    if(newArray.indexOf(this[i]) === -1) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};


Array.prototype.myUniq = myUniq;

//console.log([1,2,1,3,3].myUniq());


Array.prototype.twoSum = function() {
  var newArray = [];
  for(var i = 0; i <= this.length; i++ ) {
    for(var j = i+1; j <= this.length; j++ ) {
      if(this[i]+this[j] === 0) {
        newArray.push([i,j]);
      }
    }
  }
  return newArray;
};

//console.log([-1,0,2,-2,1].twoSum());

Array.prototype.myTranspose = function() {
  var rows = this.length;
  var columns = this[0].length;
  var newMatrix = [];
  for(var i = columns; i>0; i--) {
    newMatrix.push(Array(rows));
  }
  for(var i = 0; i < rows; i++) {
    for(var j = 0; j < columns; j++) {
      newMatrix[j][i] = this[i][j];
    }
  }
  return newMatrix;
};

console.log([[1,2,3,4,5],[2,3,4,5,6],[3,4,5,6,7]].myTranspose());
