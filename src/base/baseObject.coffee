class @BaseObject
    id: null
    bind: (@event, @func) ->
        $(this).bind(event, func)

    unbind: (@event, @func) ->
        $(this).unbind(event, func) 

    trigger: (@event) ->
        $(this).trigger(event)
