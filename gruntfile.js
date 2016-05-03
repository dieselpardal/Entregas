module.exports = function(grunt) {

  grunt.initConfig({

    'http-server': {
      'root': {
        root: '',
        port: 8200,
        host: '0.0.0.0',
        https: false,
        openBrowser : false
        }
      }
  });
  grunt.loadNpmTasks('grunt-http-server');
};
