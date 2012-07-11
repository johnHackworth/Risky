class @Model
    constructor: (@attr) ->
        this.set(attr)

    set: (@attr) ->
        for own key, value of attr
            this[key] = value 