(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  this.Model = (function(_super) {

    __extends(Model, _super);

    function Model(attr) {
      this.attr = attr;
      this.set(attr);
    }

    Model.prototype._set = function(attr) {
      var changes, key, value;
      this.attr = attr;
      changes = false;
      for (key in attr) {
        if (!__hasProp.call(attr, key)) continue;
        value = attr[key];
        if (this[key] !== value) {
          changes = true;
          this[key] = value;
          this.trigger('change:' + key);
        }
      }
      return changes;
    };

    Model.prototype.set = function(attr) {
      this.attr = attr;
      if (this._set(attr)) return this.trigger('change');
    };

    return Model;

  })(this.BaseObject);

}).call(this);
