(function() {
  var Tile, root,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  if (typeof exports !== "undefined" && exports !== null) {
    this.Model = require("../../src/base/model.coffee").Model;
  }

  Tile = (function(_super) {

    __extends(Tile, _super);

    function Tile(attr) {
      var _base, _base2;
      this.attr = attr;
      this.id = null;
      this.type = 0;
      this.position = {
        x: 0,
        y: 0
      };
      if (attr && attr.position) {
        if ((_base = this.position).x == null) _base.x = attr.position.x;
        if ((_base2 = this.position).y == null) _base2.y = attr.position.y;
      }
      Tile.__super__.constructor.apply(this, arguments);
    }

    return Tile;

  })(this.Model);

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  root.Tile = Tile;

}).call(this);
