(function() {

  describe('Model class', function() {
    beforeEach(function() {
      return this.model = new Model;
    });
    it('should be able to create a model', function() {
      expect(this.model).toBeTruthy;
      return expect(this.model instanceof Model).toBeTruthy;
    });
    it('should be able to initializa a model', function() {
      this.model = new Model({
        "irrelevant": 1,
        "irrelevant2": "cachopo",
        "irrelevant3": [],
        "irrelevant4": [1, 2, 3],
        "irrelevant5": {
          "sub1": 1,
          "sub2": [1, 2]
        }
      });
      expect(this.model.irrelevant).toEqual(1);
      expect(this.model.irrelevant2).toEqual("cachopo");
      expect(this.model.irrelevant3 instanceof Array).toBeTruthy;
      expect(this.model.irrelevant4 instanceof Array).toBeTruthy;
      expect(this.model.irrelevant4.length).toEqual(3);
      return expect(this.model.irrelevant5.sub1).toEqual(1);
    });
    it('should be able to initialice several instances of the same class' + 'without link their attributes', function() {});
    this.model = new Model({});
    this.model2 = new Model({
      "irrelevant": 1,
      "irrelevant2": "cachopo",
      "irrelevant3": [],
      "irrelevant4": [1, 2, 3],
      "irrelevant5": {
        "sub1": 1,
        "sub2": [1, 2]
      }
    });
    this.model.set({
      'irrelevant': 2
    });
    expect(this.model.irrelevant2).toBeFalsy;
    expect(this.model.irrelevant).toEqual(2);
    return it('should trigger the change events', function() {
      var attrChange, globalChange;
      this.model = new Model({
        'irrel': 1
      });
      globalChange = false;
      attrChange = false;
      this.model.bind('change', function() {
        return globalChange = true;
      });
      this.model.bind('change:irrel', function() {
        return attrChange = true;
      });
      this.model.set({
        'irrel': 2
      });
      expect(globalChange).toBeTruthy;
      return expect(attrChange).toBeTruthy;
    });
  });

}).call(this);
