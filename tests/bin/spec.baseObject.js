(function() {

  describe('BaseObject class', function() {
    beforeEach(function() {
      return this.obj = new BaseObject;
    });
    it('should be able to create a BaseObject', function() {
      expect(this.obj).toBeTruthy;
      return expect(this.obj instanceof BaseObject).toBeTruthy;
    });
    return it('should be able to bind an event to a function and trigger this event', function() {
      var change, changed;
      changed = false;
      change = function() {
        return changed = true;
      };
      this.obj.bind('change', change);
      this.obj.trigger('change');
      return expect(changed).toBeTruthy;
    });
  });

}).call(this);
