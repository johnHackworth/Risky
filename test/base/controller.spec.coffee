expect = require('chai').expect

{Controller} = require("../../src/base/controller.coffee")


describe 'Controller class', ->
    beforeEach ->
        this.controller = new Controller

    it 'should be able to create a controller', ->
        expect(this.controller).exist
        expect(this.controller instanceof Controller).equal(true)

