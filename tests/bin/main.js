  require([
  	"vendors/jasmine/lib/jasmine-1.2.0/jasmine.js",
  	"vendors/jasmine/lib/jasmine-1.2.0/jasmine-html.js",
	"../../bin/js/riskyBase",
  	"../../bin/js/model",
  	"../../bin/js/map",
  	
  	],
  	function() {
  		debugger;
  		require([
			"spec.map"
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