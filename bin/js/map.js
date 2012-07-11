(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  this.Map = (function(_super) {

    __extends(Map, _super);

    function Map() {
      Map.__super__.constructor.apply(this, arguments);
    }

    Map.prototype.id = null;

    return Map;

  })(this.Model);

}).call(this);
