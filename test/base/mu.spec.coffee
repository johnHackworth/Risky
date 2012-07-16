expect = require("chai").expect

{Mu} = require("../../src/base/mu")

if exports? then $ = jQuery = require("jquery")

describe 'Mu utility library', ->
    beforeEach ->
        this.µ = new Mu

    it 'should be able to copy an array', ->
        arrayA = [{"irrel":1}, {"irrel":2}]
        arrayB = this.µ.clone(arrayA)

        arrayA[0].irrel = 5

        expect(arrayB[0].irrel).equal 1
        expect(arrayA[0].irrel).equal 5

    it 'should be able to copy an object', ->
        objA = {"irrel": {"irrel2": 2} }
        objB = this.µ.clone(objA)

        objA.irrel.irrel2 = 5

        expect(objB.irrel.irrel2).equal 2
        expect(objA.irrel.irrel2).equal 5


    it 'should be able to copy an object array', ->
        arrayA = [{"irrel": {"irrel2": 2} }, {"irrel": {"irrel2": 3} }]
        arrayB = this.µ.clone(arrayA)

        arrayA[0].irrel.irrel2 = 5

        expect(arrayB[0].irrel.irrel2).equal 2
        expect(arrayA[0].irrel.irrel2).equal 5

    it 'should be able to compare simple objects', ->
        objA = {"irrel":1, "irrel2":2 }
        objB = {"irrel":1, "irrel2":2 }

        expect(this.µ.equal(objA, objB)).equal true

    it 'should detect differences between simple objects', ->
        objA = {"irrel":1, "irrel2":2 }
        objB = {"irrel":1, "irrel2":2, "irrel3":3 }

        expect(this.µ.equal(objA, objB)).equal false

    it 'should compare complex objects', ->
        objA = {"irrel": 1, "irrel2": [1,2,3], "irrel3": [{"irrel4":2}]}
        objB = {"irrel": 1, "irrel2": [1,2,3], "irrel3": [{"irrel4":2}]}

        expect(this.µ.equal(objA, objB)).equal true

    it 'should detect differences in complex objects', ->
        objA = {"irrel": 1, "irrel2": [1,2,3], "irrel3": [{"irrel4":2}]}
        objB = {"irrel": 1, "irrel2": [1,3], "irrel3": [{"irrel4":2}]}

        expect(this.µ.equal(objA, objB)).equal true