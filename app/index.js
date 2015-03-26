'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');

var HellsingGenerator = yeoman.generators.Base.extend({
  init: function() {
    console.log("set up complete!");
  },

  generate: function() {
    this.sourceRoot(path.join(__dirname, './templates'));

    var source = '.';
    var destination = '.';

    var root = this.isPathAbsolute(source) ? source : path.join(this.sourceRoot(), source);
    var files = this.expandFiles('**', { dot: true, cwd: root });
    var dest, src;

    var self = this;

    files.forEach(function(file) {

      var name = file.name;

      src = path.join(root, file);
      dest = path.join(destination, file);

      self.copy(src, dest);
    });
  }
});

module.exports = HellsingGenerator;