(function() {
  var BaseObject, root;

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  if (!(root.jQuery != null)) root.$ = root.jQuery = require("jquery");

  BaseObject = (function() {

    function BaseObject() {}

    BaseObject.prototype.id = null;

    BaseObject.prototype.bind = function(event, func) {
      return root.jQuery(this).bind(event, func);
    };

    BaseObject.prototype.unbind = function(event, func) {
      return root.jQuery(this).unbind(event, func);
    };

    BaseObject.prototype.trigger = function(event) {
      return root.jQuery(this).trigger(event);
    };

    return BaseObject;

  })();

  root.BaseObject = BaseObject;

}).call(this);
