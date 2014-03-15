require.config({
    baseUrl: "/",
    paths: {
        "jquery": "lib/jquery-1.7.1"
    }
});

require(['jquery', 'test-module'],function($) {

});