var expect = require('chai').expect;

var datastructures = require(__dirname + '/../lib/datastructures.js');

describe('array method pop', function()  {
  var array = ["Puppy", "Kitty", "Calf", "Kid"];
  it('should remove item from the end of the array', function() {
      expect(datastructures.pop(array)).to.eql(["Puppy", "Kitty", "Calf"]);
  });
});

describe('array method push', function()  {
  var array = ["Puppy", "Kitty", "Calf", "Kid"];

  it('should add item at the end of the array', function() {
    expect(datastructures.push(array, "baby")).to.eql(["Puppy", "Kitty", "Calf", "Kid", "baby"]);
  });
});

describe('array method shift', function()  {
  var array = ["Puppy", "Kitty", "Calf", "Kid"];
  it('should remove item from the end of the array', function() {
      expect(datastructures.shift(array)).to.eql(["Kitty", "Calf", "Kid"]);
  });
});

describe('array method unshift', function()  {
  var array = ["Puppy", "Kitty", "Calf", "Kid"];
  it('should remove item from the end of the array', function() {
      expect(datastructures.unshift(array, "baby")).to.eql(["baby", "Puppy", "Kitty", "Calf", "Kid"]);
  });
});
