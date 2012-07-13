  require([
  	"/vendors/jquery/jquery-1.7.2.js",
  	"/vendors/jasmine/lib/jasmine-1.2.0/jasmine.js",
  	"/vendors/jasmine/lib/jasmine-1.2.0/jasmine-html.js",
	"/bin/js/baseObject.js",
  	"/bin/js/model.js",
  	"/bin/js/controller.js",
	"/bin/js/tile.js",
  	"/bin/js/map.js",
  	
  	],
  	function() {
  		require([
  			"/tests/bin/baseObject.spec.js",
			"/tests/bin/spec.model.js",
			"/tests/bin/spec.map.js",
			"/tests/bin/spec.tile.js",

	  		],

		    function() {
		      var jasmineEnv = jasmine.getEnv();
		      jasmineEnv.updateInterval = 1000;

		      var htmlReporter = new jasmine.HtmlReporter();

		      jasmineEnv.addReporter(htmlReporter);

		      jasmineEnv.specFilter = function(spec) {
		        return htmlReporter.specFilter(spec);
		      };

		      var currentWindowOnload = window.onload;

		      window.onload = function() {
		        if (currentWindowOnload) {
		          currentWindowOnload();
		        }
		        execJasmine();
		      };

		      function execJasmine() {
		        jasmineEnv.execute();
		      }

		    }
  		);
  	}
 );