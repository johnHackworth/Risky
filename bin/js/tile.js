(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  this.Tile = (function(_super) {

    __extends(Tile, _super);

    Tile.prototype.id = null;

    Tile.prototype.position = null;

    Tile.prototype.type = 0;

    function Tile(attr) {
      var _base, _base2;
      this.attr = attr;
      this.position = {
        x: 0,
        y: 0
      };
      if (attr && attr.position) {
        if ((_base = this.position).x == null) _base.x = attr.position.x;
        if ((_base2 = this.position).y == null) _base2.y = attr.position.y;
      }
    }

    return Tile;

  })(this.Model);

}).call(this);
