expect = require('chai').expect

{Tile} = require("../../src/terrain/tile.coffee")

describe 'Tile class', ->
    beforeEach ->
        this.tile = new Tile()

    it 'should be able to create a tile', ->
        expect(this.tile).exist
        expect(this.tile instanceof Tile).equal true

    it 'should initializate the values of the tile', ->
        expect(this.tile.position.x).equal 0
        expect(this.tile.position.y).equal 0
        expect(this.tile.type).equal 0
        expect(this.tile.id).equal null

    it 'should be able to import tile contents', ->
        this.tile = new Tile({
            position: {
                x:1,
                y:1
            },
            type: 1,
            id: '1-1'
        })

        expect(this.tile.position.x).equal 1
        expect(this.tile.position.y).equal 1
        expect(this.tile.type).equal 1
        expect(this.tile.id).equal '1-1'
