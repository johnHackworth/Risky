expect = require('chai').expect

{Map} = require("../../src/map/map.coffee")


describe 'Map class', ->
	beforeEach ->
		this.map = new Map()

	it 'should be able to create a map', ->
		expect(this.map).exist
