(function() {

  this.BaseObject = (function() {

    function BaseObject() {}

    BaseObject.prototype.id = null;

    BaseObject.prototype.bind = function(event, func) {
      this.event = event;
      this.func = func;
      return $(this).bind(event, func);
    };

    BaseObject.prototype.unbind = function(event, func) {
      this.event = event;
      this.func = func;
      return $(this).unbind(event, func);
    };

    BaseObject.prototype.trigger = function(event) {
      this.event = event;
      return $(this).trigger(event);
    };

    return BaseObject;

  })();

}).call(this);
