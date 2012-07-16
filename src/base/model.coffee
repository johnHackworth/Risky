if exports? then {@BaseObject} = require("../../src/base/baseObject.coffee")

class Model extends @BaseObject
    constructor: (@attr) ->
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

root = exports ? window
root.Model = Model