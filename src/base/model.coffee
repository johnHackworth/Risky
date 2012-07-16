if exports? then {@Mu, µ} = require("../../src/base/mu.coffee")
if exports? then {@BaseObject} = require("../../src/base/baseObject.coffee")

class Model extends @BaseObject
    __isModel: true
    constructor: (attr) ->
        this.set(attr)

    _set: (attr) ->
        changes = false
        for own key, value of attr
            if this[key] != value
                changes = true
                this[key] = value
                this.trigger 'change:' + key
        changes

    set: (attr) ->
        if this._set(attr)
            this.trigger 'change'

    asJson: ->
        exportedJson = {}
        for own key, value of this
            if key.substr(0,1) != '_'
                # not private
                if typeof value == 'string' or typeof value == 'number'
                    exportedJson[key] = value
                else if value.__isModel
                    exportedJson[key] = value.asJson()
                else if value instanceof Array
                    exportedJson[key] = µ.clone(value)
                else if typeof value == 'object'
                    exportedJson[key] = µ.clone(value)
        exportedJson

root = exports ? window
root.Model = Model