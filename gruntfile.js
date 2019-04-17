module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uncss: {
            options: {
                ignore: [
                    new RegExp('^.tooltip.*'), new RegExp('^.bs-tooltip-auto.*'),
                    new RegExp('^.custom-nav.*'), new RegExp('^.stickyadd.*'),
                    new RegExp('^.alert.*'), new RegExp('^button.close.*'),
                    new RegExp('^.spinner-grow.*')
                ]
            },
            dist: {
                files: [
                    { src: 'index-dev.html', dest: 'build/style.css' }
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
        concat : {
            dist : {
                src: [
                    'js/jquery.min.js', 'js/jquery-ui.min.js', 'js/popper.min.js',
                    'js/bootstrap.min.js', 'js/jquery.easing.min.js', 'js/scrollspy.min.js',
                    'js/typed.min.js', 'js/jquery.magnific-popup.min.js', 'js/isotope.pkgd.min.js',
                    'js/particles.min.js', 'js/particles.app.min.js', 'js/parallax.min.js',
                    'js/owl.carousel.min.js', 'js/custom.js'
                ],
                dest : "build/app.js"
            }
        },
        uglify: {
            my_target: {
                files: {
                    'build/app.min.js': ['build/app.js']
                }
            }
        },
        processhtml: {
            dist: {
                files: [
                    { src: 'index-dev.html', dest: 'index.html' }
                ]
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');

    // Default tasks.
    grunt.registerTask('default', ['uncss', 'cssmin', 'concat', 'uglify','processhtml']);
};