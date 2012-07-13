class @Model extends @BaseObject
    constructor: (@attr) ->
        this.set(attr)

    _set: (@attr) ->
        changes = false
        for own key, value of attr
            if this[key] != value
                changes = true
                this[key] = value 
                this.trigger 'change:'+key
        changes

    set: (@attr) ->
        if this._set(attr)
            this.trigger 'change'



    