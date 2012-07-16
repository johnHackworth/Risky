(function() {
  var Model, root,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  if (typeof exports !== "undefined" && exports !== null) {
    this.BaseObject = require("../../src/base/baseObject.coffee").BaseObject;
  }

  Model = (function(_super) {

    __extends(Model, _super);

    function Model(attr) {
      this.attr = attr;
      this.set(attr);
    }

    Model.prototype._set = function(attr) {
      var changes, key, value;
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
      if (this._set(attr)) return this.trigger('change');
    };

    return Model;

  })(this.BaseObject);

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  root.Model = Model;

}).call(this);
