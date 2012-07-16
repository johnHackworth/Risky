if exports? then {@BaseObject} = require("../../src/base/baseObject.coffee")

class Controller extends @BaseObject
	element: null
	template: null
	model: null

	# constructor: (@params) ->
	# 	if params and params.element
	# 		this.element = params.element
	# 	if params and params.template
	# 		this.template = params.template

	# render: (@context)->
	# 	if not context:
	# 		context = this.getContext

	# 	if this.template and this.element
	# 		$(this.element).html this.template context

	# getContext: ->
	# 	this.model.asJson

root = exports ? window
root.Controller = Controller