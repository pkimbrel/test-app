require.config({
    baseUrl: "",
    paths: {
	    "jquery": "lib/jquery-1.7.1",
	    "test-module": "src/test-module"
    }
});

require(['jquery', 'test-module'],function($) {
});