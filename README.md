# grunt-shdrsconcat
> Grunt plugin for unifying all shaders in a single object. The content of each shader is concatenated into a single string.

## Getting Started
This plugin requires Grunt `~0.4.1`.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-shdrsconcat --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-shdrsconcat');
```

## The "shdrsconcat" task
### Overview
In your project's Gruntfile, add a section named `shdrsconcat` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  shdrsconcat: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  },
})
```

### Taget configuration

#### [target].options.object
Type: `String`

The object where the shaders will be added.

#### [target].options.prefix
Type: `String`

A prefix that will be added to the file.

### Usage example
The following example shows how to use the task.

```js
grunt.initConfig({
  src: {
    options: {
      object: 'ShaderLibrary'
    },
    files: {
      'ShaderLibrary.js': [
        'src/shaders/*.vert',
        'src/shaders/*.frag'
      ]
    }
  }
})
```
### Feedback

Pull requests, feature ideas and bug reports are welcome.

### License

MIT.
