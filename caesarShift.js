'use strict';

// const shift = {}

function encode (str) {
  var arr = str.split('').map(function(val) {
    var code = val.codePointAt(0);
    if (code >= 65 && code <= 90) {
      if (code + 3 > 90) {
        code -= 26;
      } else {
        code = code + 3;
      }
    } else if (code >= 97 && code <= 122) {
      if (code + 3 > 122) {
        code -= 26;
      } else {
        code = code +3;
      }
    }
  });

}


module.exports = {};
