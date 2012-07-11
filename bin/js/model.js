(function() {
  var __hasProp = Object.prototype.hasOwnProperty;

  this.Model = (function() {

    function Model(attr) {
      this.attr = attr;
      this.set(attr);
    }

    Model.prototype.set = function(attr) {
      var key, value, _results;
      this.attr = attr;
      _results = [];
      for (key in attr) {
        if (!__hasProp.call(attr, key)) continue;
        value = attr[key];
        _results.push(this[key] = value);
      }
      return _results;
    };

    return Model;

  })();

}).call(this);
