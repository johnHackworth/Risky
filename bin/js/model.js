(function() {
  var Model, root, µ, _ref,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  if (typeof exports !== "undefined" && exports !== null) {
    _ref = require("../../src/base/mu.coffee"), this.Mu = _ref.Mu, µ = _ref.µ;
  }

  if (typeof exports !== "undefined" && exports !== null) {
    this.BaseObject = require("../../src/base/baseObject.coffee").BaseObject;
  }

  Model = (function(_super) {

    __extends(Model, _super);

    Model.prototype.__isModel = true;

    function Model(attr) {
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

    Model.prototype.asJson = function() {
      var exportedJson, key, value;
      exportedJson = {};
      for (key in this) {
        if (!__hasProp.call(this, key)) continue;
        value = this[key];
        if (key.substr(0, 1) !== '_') {
          if (typeof value === 'string' || typeof value === 'number') {
            exportedJson[key] = value;
          } else if (value.__isModel) {
            exportedJson[key] = value.asJson();
          } else if (value instanceof Array) {
            exportedJson[key] = µ.clone(value);
          } else if (typeof value === 'object') {
            exportedJson[key] = µ.clone(value);
          }
        }
      }
      return exportedJson;
    };

    return Model;

  })(this.BaseObject);

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  root.Model = Model;

}).call(this);
