root = exports ? window

if not root.jQuery? then root.$ = root.jQuery = require("jquery")

class BaseObject
    id: null
    bind: (event, func) ->
        root.jQuery(this).bind(event, func)

    unbind: (event, func) ->
        root.jQuery(this).unbind(event, func) 

    trigger: (event) ->
        root.jQuery(this).trigger(event)


root.BaseObject = BaseObject