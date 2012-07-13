(function() {
  var bO, jQ, jsdom, window;

  if (typeof exports !== 'undefined') {
    jsdom = require('../../../node_modules/jsdom');
    window = jsdom.jsdom('<html><head></head><body></body></html>').createWindow();
    jQ = require('../../../node_modules/jquery');
    bO = require('../../../src/base/baseObject');
  }

  describe('BaseObject class', function() {
    beforeEach(function() {
      return this.obj = new BaseObject;
    });
    it('should be able to create a BaseObject', function() {
      expect(this.obj).toBeTruthy;
      return expect(this.obj instanceof BaseObject).toBeTruthy;
    });
    it('should be able to bind an event to a function and trigger this event', function() {
      var change, changed;
      changed = false;
      change = function() {
        return changed = true;
      };
      this.obj.bind('change', change);
      this.obj.trigger('change');
      return expect(changed).toBeTruthy;
    });
    return it('should be able to unbind an event', function() {
      var change, changed;
      changed = false;
      change = function() {
        return changed = true;
      };
      this.obj.bind('change', change);
      this.obj.unbind('change', change);
      this.obj.trigger('change');
      return expect(changed).toBeFalsy;
    });
  });

}).call(this);
