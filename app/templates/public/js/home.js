require.config({
    paths: {
        jquery: 'lib/jquery.min'
    }
});

define(['lib/class', 'lib/underscore-min', 'util'], function() {
  require(["main"]);
});
