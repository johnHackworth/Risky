if typeof exports != 'undefined'
    # this should make the test work with jasmine-node, but it's not working
    jsdom = require '../../../node_modules/jsdom'
    window =  jsdom.jsdom('<html><head></head><body></body></html>').createWindow()
    jQ = require '../../../node_modules/jquery'
    bO = require '../../../src/base/baseObject'

describe 'BaseObject class', ->
    beforeEach ->
        this.obj = new BaseObject

    it 'should be able to create a BaseObject', ->
        expect(this.obj).toBeTruthy
        expect(this.obj instanceof BaseObject).toBeTruthy 

    it 'should be able to bind an event to a function and trigger this event', ->
        changed = false

        change = -> changed = true

        this.obj.bind('change', change)

        this.obj.trigger 'change'

        expect(changed).toBeTruthy

    it 'should be able to unbind an event', ->
        changed = false

        change = -> changed = true

        this.obj.bind('change', change)
        this.obj.unbind('change', change)

        this.obj.trigger 'change'

        expect(changed).toBeFalsy
