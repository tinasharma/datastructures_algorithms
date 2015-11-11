'use strict';

module.exports = {

  shift: function shift(array) {
    var newarray = [];
    newarray.length = array.length - 1;
    for (var i = 0; i < newarray.length ; i++) {
      newarray[i] = array[i+1];
    }
    return newarray;
  },

  unshift: function unshift(array, item) {
    var newarray = [];
    newarray[0] = item;
    for (var i =0; i < array.length; i++) {
      newarray[i+1] = array[i];
    }
    return newarray;
  },

  pop: function pop(array) {
    var newarray = [];
    newarray.length = array.length - 1;
    for (var i = 0; i < newarray.length ; i++) {
      newarray[i] = array[i];
    }
    return newarray;
  },

  push: function push(array, item) {
    var newarray = [];
    newarray[array.length] = item;
    for (var i =0; i < array.length; i++) {
      newarray[i] = array[i];
    }
    return newarray;
  }

};
