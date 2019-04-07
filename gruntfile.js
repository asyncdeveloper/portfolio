module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uncss: {
            dist: {
                files: [
                    { src: 'index-production.html', dest: 'build/style.css' }
                ]
            }
        },
        cssmin: {
            dist: {
                files: [
                    { src: 'build/style.css', dest: 'build/style.min.css' }
                ]
            }
        },
        processhtml: {
            dist: {
                files: [
                    { src: 'index-production.html', dest: 'index.html' }
                ]
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');

    // Default tasks.
    grunt.registerTask('default', ['uncss', 'cssmin', 'processhtml']);
};