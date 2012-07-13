describe 'Tile class', ->
    beforeEach ->
        this.tile = new Tile()

    it 'should be able to create a tile', ->
        expect(this.tile).toBeTruthy()
        expect(this.tile instanceof Tile).toBeTruthy()

    it 'should initializate the values of the tile', ->
        expect(this.tile.position.x).toEqual(0)
        expect(this.tile.position.y).toEqual(0)
        expect(this.tile.type).toEqual(0)
        expect(this.tile.id).toEqual(null)  

    it 'should be able to import tile contents', ->
        this.tile = new Tile({
            position: {
                x:1,
                y:1
            },
            type: 1,
            id: '1-1'
        })

        expect(this.tile.position.x).toEqual 1
        expect(this.tile.position.y).toEqual 1
        expect(this.tile.type).toEqual 1
        expect(this.tile.id).toEqual '1-1'
