(function() {
  var $, Mu, jQuery, root,
    __hasProp = Object.prototype.hasOwnProperty;

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  if (typeof exports !== "undefined" && exports !== null) {
    $ = jQuery = require("jquery");
  }

  Mu = (function() {

    function Mu() {}

    Mu.prototype.clone = function(param) {
      var arrayClone, item, result, _i, _len;
      result = null;
      if (param instanceof Array) {
        arrayClone = [];
        for (_i = 0, _len = param.length; _i < _len; _i++) {
          item = param[_i];
          arrayClone.push(this.clone(item));
        }
        result = arrayClone;
      } else if (typeof param === 'object') {
        result = $.extend(true, {}, param);
      } else {
        result = param;
      }
      return result;
    };

    Mu.prototype.equal = function(objA, objB) {
      var areEqual, i, key, value, _ref;
      areEqual = true;
      debugger;
      if (objA instanceof Array) {
        if (objA.length !== objB.length) {
          areEqual = false;
        } else {
          for (i = _ref = objA.length - 1; _ref <= 0 ? i <= 0 : i >= 0; _ref <= 0 ? i++ : i--) {
            areEqual = this.equal(objA[i], objB[i]);
          }
        }
      } else if (typeof objA === 'object') {
        for (key in objA) {
          if (!__hasProp.call(objA, key)) continue;
          value = objA[key];
          areEqual = this.equal(objB[key], value);
        }
        for (key in objB) {
          if (!__hasProp.call(objB, key)) continue;
          value = objB[key];
          areEqual = this.equal(objA[key], value);
        }
      } else {
        areEqual = objA === objB;
      }
      return areEqual;
    };

    return Mu;

  })();

  root.Mu = Mu;

  root.µ = new Mu;

}).call(this);
