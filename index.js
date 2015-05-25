'use strict';

module.exports = exports = {
  ctc2hanzi: function(str) {
    return map(str, 'ctc2hanzi');
  },

  hanzi2ctc: function(str) {
    return map(str, 'hanzi2ctc');
  },

  convert: function(str) {
    var type = /^\d+$/.test(str) ? 'ctc2hanzi' : 'hanzi2ctc';
    return map(str, type);
  }
};

function map(str, type) {
  var dict = {};
  if (type === 'ctc2hanzi') {
    dict = require('./dict/ctc2hanzi.json');
  } else if (type === 'hanzi2ctc') {
    dict = require('./dict/hanzi2ctc.json');
  }

  if (str.length <= 0) {
    return new Error('String is empty');
  }

  return str.split('').map(function(word) {
    return dict[word];
  }).join(' ');
}
