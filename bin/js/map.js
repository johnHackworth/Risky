(function() {
  var Map, root,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  if (typeof exports !== "undefined" && exports !== null) {
    this.Model = require("../../src/base/model.coffee").Model;
  }

  Map = (function(_super) {

    __extends(Map, _super);

    function Map() {
      Map.__super__.constructor.apply(this, arguments);
    }

    Map.prototype.id = null;

    return Map;

  })(this.Model);

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  root.Map = Map;

}).call(this);
