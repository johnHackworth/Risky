(function() {
  var Controller, root,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  if (typeof exports !== "undefined" && exports !== null) {
    this.BaseObject = require("../../src/base/baseObject.coffee").BaseObject;
  }

  Controller = (function(_super) {

    __extends(Controller, _super);

    Controller.prototype.element = null;

    Controller.prototype.template = null;

    Controller.prototype.model = null;

    function Controller(params) {
      if (params && params.element) this.element = params.element;
      if (params && params.template) this.template = params.template;
      if (params && params.model) this.model = params.model;
    }

    Controller.prototype.getContext = function() {
      var _ref;
      return (_ref = this.model) != null ? _ref.asJson() : void 0;
    };

    return Controller;

  })(this.BaseObject);

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  root.Controller = Controller;

}).call(this);
