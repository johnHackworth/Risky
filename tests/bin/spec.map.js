(function() {

  describe('Map class', function() {
    beforeEach(function() {
      return this.map = new Map();
    });
    return it('should be able to create a map', function() {
      return expect(this.map).toBeTruthy();
    });
  });

}).call(this);
