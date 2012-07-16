if exports? then {@Model} = require("../../src/base/model.coffee")

class Map extends @Model
	id: null

root = exports ? window
root.Map = Map