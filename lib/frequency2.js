var words = ["candy", "backpack", "candle", "wallet", "zebra"];

function frequency(array) {
  var string = array.join("");
  //console.log(string);
  var seen = {};
  var current;

  for (var i = 0; i < string.length; i++) {
    current = string.charAt(i);
    if(seen[current]) {
      seen[current]++;
    } else {
      seen[current] = 1;
    }
  }
  return seen;
}

console.log("Each letter in the array is repeated the following times : ")
console.log(frequency(words));
