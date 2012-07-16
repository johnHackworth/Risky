expect = require('chai').expect

{µ} = require("../../src/base/mu.coffee")
{Controller} = require("../../src/base/controller.coffee")
{Model} = require("../../src/base/model.coffee")


describe 'Controller class', ->
    beforeEach ->
        this.controller = new Controller

    it 'should be able to create a controller', ->
        expect(this.controller).exist
        expect(this.controller instanceof Controller).equal(true)

    it 'should be able to initialize the controller with a model and get' +
        'it as context', ->
        this.model = new Model {"irrel": 1}
        this.controller = new Controller {"model": this.model}

        context = this.controller.getContext()

        expect(µ.equal(context, {"irrel":1})).equal true

