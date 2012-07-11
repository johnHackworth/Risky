class @Tile extends @Model
	id: null
	position: null
	type: 0

	constructor: (@attr) ->
		this.position = {
			x: 0,
			y: 0
		}
		if attr and attr.position
			this.position.x ?= attr.position.x
			this.position.y ?= attr.position.y

