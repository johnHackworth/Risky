class @Tile extends @Model

	constructor: (@attr) ->
		this.id = null
		this.type = 0
		this.position = {
			x: 0,
			y: 0
		}
		if attr and attr.position
			this.position.x ?= attr.position.x
			this.position.y ?= attr.position.y

		super

