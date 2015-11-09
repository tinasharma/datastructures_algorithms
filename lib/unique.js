'use strict';

var bags = ["clutch", "backpack", "hobo", "clutch", "wallet", "hobo"];

function unique(array) {
  var copy = {};
  var arraycopy;

  var seen = {};
  var current;
  var copy = [];
  var j = 0;

  for (var i = 0; i < array.length; i++) {
    current = array[i];

    if(!seen[current]) {
      copy[j] = array[i];
      j++;
    }

    seen[current] = true;
  }
  return copy;
}

console.log("The original list of the array bags is : ");
console.log(bags);

console.log("The unique list of the array bags is : ");
console.log(unique(bags));
