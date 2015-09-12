var path, util, deptree;

module.exports = function(grunt) {
  var path;

  path = require('path');

  grunt.registerMultiTask('shdrsconcat', 'Unifies all shaders in a single object.', function() {
    var options;

    options = this.options({
      object: null,
      prefix: null
    });

    this.files.forEach(function(f) {
      var object, src;

      object = options.object || path.basename(f.dest, '.js');
      src = options.prefix || '';

      src += f.src.filter(function(filePath) {
        if (!grunt.file.exists(filePath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        }

        return true;
      }).map(function(filePath, i) {
        var base, tokens, name, ext, src;

        if (grunt.file.isDir(filePath))
          return;

        base = path.basename(filePath);
        tokens = base.split('.');
        name = tokens[0];
        ext = tokens[1];
        src = JSON.stringify(grunt.file.read(filePath));

        if(ext === 'vert')
          return object + '[\'' + name + '\'].vertex = ' + src + ';';
        else if (ext === 'frag')
          return object + '[\'' + name + '\'].fragment = ' + src + ';';
        else
          return;
      }).join('\n');

      grunt.file.write(f.dest, src);
      grunt.log.writeln('File "' + f.dest + ' created.');
    });
  });
};
