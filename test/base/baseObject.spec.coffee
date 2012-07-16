expect = require("chai").expect

{BaseObject} = require("../../src/base/baseObject")


if exports? then $ = jQuery = require("jquery")

describe 'BaseObject class', ->
    beforeEach ->
        this.obj = new BaseObject

    it 'should be able to create a BaseObject', ->
        expect(this.obj).exist
        expect(this.obj instanceof BaseObject).equal(true)
        expect(this.obj.trigger).exist

    it 'should be able to bind an event to a function and trigger this event', ->
        changed = false

        change = -> changed = true

        this.obj.bind('change', change)
        this.obj.trigger 'change'

        expect(changed).equal(true)

    it 'should be able to unbind an event', ->
        changed = false

        change = -> changed = true

        this.obj.bind('change', change)
        this.obj.unbind('change', change)

        this.obj.trigger 'change'

        expect(changed).equal(false)
