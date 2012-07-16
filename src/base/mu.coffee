root = exports ? window

if exports? then $ = jQuery = require("jquery")

class Mu
    clone: (param) ->
        result = null
        if param instanceof Array
            arrayClone = []
            for item in param
                arrayClone.push(this.clone(item))
            result = arrayClone
        else if typeof param == 'object'
            result = $.extend(true, {}, param)
        else
            result = param

        result

    equal: (objA, objB) ->
        areEqual = true
        debugger;
        if objA instanceof Array
            if objA.length != objB.length
                areEqual = false
            else
                for i in [(objA.length - 1)..0]
                    areEqual = this.equal(objA[i], objB[i])
        else if typeof objA == 'object'
            for own key, value of objA
                areEqual = this.equal(objB[key], value)

            for own key, value of objB
                areEqual = this.equal(objA[key], value)
        else
            areEqual = (objA == objB)

        areEqual

root.Mu = Mu
root.µ = new Mu