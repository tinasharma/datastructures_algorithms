var words = ["candy", "backpack", "candle", "wallet", "zebra"];

function frequency(array) {
  var string = array.join("");
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

  var max = 0;
  var letter = '';
  for (var current in seen) {
    if(seen[current] > max) {
      max = seen[current];
      letter = current;
    }
}
  console.log("The most common letter is : " + letter + " and it shows up : " + max + " times");
  return letter, max;
}

frequency(words);



