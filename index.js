'use strict';

module.exports = exports = {
  ctc2hanzi: function(str) {
    return map(str, 'ctc2hanzi');
  },

  hanzi2ctc: function(str) {
    return map(str, 'hanzi2ctc');
  },

  convert: function(str) {
    var type = /^\d+$/.test(str.split(' ').join('')) ? 'ctc2hanzi' : 'hanzi2ctc';
    return map(str, type);
  }
};

function map(str, type) {
  var dict = {};
  var strarr = [];
  if (type === 'ctc2hanzi') {
    dict = require('./dict/ctc2hanzi.json');
    strarr = str.split(' ');
  } else if (type === 'hanzi2ctc') {
    dict = require('./dict/hanzi2ctc.json');
    strarr = str.split('');
  }

  if (str.length <= 0) {
    return new Error('String is empty');
  }

  return strarr.map(function(word) {
    return dict[word];
  }).join(type === 'ctc2hanzi' ? '' : ' ');
}
