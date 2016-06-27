(function () {
    'use strict';

    module.exports = function (grunt) {

        // Make sure npm packages have been installed first.
        if (!grunt.file.exists('node_modules')) {
            grunt.fail.fatal('You must run `npm install` before using Blackbaud Stache.');
        }

        // Load and execute the stache grunt task.
        grunt.task.loadNpmTasks('blackbaud-stache');
        grunt.task.registerTask('default', function () {
            grunt.task.run('stache');
        });
    };
}());
